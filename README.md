# 🤖 AI Tools Hub — NIST University

<div align="center">

![AI Tools Hub](https://img.shields.io/badge/NIST%20University-AI%20Tools%20Hub-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTAgMTAgMTAgMCAwIDAgMTAtMTBBMTAgMTAgMCAwIDAgMTIgMm0wIDJhOCA4IDAgMCAxIDggOCA4IDggMCAwIDEtOCA4IDggOCAwIDAgMS04LTggOCA4IDAgMCAxIDgtOG0wIDJhNiA2IDAgMCAwLTYgNiA2IDYgMCAwIDAgNiA2IDYgNiAwIDAgMCA2LTYgNiA2IDAgMCAwLTYtNiIvPjwvc3ZnPg==)
![Tools](https://img.shields.io/badge/AI%20Tools-140%2B-a78bfa?style=for-the-badge)
![Powered by Groq](https://img.shields.io/badge/Chatbot-Groq%20Llama%203.3%2070B-34d399?style=for-the-badge)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-ff3e78?style=for-the-badge)

**A futuristic, interactive dashboard of 140+ AI tools with a built-in AI chatbot — curated for NIST University.**

[🌐 Live Demo](#deployment) · [🤖 Chatbot](#-ai-chatbot) · [⚙️ Admin Panel](#%EF%B8%8F-admin-panel) · [🚀 Deploy](#deployment)

</div>

---

## ✨ Features

### 🌟 Animated Landing Page
- Glitch-animated **"AI TOOLS · NIST University"** title with Orbitron font
- Pulsing concentric rings + live particle background
- Auto-dismissing progress bar (3 seconds)

### 🔮 Tool Discovery Grid
- **140 AI tools** displayed as cards with real extracted logos
- Hover effects — glow, lift, scale animations
- Click any card → **animated modal** with full description, website link & Visit button

### 🔍 Search & Filter
- Real-time search across tool names and descriptions
- **10 category filters**: Chatbots · Coding · Research · Image · Video · Writing · Productivity · Data · Design · Presentation

### 🤖 AI Chatbot
- Powered by **Groq API + Llama 3.3 70B**
- Floating minimizable widget (bottom-right)
- Knows all 140 tools — recommends tools for any use case
- **Streaming responses** with rich Markdown formatting (bold, bullets, clickable links)
- Quick-prompt chips for instant queries
- Clear chat + conversation history

### ⚙️ Admin Panel
- Add new AI tools without touching code
- Fields: Tool Name · Website Link · Description · Logo (upload or URL)
- New tools appear instantly in the grid
- Persists in browser `localStorage`

---

## 🗂️ Project Structure

```
aitools-nist/
├── index.html          # Main single-page app
├── tools_data.js       # 140 AI tools data (name, description, link, image)
├── chatbot_data.js     # Chatbot system prompt (all 140 tools embedded)
├── chatbot.js          # Groq API integration + chatbot UI logic
├── images/             # 140 extracted AI tool logos (PNG / JPEG)
├── render.yaml         # Render.com static site config
├── .gitignore          # Excludes Python build scripts, DOCX, raw images
└── README.md           # This file
```

---

## 🚀 Deployment

### Option A — Render Static Site (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add index.html tools_data.js chatbot_data.js chatbot.js images/ render.yaml .gitignore README.md
   git commit -m "Initial commit: AI Tools Hub"
   git remote add origin https://github.com/YOUR_USERNAME/aitools-nist.git
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com) → **New +** → **Static Site**
   - Connect your GitHub repository
   - Render auto-detects `render.yaml` — no extra settings needed
   - Click **Create Static Site** ✅

> **`render.yaml` is pre-configured:**
> ```yaml
> services:
>   - type: web
>     env: static
>     staticPublishPath: .
>     routes:
>       - type: rewrite
>         source: /*
>         destination: /index.html
> ```

### Option B — Run Locally

```bash
# Python (no install required)
python -m http.server 8765
# Open: http://localhost:8765
```

---

## 🤖 AI Tools Included (Sample)

| Category | Tools |
|---|---|
| **Chatbots** | ChatGPT, Claude AI, Gemini, Grok, DeepSeek, Meta AI, Copilot |
| **Coding** | Cursor AI, Windsurf, Lovable, Bolt, Replit, Antigravity, Trae |
| **Research** | NotebookLM, Elicit, Consensus AI, Scholarcy, Zotero, SciSpace |
| **Image** | Midjourney, Stable Diffusion, Leonardo AI, Flux, Adobe Firefly |
| **Video** | Runway AI, Sora, Pika, Kling AI, InVideo, Synthesia, CapCut |
| **Writing** | Jasper, Copy.ai, Grammarly, QuillBot, Writesonic, Rytr |
| **Productivity** | Notion AI, Asana, ClickUp, Zapier, Superhuman, Otter.ai |
| **Data** | Julius AI, Flourish, Datawrapper, Rows AI, Visme |
| **Design** | Canva, Framer, Microsoft Designer, AutoDraw, Uizard |
| **Presentation** | Gamma AI, Beautiful.ai, Decktopus, Slidesgo, Tome |

*...and 90+ more tools across all categories.*

---

## 🔧 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, Vanilla CSS, Vanilla JavaScript |
| Fonts | Google Fonts — Outfit + Orbitron |
| AI Chatbot | Groq API (Llama 3.3 70B, streaming) |
| Animations | CSS keyframes, canvas particles |
| Persistence | Browser `localStorage` |
| Deployment | Render Static Sites |

---

## 📜 License & Credits

© 2025 — **Registered & Copyrighted by:**

- **N. Toyaad Kumar Reddy**
- **Brojo Kishore Mishra**

**All Rights Reserved · NIST University**

> This project was built exclusively for NIST University's academic community. Unauthorized reproduction or redistribution is prohibited.
