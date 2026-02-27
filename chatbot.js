// ─── OPENROUTER AI CHATBOT FOR AI TOOLS HUB ─────────────────────────────────
// 5-model fallback chain: tries each free model in order until one responds
const OR_API_KEY = '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';
const OR_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Free models tried in order — if one fails, next is attempted automatically
const OR_MODELS = [
  'mistralai/mistral-7b-instruct:free',       // 1st: fast, accurate
  'meta-llama/llama-3.2-3b-instruct:free',    // 2nd: Meta Llama, reliable
  'google/gemma-3-1b-it:free',                // 3rd: Google Gemma
  'qwen/qwen-2-7b-instruct:free',             // 4th: Qwen 7B
  'microsoft/phi-3-mini-128k-instruct:free',  // 5th: Microsoft Phi-3
];


// Chat state
let chatHistory = [];
let isBotOpen = false;
let isBotMinimized = false;
let isTyping = false;

// ─── INJECT CHATBOT HTML ─────────────────────────────────────────────────────
function injectChatbot() {
  const html = `
  <!-- CHATBOT TOGGLE BUTTON -->
  <button id="chatToggleBtn" onclick="toggleChatbot()" title="Chat with AI Tools Assistant" aria-label="Open AI Chatbot">
    <span class="chat-icon">🤖</span>
    <span class="chat-badge" id="chatBadge">AI</span>
    <span class="chat-pulse"></span>
  </button>

  <!-- CHATBOT WINDOW -->
  <div id="chatbotWindow" class="chatbot-hidden">
    <!-- Header -->
    <div class="cb-header">
      <div class="cb-header-left">
        <div class="cb-avatar">🤖</div>
        <div>
          <div class="cb-title">AI Tools Assistant</div>
          <div class="cb-status" id="cbStatus">
            <span class="cb-dot"></span> Online · NIST University
          </div>
        </div>
      </div>
      <div class="cb-header-actions">
        <button class="cb-icon-btn" onclick="clearChat()" title="Clear chat">🗑️</button>
        <button class="cb-icon-btn" id="minimizeBtn" onclick="minimizeChat()" title="Minimize">─</button>
        <button class="cb-icon-btn" onclick="toggleChatbot()" title="Close">✕</button>
      </div>
    </div>

    <!-- Body -->
    <div class="cb-body" id="cbBody">
      <!-- Messages go here -->
      <div class="cb-messages" id="cbMessages"></div>
    </div>

    <!-- Quick Prompts (shown above input) -->
    <div class="cb-quick-row" id="cbQuickRow">
      <button class="cb-quick-btn" onclick="sendQuick('Best tools for coding & development?')">💻 Coding</button>
      <button class="cb-quick-btn" onclick="sendQuick('What are the best AI tools for research?')">🔬 Research</button>
      <button class="cb-quick-btn" onclick="sendQuick('Best AI image generation tools?')">🎨 Image AI</button>
      <button class="cb-quick-btn" onclick="sendQuick('Best video creation AI tools?')">🎬 Video</button>
      <button class="cb-quick-btn" onclick="sendQuick('Top AI writing assistants?')">✍️ Writing</button>
    </div>

    <!-- Input area -->
    <div class="cb-footer">
      <div class="cb-input-row">
        <textarea id="cbInput" class="cb-input"
          placeholder="Ask about AI tools… e.g. 'best tools for presentations'"
          rows="1"
          onkeydown="handleChatKey(event)"
          oninput="autoResizeInput(this)"></textarea>
        <button class="cb-send-btn" id="cbSendBtn" onclick="sendMessage()" title="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
      <div class="cb-powered">Powered by <b>OpenRouter</b> · Mistral 7B</div>
    </div>
  </div>`;

  const div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);

  // Show welcome message
  addBotMessage(
    `👋 **Welcome to AI Tools Assistant!**\n\nI know everything about **140+ AI tools** curated for NIST University. Ask me:\n\n- **"Best tools for data visualization?"**\n- **"What is Cursor AI?"**\n- **"Which tool helps with academic writing?"**\n- **"Compare Runway AI and Sora"**\n\nHow can I help you today?`,
    false
  );
}

// ─── TOGGLE / MINIMIZE ────────────────────────────────────────────────────────
function toggleChatbot() {
  const win = document.getElementById('chatbotWindow');
  isBotOpen = !isBotOpen;
  if (isBotOpen) {
    win.className = 'chatbot-open';
    isBotMinimized = false;
    document.getElementById('chatBadge').textContent = 'AI';
    setTimeout(() => focusInput(), 350);
  } else {
    win.className = 'chatbot-hidden';
  }
}
function minimizeChat() {
  const win = document.getElementById('chatbotWindow');
  isBotMinimized = !isBotMinimized;
  win.className = isBotMinimized ? 'chatbot-minimized' : 'chatbot-open';
  document.getElementById('minimizeBtn').textContent = isBotMinimized ? '⬛' : '─';
}
function focusInput() {
  const inp = document.getElementById('cbInput');
  if (inp) inp.focus();
}

// ─── SEND MESSAGE ─────────────────────────────────────────────────────────────
function sendQuick(msg) {
  document.getElementById('cbInput').value = msg;
  sendMessage();
}
function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}
function autoResizeInput(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

async function sendMessage() {
  if (isTyping) return;
  const inp = document.getElementById('cbInput');
  const userMsg = inp.value.trim();
  if (!userMsg) return;

  // Hide quick prompts after first message
  document.getElementById('cbQuickRow').style.display = 'none';

  inp.value = '';
  inp.style.height = 'auto';
  addUserMessage(userMsg);

  chatHistory.push({ role: 'user', content: userMsg });
  await getAIResponse();
}

// ─── OPENROUTER API: MULTI-MODEL WATERFALL ───────────────────────────────────
// Tries each model in OR_MODELS in order. If all fail → local smart fallback.
async function getAIResponse(modelIndex = 0) {
  isTyping = true;
  const typingId = showTyping();

  const messages = [
    { role: 'system', content: CHATBOT_SYSTEM_PROMPT },
    ...chatHistory.slice(-10)
  ];

  // Try current model
  if (modelIndex < OR_MODELS.length) {
    const model = OR_MODELS[modelIndex];
    try {
      const resp = await fetch(OR_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OR_API_KEY}`,
          'HTTP-Referer': window.location.href,
          'X-Title': 'AI Tools Hub - NIST University'
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.65,
          max_tokens: 1024,
          stream: true
        })
      });

      if (!resp.ok) {
        // This model failed — silently try next one
        removeTyping(typingId);
        isTyping = false;
        console.warn(`Model ${model} failed (HTTP ${resp.status}), trying next...`);
        return getAIResponse(modelIndex + 1);
      }

      // ── Streaming response ──────────────────────────────────────────────────
      removeTyping(typingId);
      const msgId = addBotMessage('', true);
      let fullText = '';

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(l => l.startsWith('data: '));
        for (const line of lines) {
          const data = line.slice(6).trim();
          if (data === '[DONE]') break;
          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta?.content || '';
            if (delta) { fullText += delta; updateBotMessage(msgId, fullText); }
          } catch (_) { }
        }
      }

      // If model returned empty body, try next
      if (!fullText.trim()) {
        console.warn(`Model ${model} returned empty response, trying next...`);
        isTyping = false;
        return getAIResponse(modelIndex + 1);
      }

      chatHistory.push({ role: 'assistant', content: fullText });
      scrollToBottom();

    } catch (err) {
      // Network error — try next model
      removeTyping(typingId);
      isTyping = false;
      console.warn(`Model ${model} network error: ${err.message}, trying next...`);
      return getAIResponse(modelIndex + 1);
    } finally {
      isTyping = false;
    }

  } else {
    // ── ALL MODELS FAILED: Smart local fallback ─────────────────────────────
    removeTyping(typingId);
    isTyping = false;
    const localResponse = localToolSearch(chatHistory[chatHistory.length - 1]?.content || '');
    addBotMessage(localResponse, false);
    chatHistory.push({ role: 'assistant', content: localResponse });
    scrollToBottom();
  }
}

// ─── LOCAL SMART FALLBACK ─────────────────────────────────────────────────────
// When all APIs are down, search the tool database locally by keyword matching
function localToolSearch(query) {
  const q = query.toLowerCase();

  // Category keyword map
  const catMap = {
    'code|coding|developer|programming|github|debug|ide': 'CODE',
    'image|photo|picture|design|art|draw|generate image': 'IMAGE',
    'video|movie|film|animation|clip|reel|youtube': 'VIDEO',
    'write|writing|essay|grammar|blog|content|article': 'WRITING',
    'research|paper|academic|scholar|citation|study|thesis': 'RESEARCH',
    'data|chart|graph|spreadsheet|excel|csv|analytics': 'DATA',
    'presentation|slide|deck|ppt|powerpoint': 'PRESENTATION',
    'productivity|task|meeting|schedule|note|organize': 'PRODUCTIVITY',
    'chat|chatbot|assistant|gpt|ai chat|conversation': 'CHATBOT',
    'design|ui|ux|logo|figma|canva|wireframe': 'DESIGN'
  };

  // Find matched category
  let matchedCat = null;
  for (const [pattern, cat] of Object.entries(catMap)) {
    if (new RegExp(pattern).test(q)) { matchedCat = cat; break; }
  }

  // Extract tool blocks from system prompt
  const toolBlocks = CHATBOT_SYSTEM_PROMPT.split('TOOL:').slice(1);
  const matchedTools = [];

  for (const block of toolBlocks) {
    const lines = block.trim().split('\n');
    const name = lines[0]?.trim() || '';
    const catLine = lines.find(l => l.includes('CATEGORY:')) || '';
    const urlLine = lines.find(l => l.includes('URL:')) || '';
    const descLine = lines.find(l => l.includes('DESCRIPTION:')) || '';
    const cat = catLine.replace('CATEGORY:', '').trim().toUpperCase();
    const url = urlLine.replace('URL:', '').trim();
    const desc = descLine.replace('DESCRIPTION:', '').trim().substring(0, 100) + '...';

    const nameMatch = name && q.includes(name.toLowerCase().substring(0, 5));
    const catMatch = matchedCat && cat.includes(matchedCat);

    if (nameMatch || catMatch) {
      matchedTools.push({ name, url, desc, cat });
      if (matchedTools.length >= 6) break;
    }
  }

  if (matchedTools.length > 0) {
    const label = matchedCat ? `**${matchedCat.charAt(0) + matchedCat.slice(1).toLowerCase()} AI Tools**` : '**Matching AI Tools**';
    const list = matchedTools.map(t =>
      `▸ **[${t.name}](${t.url !== '#' ? t.url : '#'})** — ${t.desc}`
    ).join('\n');
    return `📡 *AI service temporarily busy — showing results from local database:*\n\n${label}\n\n${list}\n\n💡 Try refreshing the page for full AI responses.`;
  }

  // Generic helpful fallback
  return `📡 *AI service is temporarily unavailable.*\n\nIn the meantime, here are some top tools by category:\n\n🤖 **Chatbots** — ChatGPT, Claude, Gemini, Grok\n💻 **Coding** — Cursor AI, GitHub Copilot, Bolt.new\n🔬 **Research** — NotebookLM, Consensus AI, Elicit\n🎨 **Image** — Midjourney, Leonardo AI, Adobe Firefly\n🎬 **Video** — Runway AI, Sora, CapCut\n✍️ **Writing** — Grammarly, Jasper, QuillBot\n\nPlease try again in a moment for full AI-powered recommendations! 🚀`;
}


// ─── MESSAGE RENDERING ────────────────────────────────────────────────────────
function addUserMessage(text) {
  const container = document.getElementById('cbMessages');
  const div = document.createElement('div');
  div.className = 'cb-msg cb-msg-user';
  div.innerHTML = `<div class="cb-bubble cb-bubble-user">${escapeHtml(text)}</div>`;
  container.appendChild(div);
  scrollToBottom();
}

function addBotMessage(text, streaming) {
  const container = document.getElementById('cbMessages');
  const id = 'msg_' + Date.now();
  const div = document.createElement('div');
  div.className = 'cb-msg cb-msg-bot';
  div.id = id;
  div.innerHTML = `
    <div class="cb-bot-avatar">🤖</div>
    <div class="cb-bubble cb-bubble-bot">${formatBotResponse(text)}${streaming && !text ? '<span class="cb-cursor">▌</span>' : ''}</div>`;
  container.appendChild(div);
  scrollToBottom();
  return id;
}

function updateBotMessage(id, text) {
  const div = document.getElementById(id);
  if (!div) return;
  const bubble = div.querySelector('.cb-bubble-bot');
  if (bubble) {
    bubble.innerHTML = formatBotResponse(text) + '<span class="cb-cursor">▌</span>';
    scrollToBottom();
  }
}

function showTyping() {
  const container = document.getElementById('cbMessages');
  const id = 'typing_' + Date.now();
  const div = document.createElement('div');
  div.className = 'cb-msg cb-msg-bot';
  div.id = id;
  div.innerHTML = `
    <div class="cb-bot-avatar">🤖</div>
    <div class="cb-bubble cb-bubble-bot cb-typing-bubble">
      <span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>
    </div>`;
  container.appendChild(div);
  scrollToBottom();
  return id;
}
function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function clearChat() {
  document.getElementById('cbMessages').innerHTML = '';
  chatHistory = [];
  document.getElementById('cbQuickRow').style.display = 'flex';
  addBotMessage(`🔄 Chat cleared! Ask me anything about the **140+ AI tools** in our database.`, false);
}

// ─── MARKDOWN-LIKE FORMATTER ──────────────────────────────────────────────────
function formatBotResponse(text) {
  if (!text) return '';
  let html = escapeHtml(text);

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="cb-code">$1</pre>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="cb-inline-code">$1</code>');

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener" class="cb-link">$1 ↗</a>');

  // Headers ### ## #
  html = html.replace(/^### (.+)$/gm, '<div class="cb-h3">$1</div>');
  html = html.replace(/^## (.+)$/gm, '<div class="cb-h2">$1</div>');
  html = html.replace(/^# (.+)$/gm, '<div class="cb-h1">$1</div>');

  // Horizontal rule
  html = html.replace(/^---+$/gm, '<hr class="cb-hr">');

  // Bullet lists (- or * at start of line)
  html = html.replace(/^[-*•] (.+)$/gm, '<div class="cb-li">▸ $1</div>');

  // Numbered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<div class="cb-li cb-li-num">$1</div>');

  // Newlines to br (after block elements handled)
  html = html.replace(/\n/g, '<br>');

  // Remove double-br around block elements
  html = html.replace(/<br><div/g, '<div');
  html = html.replace(/<\/div><br>/g, '</div>');
  html = html.replace(/<br><hr/g, '<hr');
  html = html.replace(/<br><pre/g, '<pre');
  html = html.replace(/<\/pre><br>/g, '</pre>');

  return html;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function scrollToBottom() {
  const body = document.getElementById('cbMessages');
  if (body) body.scrollTop = body.scrollHeight;
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', injectChatbot);
