// ─── GROQ AI CHATBOT FOR AI TOOLS HUB ──────────────────────────────────────
const GROQ_API_KEY = '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';
const GROQ_MODEL = 'llama-3.3-70b-versatile';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

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
      <div class="cb-powered">Powered by <b>Groq</b> · Llama 3.3 70B</div>
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
  await getGroqResponse();
}

// ─── GROQ API CALL ────────────────────────────────────────────────────────────
async function getGroqResponse() {
  isTyping = true;
  const typingId = showTyping();

  // Build messages array: system + history (last 10 messages for context window control)
  const messages = [
    { role: 'system', content: CHATBOT_SYSTEM_PROMPT },
    ...chatHistory.slice(-10)
  ];

  try {
    const resp = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        temperature: 0.65,
        max_tokens: 1024,
        stream: true
      })
    });

    if (!resp.ok) {
      const err = await resp.json();
      throw new Error(err.error?.message || `HTTP ${resp.status}`);
    }

    // ── Streaming response ────────────────────────────────────────────────────
    removeTyping(typingId);
    const msgId = addBotMessage('', true); // empty, will fill streaming
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
          if (delta) {
            fullText += delta;
            updateBotMessage(msgId, fullText);
          }
        } catch (_) { }
      }
    }

    chatHistory.push({ role: 'assistant', content: fullText });
    scrollToBottom();
  } catch (err) {
    removeTyping(typingId);
    addBotMessage(`⚠️ **Connection error:** ${err.message}\n\nPlease try again.`, false);
  } finally {
    isTyping = false;
  }
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
