const AI_TOOLS = [
  {
    id: 0,
    name: `ChatGPT`,
    description: `ChatGPT lets you talk to an AI like chatting with a smart friend. You type questions or ideas, and it replies fast with helpful answers, stories, code, or advice. Powered by advanced models like GPT-4, it handles everything from homework help and writing emails to brainstorming business plans or fun conversations. It's free to start, with paid options for more features like faster responses and image creation via DALL-E. Used by millions worldwide, it's safe, learns from chats (without storing personal data), and improves daily. Great for students, writers, coders, and anyone curious. No app needed just a browser works. Always improving with updates from OpenAI.`,
    link: `https://chatgpt.com/`,
    image: `images/chatgpt.png`
  },
  {
    id: 1,
    name: `Perplexity AI`,
    description: `Perplexity AI works like a smart search engine that gives clear, accurate answers with sources cited right away. Ask any question, and it pulls real-time info from the web, summarizing facts, news, or research simply. Unlike regular search, it chats back conversationally, follows up on details, and shows links to verify everything. Free version is great for daily use; Pro adds advanced models, file uploads, and more queries. Founded in 2022, it's used by millions for work, study, or curiosity. Features like threads keep chats organized, and it avoids hallucinations by sticking to sources. Fast, trustworthy, and always updating perfect for quick facts or deep dives.`,
    link: `https://www.perplexity.ai/`,
    image: `images/perplexity_ai.png`
  },
  {
    id: 2,
    name: `Claude AI`,
    description: `Claude is a safe, smart AI chatbot made by Anthropic for tasks like writing, coding, analysis, and problem-solving. It chats naturally, remembers long conversations, and handles complex questions with step-by-step reasoning. Unlike some AIs, it focuses on being honest, harmless, and unbiased great for work, research, or creative projects. Free tier offers basic access; Pro unlocks bigger context, faster replies, image analysis, and advanced models like Claude 4. Supports voice, PDFs, and multi-step plans. Used by pros for reports, math, translations, and team collaboration. Privacy-focused with memory controls. Reliable for daily or tough challenges.`,
    link: `https://claude.ai/`,
    image: `images/claude_ai.png`
  },
  {
    id: 3,
    name: `Grok AI`,
    description: `Grok is a witty, truth-seeking AI assistant designed to answer almost any question with humour and real-time insights from X (formerly Twitter). Unlike stuffy chatbots, it offers two modes: Regular for straight facts and Fun for sarcastic banter, making chats engaging and human-like. Key strengths include live data access for current events, image generation, code debugging, email drafting, and problem-solving in math or science. Free basic access via X; premium unlocks Grok 4 model, voice mode, and unlimited queries. Great for news, creativity, or casual talks—always aiming for maximum truth without bias. Privacy-focused with evolving features.`,
    link: `https://grok.x.ai/`,
    image: `images/grok_ai.png`
  },
  {
    id: 4,
    name: `DeepSeek AI`,
    description: `DeepSeek offers advanced AI models like DeepSeek-V3 with over 600 billion parameters for free chatting, coding, and research. It handles complex queries in math, programming, content creation, and data analysis with high accuracy and long context up to 128K tokens. Strong in technical tasks, it generates human-like text, debugs code, summarizes files, and reasons step-by-step. Completely free with no signup needed on web or app; supports multimodal inputs like images. Competes with top models like GPT-4 at lower cost. Ideal for developers, students, and pros needing reliable, efficient AI without limits. Privacy-focused and always improving.`,
    link: `https://chat.deepseek.com/`,
    image: `images/deepseek_ai.png`
  },
  {
    id: 5,
    name: `Gemini AI`,
    description: `Gemini, from Google, is a multimodal AI that chats, generates images/videos, analyses files, and integrates with Gmail, Calendar, Maps, and more for seamless help. Ask it to summarize emails, plan trips, create shopping lists, or research topics deeply it pulls real-time web data and cites sources. Free tier covers basics; Advanced (paid) adds Gems for custom experts, 1M-token context for huge docs/code, video generation, and priority access to top models like Gemini 2.5 Pro. Works on web, Android/iOS apps with voice mode. Great for productivity, learning, coding, or fun handles screen sharing, audio overviews, and complex reasoning safely and fast.`,
    link: `https://gemini.google.com/`,
    image: `images/gemini_ai.png`
  },
  {
    id: 6,
    name: `Meta AI`,
    description: `Meta AI, powered by Llama models, helps users chat, generate images from text, answer questions, and get personalized suggestions right in their favourite apps. Just type "@MetaAI" in chats to ask for recipes, travel ideas, summaries, or fun edits no separate app needed. It understands context from conversations, translates languages, and creates realistic images or stickers. Free for everyone with no signup; advanced features like file analysis and incognito mode coming in 2026. Focuses on safe, everyday help for social sharing, shopping, or planning. Works globally in multiple languages, improving with user feedback for natural, helpful responses.`,
    link: `https://ai.meta.com/`,
    image: `images/meta_ai.jpg`
  },
  {
    id: 7,
    name: `Microsoft Copilot`,
    description: `Copilot helps with everyday tasks by chatting naturally to create documents, analyse data, generate images, or code in tools like Word, Excel, Teams, and VS Code. Powered by GPT models with Bing search, it pulls real-time info, summarizes emails, plans meetings, or designs slides just type or speak your request. Free basic version works everywhere; Pro subscription adds priority access, custom plugins, and deeper integrations for work. Great for productivity boosts, brainstorming, or learning—safe with enterprise security and citations for accuracy. Handles voice, vision, and large files; constantly updated for better reasoning and creativity.`,
    link: `https://copilot.microsoft.com/`,
    image: `images/microsoft_copilot.jpg`
  },
  {
    id: 8,
    name: `Cursor AI`,
    description: `Cursor is a smart code editor forked from VS Code, packed with AI features to make coding faster and easier. Using models like GPT-4 and Claude, it autocompletes multi-line code, generates functions from plain English comments, debugs errors, and explains complex codebases. Chat with AI inside the editor to ask about your project, search docs, or convert code between languages no leaving the app. Composer builds entire apps from prompts; Agent runs terminal commands and edits files autonomously. Free tier for basics; Pro unlocks unlimited use and advanced models. Perfect for developers saving hours on boilerplate, refactoring, and prototyping. Works on Mac, Windows, Linux.`,
    link: `https://cursor.com/`,
    image: `images/cursor_ai.png`
  },
  {
    id: 9,
    name: `Antigravity AI`,
    description: `Antigravity, from Google, revolutionizes coding with autonomous AI agents that plan, code, test, and debug across your editor, terminal, and browser. Agents handle complex tasks like building features, fixing bugs, or UI testing producing verifiable artifacts like plans, screenshots, and recordings for easy review. Dual interface: Editor for familiar AI-assisted coding with smart completions, and Agent Manager for orchestrating multiple agents in parallel. Supports Gemini 3 Pro, Claude, and OpenAI models. Feedback loops let you comment on outputs for real-time refinements. Free tier available; boosts productivity for solo devs or teams by automating repetitive work while keeping humans in control. Ideal for full-stack projects needing end-to-end automation.`,
    link: `https://antigravity.google/`,
    image: `images/antigravity_ai.png`
  },
  {
    id: 10,
    name: `Trae AI`,
    description: `Trae is an adaptive AI IDE that speeds up coding with smart features like context-aware autocompletion, conversational chat for code generation/explanations, and Builder Mode that breaks complex projects into steps with previews before applying changes. Upload images/diagrams for multimodal understanding, create custom AI agents for specific tasks via MCP integrations (Figma, Slack, databases), and deploy web apps to Vercel with one click. Supports premium models like Claude 3.5 Sonnet, Gemini 1.5 Pro, GPT-4o without subscriptions. Free unlimited access, real-time previews, voice input, and workspace analysis make it ideal for developers building full apps faster—solo or teams. Handles debugging, refactoring, and multi-file edits autonomously while keeping you in control.`,
    link: `https://www.trae.ai/`,
    image: `images/trae_ai.png`
  },
  {
    id: 11,
    name: `Windsurf AI`,
    description: `Windsurf is an agentic AI code editor that goes beyond autocomplete by understanding your entire codebase. Key features include Cascade for multi-step coding tasks, Super complete for intent-aware suggestions, Inline AI for precise edits, image uploads to generate code from designs, web search integration, and local indexing for full project context. The AI terminal runs commands, debugs, and iterates automatically. Modes like Write, Chat, and Legacy offer flexibility from full automation to simple queries. Free tier available with premium at \$15/month. Competes with Cursor by offering deeper automation, memories for consistency, and integrations across 9 editors ideal for complex projects saving hours on debugging and refactoring.`,
    link: `https://windsurf.com/`,
    image: `images/windsurf_ai.png`
  },
  {
    id: 12,
    name: `Lovable AI`,
    description: `Lovable lets anyone describe an app in plain English like "build a fitness tracker with social sharing" and generates full-stack code instantly using React, Tailwind, and Supabase. Edit visually, chat to refine features, add auth/database/UI, and deploy live with one click. No coding skills needed; AI handles frontend, backend, and integrations while you iterate via conversation. Great for prototypes, MVPs, or learning exports clean code to GitHub for customization. Free tier for basics; Pro unlocks unlimited builds and advanced models. Used by makers, startups, and non-devs to ship apps 10x faster without hiring engineers. Privacy-focused with version history.`,
    link: `https://lovable.dev/`,
    image: `images/lovable_ai.png`
  },
  {
    id: 13,
    name: `Bolt AI`,
    description: `Bolt.new lets you describe apps or websites in plain English, and AI instantly generates full-stack code with live previews no setup required. Chat on the left to build features; edit code directly on the right with real-time runtime via Web Containers. Handles frontend (React/Tailwind), backend (Node/Express), databases, npm installs, and deployments to Vercel. Perfect for MVPs, testing ideas, or non-coders export clean ZIPs to GitHub anytime. Free unlimited prompts; pro tier for teams/private projects. Faster than traditional dev, blends agentic automation with manual control to reduce errors and iterate rapidly. Great for startups shipping prototypes in minutes.`,
    link: `https://bolt.new/`,
    image: `images/bolt_ai.png`
  },
  {
    id: 14,
    name: `Vercel`,
    description: `Vercel makes deploying modern web apps simple with automatic Git-based builds, global CDN edge network, and serverless functions for full-stack apps. Optimized for Next.js (created by Vercel team), it handles previews for every pull request, custom domains, and analytics out-of-the-box. Features AI tools like v0 for UI generation from prompts, integrates with GitHub/GitLab, and scales automatically no servers to manage. Free tier for hobby projects; Pro/Enterprise for teams with advanced security, SOC2 compliance, and high traffic. Loved by developers for zero-config deploys, fast performance, and ecosystem of templates/starters. Powers sites like Washington Post and Hashnode.`,
    link: `https://vercel.com/`,
    image: `images/vercel.png`
  },
  {
    id: 15,
    name: `Base44`,
    description: `Base44 turns simple text prompts into fully functional web apps with databases, authentication, payments, and APIs no coding needed. Chat with AI to describe features like "task manager with user login and notifications," and it builds screens, backend logic, and integrations automatically. Refine via conversation, add Stripe payments, OpenAI chatbots, or custom workflows. Visual editor for tweaks, discussion mode for brainstorming without credits, and one-click publishing with hosting included. Acquired by Wix for \$80M, it's perfect for entrepreneurs prototyping MVPs, SaaS tools, or internal apps 10x faster than traditional development. Free trial credits; scales to production with version control and team collab.`,
    link: `https://base44.com/`,
    image: `images/base44.png`
  },
  {
    id: 16,
    name: `Replit`,
    description: `Replit lets you code, collaborate, and deploy apps instantly in your browser no setup needed. The AI Agent builds complete full-stack apps from natural language prompts, handling frontend, backend, databases, and auth automatically. Real-time multiplayer editing with live cursors and chat makes team coding seamless. Supports 50+ languages, GitHub integration, one-click deployments with custom domains, and built-in hosting. Free tier for learning/projects; paid plans add power for production. Perfect for students, prototyping MVPs, teaching, or quick hacks turns ideas into live apps in minutes with debugging, autocomplete, and explanations.`,
    link: `https://replit.com/`,
    image: `images/replit.png`
  },
  {
    id: 17,
    name: `Emergent AI`,
    description: `Emergent uses teams of specialized AI agents planning, frontend, backend, testing, and deployment to turn simple ideas like "build a task manager with payments" into complete, production-ready web and mobile apps. Chat naturally to describe features; agents handle UI design (React Native/Expo), databases, APIs, auth (Google login), Stripe payments, and bug fixes automatically. Edit code, preview live, collaborate in teams, fork projects, or rollback changes. Exports clean code to GitHub. Goes beyond prototypes with Pro Mode for custom agents and enterprise scale. Free tier to start; trusted by 1.5M+ builders hitting \$15M ARR fast. Perfect for founders shipping SaaS without dev teams.`,
    link: `https://emergent.sh/`,
    image: `images/emergent_ai.jpg`
  },
  {
    id: 18,
    name: `NotebookLM`,
    description: `NotebookLM helps you understand complex topics by uploading your own documents, PDFs, or web links to create personalized "notebooks." The AI analyses sources to answer questions, generate summaries, timelines, FAQs, study guides, or briefing docs all grounded in your materials with citations. Unique Audio Overviews turn notes into engaging podcast-style discussions between two AI hosts. Great for researchers, students, writers, or professionals synthesizing info from reports, lectures, or research papers. Free from Google Labs, supports long contexts, image/PDF analysis, and exports to Google Docs. Privacy-focused (doesn't train on your data) and constantly evolving with new features like quizzes and slides. Turns messy info into clear insights fast.`,
    link: `https://notebooklm.google/`,
    image: `images/notebooklm.png`
  },
  {
    id: 19,
    name: `Julius AI`,
    description: `Julius AI lets you upload spreadsheets, CSVs, PDFs, or connect databases, then ask questions in plain English like "What's the sales trend?" or "Forecast next quarter." It instantly analyses data, creates charts, runs stats, builds forecasts, and explains insights without coding. Chat conversationally to refine clean data, compare groups, or generate reports. Supports advanced models like GPT-4o and Claude for accurate math, Python scripts behind the scenes. Free tier for basics; paid plans unlock unlimited files, team sharing, and API access. Perfect for business analysts, researchers, marketers, or students turning raw data into visuals and decisions fast. Secure with SOC2 compliance.`,
    link: `https://julius.ai/`,
    image: `images/julius_ai.png`
  },
  {
    id: 20,
    name: `Scholarcy`,
    description: `Scholarcy automatically reads PDFs, articles, or reports and creates structured summaries with key findings, methods, figures, tables, and references extracted. It highlights important phrases, generates flashcards for study, and links terms to Wikipedia for context. Upload batches of papers to build a personal library, compare research across studies, or export to Word, Excel, or citation managers like Zotero. Great for literature reviews, saving hours on reading dense papers. Free browser extension for quick summaries; paid plans add team sharing, advanced analysis, and API access. Perfect for students, researchers, and professionals organizing knowledge efficiently without losing critical details.`,
    link: `https://www.scholarcy.com/`,
    image: `images/scholarcy.png`
  },
  {
    id: 21,
    name: `Paperpal`,
    description: `Paperpal helps researchers write, edit, and polish manuscripts faster with real-time grammar checks, paraphrasing, academic tone adjustments, and plagiarism detection. Upload notes or prompts to generate outlines, abstracts, literature reviews, or full sections using context-aware AI trained on millions of scholarly articles. It finds relevant citations from 250M+ papers, translates across 50+ languages, and runs pre-submission checks for 30+ journal parameters. Works as Word add-in, web app, or browser extension perfect for non-native speakers overcoming language barriers. Free tier offers basic corrections; Prime unlocks unlimited AI writing, file uploads, and team collaboration. Speeds up publication by 2x while maintaining academic integrity.`,
    link: `https://paperpal.com/`,
    image: `images/paperpal.png`
  },
  {
    id: 22,
    name: `Connected Papers`,
    description: `Connected Papers helps researchers discover related academic papers through interactive graphs. Enter a paper's title, DOI, or URL, and it generates a visual map showing similar papers based on shared references and citations—not keywords. Node size shows citation count; proximity indicates similarity. Click any paper to explore prior/derivative works, filter by year/access, or build multi-origin graphs. Great for literature reviews, finding seminal works, staying current, or spotting research gaps fast. Integrates Semantic Scholar data (200M+ papers). Free basic graphs (5/month); Pro unlocks unlimited maps, metrics, lists, and exports. Used by scientists, students, and academics to navigate fields efficiently without endless searching.`,
    link: `https://www.connectedpapers.com/`,
    image: `images/connected_papers.png`
  },
  {
    id: 23,
    name: `Consensus AI`,
    description: `Consensus AI searches over 200 million peer-reviewed papers to answer research questions with evidence-based summaries and direct citations. Enter any query, and it finds relevant studies, extracts key findings, and shows a "Consensus Meter" for yes/no questions—displaying what percentage of papers agree (Yes/No/Possibly/Mixed). Features Deep Search for comprehensive lit reviews across 50 papers, Pro Analysis for synthesized insights, and filters by study type, journal rank, or date. Ask Paper chats with individual full texts; Research Gaps identifies unanswered questions. Free for basic use; Pro unlocks unlimited deep searches and advanced tools. Perfect for academics, students, and professionals needing trustworthy science fast without hallucinations or bias.`,
    link: `https://consensus.app/`,
    image: `images/consensus_ai.png`
  },
  {
    id: 24,
    name: `Elicit AI`,
    description: `Elicit searches over 125 million academic papers using natural language queries, finding relevant studies even without exact keywords. It extracts key data into tables—abstracts, methods, sample sizes, outcomes—and builds customizable research matrices for systematic reviews. Upload your own PDFs to chat with papers, generate summaries, critiques, or brainstorming questions. Features like workflow automation screen hundreds of papers, create reports, and suggest search terms. Free tier offers basic searches; Plus unlocks uploads, advanced extraction (600 sources/year), and notebooks. Perfect for researchers in biomedicine, machine learning, or social sciences saving weeks on lit reviews with transparent, verifiable results grounded in real papers.`,
    link: `https://elicit.com/`,
    image: `images/elicit_ai.png`
  },
  {
    id: 25,
    name: `Zotero`,
    description: `Zotero helps collect, organize, cite, and share research sources effortlessly. Save references from web pages, databases, or PDFs with one click using browser connectors; it auto-fills metadata, captures full-text files, and adds notes/tags. Build libraries with folders, search across everything, and generate bibliographies in 9,000+ styles instantly. Integrates as plugins for Word, Google Docs, and LibreOffice to insert citations/footnotes while writing. Syncs libraries across devices with 300MB free cloud storage (upgradable). Collaborate via shared groups. Perfect for theses, papers, or projects no limits on items, supports annotations, and exports to BibTeX/EndNote. Community-driven and privacy-respecting.`,
    link: `https://www.zotero.org/`,
    image: `images/zotero.png`
  },
  {
    id: 26,
    name: `Jenni AI`,
    description: `Jenni AI helps students and researchers overcome writer's block by generating outlines, full sentences, paragraphs, and complete papers from simple prompts. Upload PDFs to chat with research papers, extract key insights, summarize literature, and auto-generate citations in APA, MLA, or other styles. Real-time suggestions improve clarity, academic tone, and flow while detecting plagiarism. Features include multilingual support, SEO optimization for blogs, and export to Word/LaTeX. The built-in research library finds relevant sources without leaving the editor. Free trial available; paid plans unlock unlimited words and advanced models. Perfect for essays, theses, journal articles, and proposals saves hours while maintaining academic integrity through transparent AI reasoning and source tracking.`,
    link: `https://jenni.ai/`,
    image: `images/jenni_ai.png`
  },
  {
    id: 27,
    name: `Scribe`,
    description: `Scribe automatically records your screen and actions as you work in any app, instantly generating beautiful step-by-step visual guides with annotated screenshots, text, and links. Perfect for creating SOPs, training manuals, onboarding docs, or knowledge base articles without manual effort. Edit guides easily add highlights, blur sensitive data, customize branding, or use AI to generate titles/descriptions. Share via links, embed in Notion/Confluence, or export to PDF/Word. Updates propagate automatically when processes change. Free tier for basic use; Pro adds unlimited pages, team folders, and advanced AI refinements. Saves teams hours on repetitive documentation across sales, support, HR, and IT. Used by 5M+ people at Fortune 500 companies.`,
    link: `https://scribe.com/`,
    image: `images/scribe.jpg`
  },
  {
    id: 28,
    name: `Research Rabbit`,
    description: `Research Rabbit visualizes academic literature as interactive maps, helping researchers explore connections between papers, authors, and topics. Start with seed papers, and it automatically finds related works through citations, co-authorships, and similarity revealing hidden gems, trends, and gaps you'd miss in keyword searches. Create collections to organize papers by project, get personalized recommendations, track authors, and collaborate by sharing libraries. Timeline views show field evolution; metrics highlight influential works. Unlike Google Scholar lists, its graph interface makes literature navigation intuitive and fun. Perfect for lit reviews, staying current, or interdisciplinary work. Integrates with Zotero; completely free with unlimited use no paywalls or quotas. Millions of researchers use it daily to accelerate discovery.`,
    link: `https://www.researchrabbit.ai/`,
    image: `images/research_rabbit.png`
  },
  {
    id: 29,
    name: `SciSpace`,
    description: `SciSpace helps researchers search 280M+ papers using natural language questions, not just keywords. Upload PDFs to chat directly with papers for summaries, explanations, data extraction, or comparisons across multiple documents. Features AI writing assistance with real-time citations, paraphrasing in 20+ tones, and plagiarism/AI detection. Generate video abstracts from papers, create tables comparing study methods/results, and build custom libraries with bulk analysis. Deep Review mode scans your collection for specific criteria like model organisms or locations. Browser extension works anywhere. Free tier for basics; Pro unlocks unlimited Copilot, advanced exports, and team features. Perfect for lit reviews, writing, and staying current saves hours decoding complex science.`,
    link: `https://scispace.com/`,
    image: `images/scispace.png`
  },
  {
    id: 30,
    name: `Litmaps`,
    description: `Litmaps creates interactive citation maps from seed papers, revealing related research through connections, not just keywords. Enter one paper to generate a visual graph showing similar works, citations, co-authorships, and trends over time node size reflects influence, distance shows similarity. Expand maps iteratively, save relevant papers to collections with tags, and monitor for new publications via alerts. Unlike linear search results, its dynamic visuals help spot gaps, seminal works, and field evolution quickly. Supports semantic search mode, Zotero sync, and exports (RIS/BibTeX). Free tier limits searches; Pro offers unlimited maps, advanced filters, and collaboration. Essential for efficient literature reviews saving researchers weeks of manual hunting.`,
    link: `https://www.litmaps.com/`,
    image: `images/litmaps.jpg`
  },
  {
    id: 31,
    name: `R Discovery`,
    description: `R Discovery from Researcher.life scans 250M+ research papers across 32K+ journals to deliver daily personalized feeds based on your topics, reading history, and preferences. Save papers to libraries, get audio summaries, translations in 15+ languages, and Smart Read to extract key insights from long papers. Features like "Read" mode highlights important sections; "Discover" suggests related work; offline access and citation export to Zotero/EndNote. Follow authors/journals, set alerts for new publications, and collaborate via shared feeds. Free with premium upgrades for ad-free experience and advanced filters. Perfect for researchers, students, and professionals staying current across fields without information overload—turns scattered reading into focused discovery.`,
    link: `https://discovery.researcher.life/`,
    image: `images/r_discovery.png`
  },
  {
    id: 32,
    name: `Napkin AI`,
    description: `Napkin AI transforms meeting notes, outlines, or ideas into beautiful flowcharts, mind maps, infographics, timelines, and presentations automatically. Paste text like "sales funnel process" and it generates multiple layout options with smart icons, colours, and labels no design skills needed. Fully editable canvas lets you tweak connections, fonts, and styles to match your brand. Perfect for business pitches, research diagrams, proposals, or teaching materials. Export as PNG, SVG, PDF, or PPT. Free tier offers basic generation; Pro unlocks unlimited visuals, custom themes, and team collaboration. Used by researchers, marketers, and consultants to create polished visuals in minutes instead of hours manually in PowerPoint or Canva.`,
    link: `https://www.napkin.ai/`,
    image: `images/napkin_ai.jpg`
  },
  {
    id: 33,
    name: `Canva AI`,
    description: `Canva's AI suite, Magic Studio, generates images, videos, and designs from text prompts using its custom design model. Features include Magic Design for instant templates, text-to-image/video creation, background removal, auto-enhance, voiceovers, and writing assistance. In 2026 updates added 3D objects, art style transfer, spreadsheet-powered widgets, forms, email templates, and ChatGPT integration. Affinity suite now free with AI photo editing (generative fill/expand, portrait effects). Free tier generous; Pro unlocks unlimited generations and advanced models. Perfect for marketers, educators, and creators building social posts, presentations, websites, or ads 10x faster—no skills needed. Exports editable layers for customization.`,
    link: `https://www.canva.com/magic/`,
    image: `images/canva_ai.jpg`
  },
  {
    id: 34,
    name: `Scite AI`,
    description: `Scite analyzes over 1.2 billion citation statements across 200M+ papers to classify citations as supporting, contrasting, or mentioning—going beyond raw counts to show true scholarly reception. Search any paper to see its citation statement cloud with context snippets, network graphs of influence, and trustworthiness scores. Features include AI research assistant for lit reviews, citation reports, alerts for new citations, and browser extension showing badges on Google Scholar/PubMed. Essential for validating claims, spotting controversies, or building arguments with credible evidence. Free tier limits searches; paid unlocks unlimited analysis and exports. Used by top universities for transparent, context-rich research evaluation.`,
    link: `https://scite.ai/`,
    image: `images/scite_ai.png`
  },
  {
    id: 35,
    name: `Scholar AI`,
    description: `ScholarAI searches 200M+ papers and patents from PubMed, arXiv, and Google Scholar, delivering summaries, citations, flashcards, and study guides. Upload PDFs for AI analysis of tables/figures, multilingual translations, and project/dataset recommendations. Natural language search finds relevant sources with metadata and smart suggestions. Generate outlines, quizzes, and notes from syllabi or readings. Features dataset suggestions with licenses/notebooks, week-by-week project timelines, and BibTeX exports. Integrates Zotero/Elicit for discovery and writing. Perfect for literature reviews, thesis planning, or staying current saves hours on manual reading and organization. Free tier available; API for teams.`,
    link: `https://scholarai.io/`,
    image: `images/scholar_ai.png`
  },
  {
    id: 36,
    name: `Zenod`,
    description: `Zenodo, hosted by CERN and supported by OpenAIRE, accepts datasets, software, papers, posters, presentations—any digital research artifact up to 50GB. Every upload gets a permanent DOI for citation, supports versioning, and offers flexible licenses/embargoes. GitHub integration auto-archives releases; communities organize group outputs with curation/review workflows. Data preserved long-term in CERN's secure infrastructure with multiple backups. Links to funders (EU grants, NSF) simplify reporting; article-level metrics track impact. Complies with FAIR principles for findable/reusable data. Free for all researchers worldwide—no field restrictions. Perfect for open science mandates, supplementary materials, or preserving code/data alongside publications.`,
    link: `https://zenodo.org/`,
    image: `images/zenod.png`
  },
  {
    id: 37,
    name: `Figshare`,
    description: `Figshare accepts datasets, papers, posters, figures, videos, software, and supplementary materials up to 5TB, assigning each a permanent DOI for citation and tracking. Files can be public, private, or embargoed with flexible licenses; versioning preserves all changes while maintaining access. Features institutional repositories, collections for grouping related items, altmetrics for impact measurement, and integrations with ORCID, GitHub, and journal submission systems. Meets FAIR data principles and funder mandates (NIH, EU Horizon). Free for individuals; institutional plans offer unlimited storage and curation support. Used by 20K+ organizations to make all research citable, increase visibility, and enable reproducibility across disciplines.`,
    link: `https://figshare.com/`,
    image: `images/figshare.png`
  },
  {
    id: 38,
    name: `Notion AI`,
    description: `Notion AI integrates GPT-4 and Claude models directly into your pages for writing assistance, summarization, data analysis, and Q&A about your content. Generate drafts, fix grammar, brainstorm ideas, or create tables/lists from prompts—context-aware to match your workspace style. Summarize meeting notes, extract action items, or autofill database properties with AI blocks for insights/keywords. Ask questions about your entire workspace ("What are my Q1 goals?") for instant answers. Autofill databases, draft emails, simplify complex text, or generate creative content. Add-on to any Notion plan (\$10/user/month); unlimited blocks with Pro. Perfect for teams centralizing knowledge with smart automation.`,
    link: `https://www.notion.so/product/ai`,
    image: `images/notion_ai.png`
  },
  {
    id: 39,
    name: `Motion AI`,
    description: `Motion uses advanced AI to automatically prioritize, schedule, and optimize your tasks, projects, and meetings across your calendar—building the perfect daily plan that adapts in real-time to changes. Add tasks via email, voice, or chat; AI estimates duration, detects dependencies, and timeblocks everything while booking meetings efficiently. Features AI docs for drafting/proofing, meeting notetakers with action items, project templates, team collaboration, and reports. Replaces calendars, to-do lists, and schedulers in one intuitive interface. Free trial; Individual \$19/month, Team \$12/user/month. Boosts output 32% by eliminating manual planning—ideal for busy pros and teams.`,
    link: `https://www.usemotion.com/`,
    image: `images/motion_ai.png`
  },
  {
    id: 40,
    name: `ClickUp`,
    description: `ClickUp combines tasks, docs, goals, whiteboards, chat, and AI (ClickUp Brain/BrainGPT) in one customizable workspace. 2026 updates feature supercharged AI agents for autonomous workflows, email search/analysis, prebuilt AI solutions, and BrainGPT connecting all company knowledge. Auto-prioritizes tasks, schedules meetings, generates reports, and handles stand-ups/notetaking. Custom dashboards, time tracking, 15+ views (Gantt, Kanban), and 1,000+ integrations create tailored systems. Free Forever plan; Unlimited \$7/user/month. Scales from solo to enterprise with role-based permissions. Teams report 32% productivity gains by eliminating app-switching—perfect for project management, OKRs, or agile sprints.`,
    link: `https://clickup.com/`,
    image: `images/clickup.png`
  },
  {
    id: 41,
    name: `Trello`,
    description: `Trello organizes work using boards, lists, and cards for tasks—drag cards between lists like "To Do," "In Progress," "Done" to track projects visually. 2026 AI features include Atlassian Intelligence for summarizing content, extracting action items from emails/Slack, generating subtasks automatically, and smart prioritization based on urgency. New Year's Resolution Board Builder creates goal-tracking boards instantly. Power-ups add calendars, automation (Butler), voting, and 200+ integrations like Google Drive. Free for basics; Premium (\$10/user/month) unlocks advanced views, AI, and unlimited boards. Perfect for teams, students, or personal use—simple yet powerful for agile workflows, content calendars, or habit tracking.`,
    link: `https://trello.com/`,
    image: `images/trello.jpg`
  },
  {
    id: 42,
    name: `Datawrapper`,
    description: `Datawrapper lets anyone upload spreadsheets or CSV files to instantly generate professional visualizations—no coding needed. Choose from 20+ chart types (bars, lines, maps, heatmaps), customize colors/fonts/annotations, and add interactivity like tooltips, zooming, or sorting. Perfect for journalists, analysts, and researchers publishing responsive graphics that work on mobile/desktop. Features live Google Sheets connections for auto-updates, team collaboration, and embed codes for websites. Free plan includes Data wrapper branding; paid tiers (\$0-\$999/month) remove attribution and add private charts/advanced features. Trusted by BBC, The Economist millions of charts created annually with accessibility/WCAG compliance.`,
    link: `https://www.datawrapper.de/`,
    image: `images/datawrapper.png`
  },
  {
    id: 43,
    name: `Flourish`,
    description: `Flourish transforms spreadsheets into engaging charts, maps, graphs, and scrolly telling experiences without coding. Choose from 30+ templates (bar races, Sankey diagrams, network graphs, choropleths) and customize colors, animations, interactions, and layouts easily. Import CSV/Excel/Google Sheets for live updates; embed anywhere with responsive design. Perfect for journalists, researchers, marketers creating animated election maps, financial timelines, or explanatory articles. Collaboration features let teams co-edit projects. Free tier for public visuals; paid plans (\$29-\$99/month) unlock private projects, custom branding, and advanced exports. Used by BBC, Washington Post—millions of stories told through interactive data.`,
    link: `https://flourish.studio/`,
    image: `images/flourish.jpg`
  },
  {
    id: 44,
    name: `Mendeley`,
    description: `Mendeley helps researchers organize PDFs, extract metadata automatically, annotate papers, and generate citations/bibliographies in thousands of styles. Import references from databases, Google Scholar, or other managers; Word/LibreOffice plugin inserts citations while writing. Sync libraries across devices with 2GB free cloud storage (upgradable). Social features let you follow researchers, join private/public groups for collaboration, and discover relevant papers through recommendations. Find full-texts, track citations, and build reading lists. Perfect for grad students, academics managing literature reviews, theses, or team projects. Desktop/web/mobile apps work seamlessly; exports to BibTeX/EndNote/Zotero.`,
    link: `https://www.mendeley.com/`,
    image: `images/mendeley.png`
  },
  {
    id: 45,
    name: `EndNote`,
    description: `EndNote 2025 helps organize thousands of references, PDFs, and notes into searchable libraries with groups, tags, and duplicates detection. Import citations from 100K+ databases/PubMed/Google Scholar; Cite While You Write™ plugin inserts citations and auto-generates bibliographies in 7K+ styles while writing in Word. AI-powered features find full-texts automatically, summarize papers, suggest related research, and clean/validate references. Share libraries with unlimited collaborators; sync across devices with cloud backup. Annotate PDFs, track citations, and comply with funder mandates. Perfect for systematic reviews, theses, grants—saves weeks managing lit reviews. Desktop (\$279 one-time) + Web subscription; institutional licenses common.`,
    link: `https://endnote.com/`,
    image: `images/endnote.png`
  },
  {
    id: 46,
    name: `Beautiful.ai`,
    description: `Beautiful.ai uses smart templates and AI design rules to automatically format slides as you add content—no manual alignment needed. Choose themes, type bullet points or data, and it creates charts, animations, and layouts instantly. Features millions of photos/icons, brand kits for consistency, custom templates, and collaboration with real-time editing. Export to PowerPoint/PDF or present directly. AI adapts designs for different screen sizes. Free tier limited; Pro \$12/month, Team \$40/month. Perfect for business pitches, reports, sales decks—saves hours vs PowerPoint while maintaining professional polish. Used by 40% of Fortune 500 for consistent branding across teams.`,
    link: `https://www.beautiful.ai/`,
    image: `images/beautiful_ai.jpg`
  },
  {
    id: 47,
    name: `Zapier`,
    description: `Zapier lets you create automated workflows called "Zaps" that trigger actions across apps—when something happens in one app (like new email), it automatically performs tasks in others (add to spreadsheet, send Slack message). Connects 8,000+ apps including Gmail, Slack, Google Sheets, CRM systems with multi-step logic, filters, delays, and formatting. AI features include natural language Zap creation, chatbots, AI agents, and data extraction. Team collaboration, templates, and real-time processing make complex automations simple. Free tier (100 tasks/month); paid from \$20/month. Perfect for marketing, sales, support teams eliminating repetitive manual work across tools.`,
    link: `https://zapier.com/`,
    image: `images/zapier.png`
  },
  {
    id: 48,
    name: `Runway AI`,
    description: `Runway specializes in text-to-video generation, image-to-video conversion, and advanced video editing tools like inpainting, motion brush, lip sync, and slow-motion creation. Using models like Gen-3 Alpha and Gen-4, it produces cinematic-quality videos up to 10+ seconds with precise camera controls, character consistency, and 4K export. Artists upload images for animation, filmmakers create VFX/special effects, and creators generate custom 3D textures or soundscapes. Web-based editor with API access; drag-and-drop interface makes pro results accessible. Free tier with credits; Standard \$15/month, Pro \$35+, Enterprise custom. Used by Hollywood studios, TikTok creators, and agencies for production-grade AI media.`,
    link: `https://runwayml.com/`,
    image: `images/runway_ai.png`
  },
  {
    id: 49,
    name: `Gamma AI`,
    description: `Gamma generates complete, interactive presentations from a single topic prompt—like "pitch deck for eco skincare"—producing modern, scrollable decks with content, images, charts, and layouts in minutes. Edit cards conversationally with AI for rewrites, summaries, or restructures; customize themes, embeds (videos/polls), and branding. Unlike PowerPoint, outputs are web-native, mobile-responsive, and embeddable as sites. Export to PDF/PPT. Free plan generous (400 credits/year); Plus \$10/month unlimited. Used for pitches, reports, websites—saves hours on design for non-designers. Strong AI handles structure/tone; collaboration and analytics included.`,
    link: `https://gamma.app/`,
    image: `images/gamma_ai.png`
  },
  {
    id: 50,
    name: `Superhuman AI`,
    description: `Superhuman transforms email management with AI features that double inbox processing speed. Instant Reply auto-generates context-aware draft responses—one-click send. AI summaries provide one-line conversation overviews that update live. Ask AI searches across emails/calendars with natural language queries like "marketing budget emails." Split Inbox organizes by priority/senders; read receipts track opens; snippets save common replies. Keyboard shortcuts and command bar enable mouse-free navigation. Business plan adds team scheduling and advanced AI. Users save 4+ hours weekly. \$30/month after trial; Mac/iOS/Android apps. Perfect for executives handling high-volume email needing speed without losing context.`,
    link: `https://superhuman.com/`,
    image: `images/superhuman_ai.png`
  },
  {
    id: 51,
    name: `Midjourney`,
    description: `Midjourney transforms text prompts into stunning, artistic images using advanced diffusion models. Type descriptions like "cyberpunk city at sunset, cinematic lighting" to generate 4 variations—refine with upscale (U1-U4), variations (V1-V4), or remix tools. Parameters control stylization (--s 0-1000), aspect ratio (--ar 16:9), chaos (--c 0-100), and quality (--q). Use image prompts by dragging URLs for style/character consistency. Web alpha offers easier editing; features include inpainting, outpainting, and draft mode for speed. Community Discord (20M+ users) shares creations. Basic \$10/month; Pro \$60+ for stealth mode/unlimited Relax GPU. Perfect for artists, designers creating concept art, book covers, or social graphics rivaling professional work.`,
    link: `https://www.midjourney.com/`,
    image: `images/midjourney.png`
  },
  {
    id: 52,
    name: `Taplio`,
    description: `Taplio helps professionals grow their LinkedIn presence with AI-generated posts, carousels, and content ideas pulled from 5M+ viral examples. Schedule content with optimal timing previews, track analytics for reach/engagement, and build relationships through automated DMs and engagement lists. Access 3M+ enriched leads with filters for industry/job title; icebreaker generator crafts personalized outreach. Chrome extension shows real-time post-performance and suggests replies. CRM features import likers/commenters for follow-up. Perfect for founders, marketers, and creators scaling LinkedIn systematically—10 minutes daily yields consistent growth. Free trial; Growth \$39/month, Pro \$99/month with team features.`,
    link: `https://taplio.com/`,
    image: `images/taplio.png`
  },
  {
    id: 53,
    name: `Numerous.ai`,
    description: `Numerous.ai integrates ChatGPT-like AI directly into spreadsheets using simple =AI() formulas. Generate complex formulas, classify/categorize data, summarize text, clean messy inputs, extract insights, or create content like ad copy—all via natural language prompts dragged across rows. Supports multilingual text processing and tasks like sentiment analysis or phone number state extraction. Works in Google Sheets/Excel add-ons; Chrome extension available. Automates repetitive work for marketers, analysts, saving hours on data organization. Free tier limited; Pro \$10/month for unlimited AI usage.`,
    link: `https://numerous.ai/`,
    image: `images/numerous_ai.png`
  },
  {
    id: 54,
    name: `Synthesia`,
    description: `Synthesia lets you input scripts, PDFs, or URLs to generate videos featuring realistic AI avatars that speak naturally in 160+ languages with lip-sync and gestures. Customize avatars (230+ options or create your own from selfies), add voiceovers (100s of AI voices or clones), animations, screen recordings, and interactive elements like quizzes. Edit via drag-and-drop, auto-dub/translate videos, collaborate with teams, and export for LMS/SCORM. Cuts video production from hours to minutes—ideal for training, marketing, sales, and onboarding. Starter \$22/month (120 min/year); Enterprise custom; free trial available.`,
    link: `https://www.synthesia.io/`,
    image: `images/synthesia.png`
  },
  {
    id: 55,
    name: `PopAi`,
    description: `PopAi offers an all-in-one workspace combining ChatGPT-like chat, PDF analysis, image/video generation, and presentation builder. Generate professional slides from prompts/documents, create/edit visuals (DALL-E/Stable Diffusion powered), summarize/extract from files, and automate writing tasks. Web-based with templates for marketing, education; supports team collaboration. Integrates multiple AI models for versatile output. Ideal for creators, marketers, educators streamlining workflows—faster than manual design. Free tier available; Pro plans from \$10/month for unlimited generations and advanced features.`,
    link: `https://www.popai.pro/`,
    image: `images/popai.png`
  },
  {
    id: 56,
    name: `Asana`,
    description: `Asana enables teams to create tasks with subtasks, dependencies, custom fields, and due dates; visualize work via List, Board (Kanban), Timeline (Gantt), Calendar views, or portfolios for multi-project oversight. Automate workflows with rules/forms, track goals/progress with real-time dashboards, and collaborate through comments, mentions, file sharing, and workload views. Integrates with 200+ tools like Slack, Google Workspace, Zoom. AI features suggest focus areas and automate routines. Scales from small teams to enterprises. Free for basics; Premium \$10.99/user/month; Business \$24.99/user/month.`,
    link: `https://asana.com/`,
    image: `images/asana.png`
  },
  {
    id: 57,
    name: `Spinach AI`,
    description: `Spinach AI joins Zoom/Google Meet meetings automatically, generates action-oriented summaries focused on decisions and tasks (not transcripts), and creates Jira/Slack tickets from discussions. Supports standups, planning, retros—tailored formats with agendas, check-ins, and insights across 100+ languages. Integrates deeply with Slack, Jira, Asana, Linear, Notion for seamless post-meeting automation like recaps and project updates. AI agents handle follow-ups like status reports or emails. Backed by Y Combinator; excels for agile/product teams turning conversations into execution. Free trial; plans from ~\$15/user/month.`,
    link: `https://www.spinach.ai/`,
    image: `images/spinach_ai.png`
  },
  {
    id: 58,
    name: `Jasper AI`,
    description: `Jasper AI specializes in creating marketing copy using 50+ templates for blog posts, ads, social media, emails, landing pages, and product descriptions with built-in frameworks like AIDA/PAS. Train custom brand voice for consistent tone; generate long-form content, SEO-optimized pieces via Surfer integration, and images with Jasper Art. Supports 29+ languages; Power Mode for in-depth writing and real-time collaboration. AI agents automate workflows like content calendars. Ideal for marketers/agencies scaling high-volume, on-brand output. Creator \$49/month; Pro \$69/seat/month; Business custom.`,
    link: `https://www.jasper.ai/`,
    image: `images/jasper_ai.png`
  },
  {
    id: 59,
    name: `Leonardo AI`,
    description: `Leonardo AI excels at photorealistic images, concept art, and custom styles using models like Phoenix and Alchemy with controls for stylization, aspect ratio, and guidance. Features include Realtime Canvas for iterative editing, inpainting/outpainting, image-to-image, Motion 2.0 for video from images/text, character/style consistency, and custom model training. Generate textures, upscales, batch processing; supports transparency and 3D workflows. Web/mobile app with free tier (150 tokens/day); ideal for artists, game devs, marketers needing rapid ideation and professional visuals rivaling Midjourney. Paid plans from ~\$10/month for more tokens/features.`,
    link: `https://app.leonardo.ai/`,
    image: `images/leonardo_ai.png`
  },
  {
    id: 60,
    name: `Limitless AI (formerly Rewind AI)`,
    description: `Rewind AI runs silently in the background on Mac, capturing screenshots every few seconds and audio with 3,750x compression—storing years of data locally (encrypted, ~14GB/month). Search natural language queries like "Maddie's Q4 budget comment" to retrieve exact timestamps, transcripts, and visuals across apps, meetings (Zoom/Teams/Meet), and browser history. Generates human-level meeting summaries with action items (no bots needed), drafts personalized emails, answers context-rich questions via GPT-4 integration, and recovers lost work. Privacy-first: no cloud uploads by default. Pivoted to Limitless with wearable pendant for real-time transcription. Pro ~\$19/month; ideal for ADHD users, sales pros, executives never forgetting details.`,
    link: `https://www.limitless.ai/`,
    image: `images/limitless_ai_formerly_rewind_ai.png`
  },
  {
    id: 61,
    name: `Talknotes`,
    description: `Talknotes converts voice recordings into accurate transcripts, summaries, to-do lists, blog outlines, or custom formats using AI—works for meetings, interviews, lectures, journaling in 50+ languages. Record directly or upload audio files (up to 2 hours on Pro); get key takeaways and actionable points instantly. Share as PDF/Markdown/text; Zapier integration automates workflows. Available on web, iOS, Android. Perfect for professionals, students, creators saving hours on manual note-taking. Free tier available; Pro unlocks longer recordings and advanced features.`,
    link: `https://talknotes.io/`,
    image: `images/talknotes.png`
  },
  {
    id: 62,
    name: `Coconote`,
    description: `Coconote transcribes audio/video from lectures, YouTube, or PDFs into organized notes with chapters, summaries, key takeaways, quizzes, and flashcards. Record live sessions, upload files, or photo homework for instant solutions/explanations; supports 100+ languages with real-time translation. Chat with notes for context-aware Q&A, organize into folders, share via links. Cross-platform sync (iOS/web); ethical alternative to cheating apps. Perfect for students automating study prep across subjects. Free with limits; Pro £19.99+/month for unlimited notes/features.`,
    link: `https://coconote.app/`,
    image: `images/coconote.png`
  },
  {
    id: 63,
    name: `YouLearn AI`,
    description: `YouLearn processes YouTube videos, PDFs (up to 2000 pages), lecture recordings, slides, or photos into structured notes, chapter breakdowns, flashcards, quizzes (MCQ/true-false/fill-in-blank), mind maps, and AI podcasts for offline review. Chrome extension works on YouTube/Zoom/Teams; snap math problems for step-by-step solutions; chat with content for explanations using GPT-4/Gemini models with timestamp references. Tracks progress, generates timed exams, supports 40+ languages. Web/iOS/Android apps. Perfect for students prepping exams or reviewing courses efficiently. Free plan limited; Pro \$5/month (unlimited uploads, priority processing).`,
    link: `https://www.youlearn.ai/`,
    image: `images/youlearn_ai.png`
  },
  {
    id: 64,
    name: `Flux AI`,
    description: `Flux.1 (by Black Forest Labs) comes in three variants: Pro (top quality), Dev (open weights for fine-tuning), Schnell (fastest for local use). Excels at anatomy, text rendering, complex compositions rivaling Midjourney—generate 1024x1024 images from prompts like "elderly woman portrait, dramatic lighting, hyperrealistic." Supports inpainting, outpainting, upscaling; controllable via guidance scale, steps (4-50). Available via APIs (Fal.ai, Replicate), ComfyUI, web UIs like FluxAI.studio. Free Schnell model; Pro API ~\$0.003/image. Perfect for artists, designers needing commercial-grade AI art without subscriptions.`,
    link: `https://flux1.ai/`,
    image: `images/flux_ai.png`
  },
  {
    id: 65,
    name: `Recraft AI`,
    description: `Recraft excels at creating brand-consistent raster/vector images from text prompts with precise controls for style mixing, color palettes, text placement, inpainting/outpainting, and upscaling. Generate logos, icons, posters, seamless patterns, 3D mockups; V3 model rivals Midjourney in photorealism while outputting editable SVGs. Infinite canvas for iterative design; custom style training from uploads. Community gallery inspires; supports teams with collaboration. Free tier with daily credits; Pro \$20/month for commercial use/unlimited generations. Perfect for designers, marketers creating scalable graphics without Photoshop.`,
    link: `https://www.recraft.ai/`,
    image: `images/recraft_ai.jpg`
  },
  {
    id: 66,
    name: `Stable Diffusion (Stability AI)`,
    description: `Stable Diffusion creates high-resolution photorealistic or artistic images via text-to-image, img2img, inpainting/outpainting, and upscaling. Key variants: SDXL (3.5B params for detailed 1024x1024 outputs), Turbo (1-step real-time generation). Run locally (Automatic1111 webUI, ComfyUI) or via cloud (Hugging Face, Replicate). Fine-tune with LoRAs/Dreambooth for custom styles/characters; excels at complex prompts with negative prompts for exclusions. Supports extensions for ControlNet (pose/depth), Animate Diff (video). Free/open weights; ideal for developers, artists experimenting without limits. Accessible via stablediffusionweb.com no login needed.`,
    link: `https://stability.ai/`,
    image: `images/stable_diffusion_stability_ai.png`
  },
  {
    id: 67,
    name: `Copy.ai`,
    description: `Copy.ai offers 90+ templates for ads, emails, product descriptions, SEO articles, and social posts with customizable tone/voice matching. Input brand details to train workflows; generate long-form content via outlines; multilingual support (25+ languages). Integrates with Zapier, HubSpot for automation. Teams collaborate with shared workspaces and approval flows. Free tier (2,000 words/month); Pro \$49/month unlimited. Ideal for marketers scaling personalized content 10x faster while maintaining consistency.`,
    link: `https://www.copy.ai/`,
    image: `images/copy_ai.png`
  },
  {
    id: 68,
    name: `Character AI`,
    description: `Character AI lets users design AI personas with unique personalities, voices, and behaviors via descriptions, greetings, and example dialogues—public or private. Chat with fictional characters, historical figures, or originals in realistic conversations using advanced NLP for context retention and adaptive responses. Features include roleplay scenarios, multi-character rooms, text adventures, rating system (1-4 stars) for refinement, voice customization, and recent additions like video generation (AvatarFX) and animations. Available on web/iOS/Android. Free with limits; c.ai+ subscription for priority access. Perfect for storytelling, language practice, entertainment, or role-playing enthusiasts.`,
    link: `https://character.ai/`,
    image: `images/character_ai.png`
  },
  {
    id: 69,
    name: `Grammarly AI`,
    description: `Grammarly provides real-time grammar/spelling corrections, sentence rewrites for tone (formal/confident/descriptive), clarity improvements, and generative AI for drafting emails, outlines, and content from prompts. Features include plagiarism detection, audience insights, brand voice customization, and integrations with Google Docs, Gmail, Slack, browsers via Chrome extension/keyboard apps. Analyses full documents for coherence; suggests concise alternatives. Free basic version; Premium \$12/month adds advanced rewrites and full-sentence suggestions. Perfect for professionals, students, and teams ensuring polished communication everywhere they write.`,
    link: `https://www.grammarly.com/`,
    image: `images/grammarly_ai.png`
  },
  {
    id: 70,
    name: `JotBot AI`,
    description: `JotBot analyzes your writing samples using Language Style Matching (LSM) to generate drafts, autocomplete text (via "++"), and rewrite content in your unique voice/tone. Find/cite academic sources (PDFs, videos, websites) directly in documents; summarize YouTube videos; real-time note-taking from lectures/meetings with transcripts. AI commands edit text (reword, shorten, change style); chat interface for research help. Integrates as Chrome extension/web app for Google Docs/Word. Perfect for students, researchers, professionals writing essays/reports 10x faster with proper citations. Free trial; plans from \$9.99/month.`,
    link: `https://myjotbot.com/`,
    image: `images/jotbot_ai.png`
  },
  {
    id: 71,
    name: `Quarkle AI`,
    description: `Quarkle provides real-time feedback on plot structure, character development, pacing, inconsistencies, and dialogue through Google Docs-style annotations and holistic critiques. Chat directly with your manuscript for brainstorming, clarifications, and style-consistent suggestions; Autonomous Review deploys 16 specialized AI agents analyzing full books without word limits. Supports multiple models (GPT-4o, Claude Sonnet 4, Gemini 2.5 Flash); maintains your voice across long-form content. Imports PDFs; exports to Markdown/Word. Free unlimited basic access; Pro unlocks advanced agents and model selection. Ideal for self-published authors seeking affordable professional editing (100x cheaper than humans).`,
    link: `https://www.quarkle.ai/`,
    image: `images/quarkle_ai.png`
  },
  {
    id: 72,
    name: `Rytr`,
    description: `Rytr provides 40+ use case templates for emails, ads, product descriptions, Instagram captions, and blog outlines across 30+ languages and 20+ tones. Features include plagiarism checker (Copyscape-powered), SERP analysis for SEO, AI image generation, text editing commands (reword, shorten, expand), and "My Voice" for brand-consistent output. Chrome extension enables writing from any webpage; team collaboration with shared profiles/workflows. Excels at short-form content but limited for complex long-form. Free plan (10k chars/month); Unlimited \$29/month; Premium \$49/month adds advanced tools. Ideal for solopreneurs and small teams scaling content efficiently.`,
    link: `https://rytr.me/`,
    image: `images/rytr.png`
  },
  {
    id: 73,
    name: `Sudowrite`,
    description: `Sudowrite helps overcome writer's block with Write (autocomplete-like suggestions analyzing tone/characters/plot—300 words at a time with options), Rewrite (reworks selected text in different styles), Describe (adds sensory details), Brainstorm (plot twists/ideas), and Generate (first drafts from outlines). Canvas mode visualizes story arcs/characters; maintains continuity across long manuscripts. Supports novels, screenplays, poetry using models like Claude/GPT-4o. Privacy-focused (no training on user data). Perfect for novelists scaling drafts while preserving voice. Free trial (4k words); plans \$19-\$59/month based on word credits.`,
    link: `https://www.sudowrite.com/`,
    image: `images/sudowrite.png`
  },
  {
    id: 74,
    name: `Writesonic`,
    description: `Writesonic offers 80+ templates including Blog Ideas, Intros/Outlines, Article Writer (long-form SEO content), Story Generator, Paraphrasing, Sentence Expander, Quora Answers, and Review Responder. Features real-time SEO optimization, plagiarism checking, tone adjustment across 30+ languages, and Chrome extension for writing anywhere (Gmail, Docs, social). Advanced instructions control paragraph length, detail level, Markdown formatting. Integrates GPT-4 for human-like output; automates workflows via Zapier/WordPress. Free tier available; Pro plans scale content 10x for marketers. Ideal for bloggers, agencies producing high-volume marketing materials efficiently.`,
    link: `https://writesonic.com/`,
    image: `images/writesonic.png`
  },
  {
    id: 75,
    name: `Pitch`,
    description: `Pitch combines design templates, AI content generation, and real-time collaboration to build presentations 10x faster. Upload data/docs to auto-generate slides with charts, summaries, and talking points; AI suggests layouts, copy, and visuals matching your brand. Features include smart templates (sales/marketing/investor decks), drag-and-drop editor, analytics tracking viewer engagement, and integrations with Figma, Google Workspace. Teams share editable links with version history. Free plan available; Pro \$20/user/month unlocks AI features and custom branding. Perfect for sales teams, founders, and marketers creating polished decks without design skills.`,
    link: `https://pitch.com/`,
    image: `images/pitch.png`
  },
  {
    id: 76,
    name: `Slidesgo`,
    description: `Slidesgo's AI Presentation Maker creates complete decks by inputting topic, style (doodle, professional, elegant), and tone—delivers structured slides with layouts, text, and visuals in seconds. Edit via intuitive online editor: adjust colors/fonts, reposition elements, add personal images/icons from Freepik/Flaticon libraries. Download as editable PPTX for PowerPoint/Google Slides/Figma. Features 100+ professional templates across education, business, marketing; supports real-time collaboration. Completely free—no subscriptions needed. Perfect for students, teachers, marketers needing quick, polished presentations without design skills.`,
    link: `https://slidesgo.com/ai/presentation-maker`,
    image: `images/slidesgo.png`
  },
  {
    id: 77,
    name: `Plus AI`,
    description: `Plus AI generates complete slide decks from prompts, documents, or spreadsheets—automatically creates outlines, layouts, charts, and visuals matching your brand style. Edit slides conversationally ("add competitor analysis slide," "make more concise"); supports 50+ languages and real-time collaboration. Remix/rearrange slides with AI suggestions; exports to PPTX/PDF. Chrome extension installs as Google Slides add-on. Free trial; Pro \$15/month, Business \$30/user/month with team templates. Perfect for professionals creating data-driven presentations 10x faster without switching apps.`,
    link: `https://plus.ai/`,
    image: `images/plus_ai.jpg`
  },
  {
    id: 78,
    name: `Tome`,
    description: `Tome creates complete presentations by analysing prompts or uploaded documents, automatically generating structured slides with text, images (DALL-E integration), charts, and layouts optimized for storytelling. Edit conversationally ("add competitor slide," "make more visual"); supports templates for pitches, reports, marketing plans across industries. Features real-time collaboration, analytics for viewer engagement, mobile app, and exports to PPTX/PDF. Advanced AI offers iterative improvements, 3D models, and custom animations. Free tier available; Pro plans for teams/unlimited generations. Perfect for sales teams, founders, and educators creating engaging decks 10x faster.`,
    link: `https://ppt.ai/tome-ai-ppt`,
    image: `images/tome.png`
  },
  {
    id: 79,
    name: `Presentations.AI`,
    description: `Presentations.AI creates complete slide decks with layouts, charts, images, and content tailored to business, education, or sales needs—input topic/audience for instant outlines. Edit via chat commands ("add financial slide," "change to blue theme"); supports brand kits, real-time collaboration, and exports to PPTX/PDF. Features data import from spreadsheets, AI image generation, and presenter notes. Integrates with Google Workspace. Free plan with limits; Pro unlocks unlimited AI generations and custom templates. Perfect for professionals building investor pitches or reports 10x faster than manual design.`,
    link: `https://www.presentations.ai/`,
    image: `images/presentations_ai.png`
  },
  {
    id: 80,
    name: `Bricks AI`,
    description: `Bricks turns CSV/Excel/PDF data into interactive dashboards, charts, and presentations via natural language prompts—AI analyses data, suggests insights, and builds visuals that auto-update with source changes. Embed live spreadsheets, tables, and reports into slides; customize layouts/themes collaboratively. Features real-time team editing, PDF/PowerPoint exports, privacy-focused (no AI training on user data). No code/setup needed; handles complex analysis for business users. Free tier available; Pro plans for advanced features/unlimited data. Perfect for sales/marketing teams presenting dynamic, data-backed stories without manual charting.`,
    link: `https://www.thebricks.com/`,
    image: `images/bricks_ai.jpg`
  },
  {
    id: 81,
    name: `Formula Bot`,
    description: `Formula Bot converts plain English prompts like "calculate average sales by region" into Excel/Google Sheets formulas (=AVERAGEIFS), VBA scripts, or regex patterns instantly. Upload spreadsheets for bulk formula generation, data cleaning, app building (no-code), and regex extraction. Features Python/SQL code generator, table generator from text, and chatbot for spreadsheet help. Works via web/Chrome extension; handles complex nested functions users struggle with. Free tier limited; Pro unlocks unlimited generations and advanced features. Perfect for analysts, marketers automating spreadsheet tasks without memorizing syntax.`,
    link: `https://formulabot.com/`,
    image: `images/formula_bot.png`
  },
  {
    id: 82,
    name: `Gigasheet`,
    description: `Gigasheet handles billion-row CSV/Excel/JSON files (up to 1TB) with Excel-like interface—no downloads needed. AI-powered Sheet Assistant answers natural language queries ("top 10 customers by revenue Q4") generating filters, pivots, charts instantly. Features joins across 50+ connectors (Salesforce, HubSpot, S3), scheduled refreshes, and collaboration. Export insights to Tableau/PowerBI or embed live sheets. Perfect for analysts, marketers processing terabytes of CRM/logs 10x faster than desktop tools. Free tier (1B rows/month); Enterprise custom pricing.`,
    link: `https://www.gigasheet.com/`,
    image: `images/gigasheet.png`
  },
  {
    id: 83,
    name: `Rows AI`,
    description: `Rows combines familiar spreadsheet functions with AI Analyst for natural language queries ("show top customers by revenue") that generate summaries, pivot tables, charts, and insights without formulas. Import data from 50+ connectors (APIs, databases, Google Analytics), automate refreshes, build forms/dashboards, and collaborate in real-time. Features Python code execution, text classification, translations, and OpenAI integration for content generation. Scales to enterprise data volumes with workspace permissions. Free tier available; Pro unlocks unlimited AI usage and advanced automations. Perfect for marketers, analysts replacing manual Excel workflows with intelligent data apps.`,
    link: `https://rows.com/`,
    image: `images/rows_ai.png`
  },
  {
    id: 84,
    name: `Mem AI`,
    description: `Mem automatically organizes notes, documents, and web clips into a searchable second brain using AI to link related content, generate summaries, and surface insights across your knowledge base. Features offline access, natural language search ("meeting notes from last month"), real-time collaboration, and AI writing assistance for drafting emails/meeting notes. Integrates calendar, tasks, and Chrome extension for effortless capture. Available on web, Mac, Windows, iOS. Free plan available; Pro unlocks unlimited AI queries and advanced organization. Perfect for professionals managing scattered information across apps into one intelligent workspace.`,
    link: `https://get.mem.ai/`,
    image: `images/mem_ai.png`
  },
  {
    id: 85,
    name: `Taction AI`,
    description: `Taction AI analyzes customer information, marketing effectiveness, sales trends, and product feedback through smart algorithms, generating analytical reports with key business indicators. Features intelligent Q&A based on corporate knowledge bases, customized for specific industries to improve work efficiency and service quality. Designed for customer relationship management with deep data insights. Additional capabilities include Google search ranking optimization to boost website visibility and traffic. Ideal for businesses seeking AI-driven CRM analytics and instant industry-specific information retrieval.`,
    link: `https://tactionai.com.au/`,
    image: `images/taction_ai.png`
  },
  {
    id: 86,
    name: `Wispr Flow`,
    description: `Wispr Flow transcribes natural speech into any text field (Notion, Gmail, Slack, Cursor, Figma) with AI-powered cleanup—removes fillers ("um"), adds punctuation/formatting, and matches your writing style. Features personal dictionary for proper nouns, voice snippets ("meeting notes template"), command mode ("Hey Flow, rewrite professionally"), and context-aware recognition for code/docs. Supports 100+ languages; learns your vocabulary across Mac/Windows/iOS. Enterprise security (SOC 2, HIPAA). Perfect for writers, developers, executives dictating 3x faster than typing while maintaining professional output. Free tier; Pro unlocks unlimited use and team features.`,
    link: `https://wisprflow.ai/`,
    image: `images/wispr_flow.png`
  },
  {
    id: 87,
    name: `LMArena AI`,
    description: `LMArena lets users submit prompts to two anonymized AI models simultaneously, then vote for the better response—Elo ratings aggregate votes into live leaderboards tracking ChatGPT, Claude, Gemini, Mistral across chat, coding, vision tasks. Specialized arenas test agents, search systems, repo interactions; reflects real-world preferences over static benchmarks. Open-source; promotes transparent AI progress via community participation. Free web access; ideal for researchers, developers selecting models or monitoring updates without bias toward brand names.`,
    link: `https://lmarena.ai/`,
    image: `images/lmarena_ai.jpg`
  },
  {
    id: 88,
    name: `CapCut`,
    description: `CapCut offers AI AutoCut for automatic editing (trims footage, adds transitions, syncs to music), auto captions with speech recognition in multiple languages, background removal, AI style transfer effects (cartoon, cinematic), video stabilization, and one-click quality enhancement. Features text-to-video generation, AI avatars, script-to-speech, and conversational scene creation. Rich library of effects, filters, sound effects, and templates optimized for TikTok/Reels/YouTube Shorts. Available on mobile/desktop/web; exports without watermarks on free tier. Perfect for creators making viral short-form videos 10x faster with pro results.`,
    link: `https://www.capcut.com/`,
    image: `images/capcut.png`
  },
  {
    id: 89,
    name: `Rocket.new`,
    description: `Rocket.new converts single-sentence descriptions into production-ready apps with frontend UI, backend logic (databases, authentication), API integrations (Stripe, Supabase), and deployment pipelines. Import Figma designs for pixel-perfect conversion; Precision Mode offers 100+ slash commands (/add-login, /fix-layout) for targeted edits. Features live previews, GitHub code export (full ownership), mobile-responsive outputs, and chat-based iteration. Handles client portals, dashboards, AI assistants, e-commerce—perfect for founders prototyping MVPs 10x faster than traditional development. Free tier (1M tokens); paid plans unlock unlimited builds and advanced integrations.`,
    link: `https://www.rocket.new/`,
    image: `images/rocket_new.png`
  },
  {
    id: 90,
    name: `Blackbox AI`,
    description: `Blackbox AI provides code autocompletion, chat-based coding help, repository search across GitHub, and OCR extraction from images/videos into editable code. Integrates as VS Code extension, Chrome extension, CLI tool, mobile apps (iOS/Android), and full IDE. Supports 300+ AI models through unified interface; multi-agent execution runs Claude/Gemini/Codex simultaneously for complex tasks. Features autonomous error fixing, Vercel auto-deployment, remote cloud development, and military-grade encryption. Free tier unlimited basic usage; Pro unlocks advanced agents/API. Perfect for developers building 10x faster from prototype to production.`,
    link: `https://www.blackbox.ai/`,
    image: `images/blackbox_ai.png`
  },
  {
    id: 91,
    name: `Whisk AI`,
    description: `Whisk AI analyzes uploaded images (subject, scene, style) with Gemini AI to generate detailed captions, then uses Imagen 3 to produce new creative variations blending those elements. Upload multiple photos or use AI suggestions; remix outputs with text refinements for custom art, merchandise designs, or prototypes. Supports animation via Whisk Animate (Veo 3) and works across 100+ countries. Available through Google Labs (US-focused); completely free during experimental phase. Perfect for creators bypassing complex text prompts—intuitive visual remixing for rapid ideation.`,
    link: `https://labs.google/fx/tools/whisk`,
    image: `images/whisk_ai.png`
  },
  {
    id: 92,
    name: `NeuralText`,
    description: `NeuralText is an easy-to-use AI tool that helps with content creation and SEO. It lets you find keywords, group them smartly, and analyze search results to make better content. You can generate blog posts, emails, ads, and product descriptions quickly with its AI writer. It checks readability, length, and keywords to optimize your work. Connect it to Google Search Console for real-time insights on traffic and rankings. Perfect for marketers, bloggers, and businesses wanting high-ranking content without hassle. Saves time from research to publishing in a simple three-step process: plan, write, optimize.`,
    link: `https://neuraltext.com`,
    image: `images/neuraltext.png`
  },
  {
    id: 93,
    name: `Frase.io`,
    description: `Frase.io is an AI-powered platform that simplifies SEO content creation for marketers, writers, and teams. It analyzes top Google search results to pull out key topics, questions, and structures from competitors. The AI agent researches, generates outlines, drafts articles in your brand voice, and optimizes for both Google rankings and AI search visibility like ChatGPT citations. Real-time scoring shows topic coverage, readability, and suggestions to improve SEO and GEO scores. Integrates with WordPress, Google Docs, and Search Console for seamless workflows from research to publishing. Users create high-quality content faster with less guesswork, often seeing rankings boost quickly. Track performance, detect content decay, and get internal linking tips automatically.`,
    link: `https://frase.io`,
    image: `images/frase_io.png`
  },
  {
    id: 94,
    name: `Colossyan`,
    description: `Colossyan is an AI video platform that turns text, PDFs, or PowerPoints into realistic videos using digital avatars. Pick from over 150 diverse AI actors with natural expressions, gestures, and lip-sync for training, onboarding, sales, or marketing content. Add quizzes, branching scenarios, and interactions to boost engagement in learning videos. Auto-translate to 70+ languages while keeping voice and visuals intact, perfect for global teams. ChatGPT integration helps write scripts, adjust tone, and generate ideas fast. Export in SCORM for LMS or share easily. Create custom avatars from your photo and voice clone for personal touch. Cuts production time and costs dramatically.`,
    link: `https://www.colossyan.com`,
    image: `images/colossyan.png`
  },
  {
    id: 95,
    name: `Chat Forefront`,
    description: `Chat Forefront is a versatile AI chat platform that gives access to top models like GPT-4, Claude 3, and others for natural conversations and tasks. Upload files such as PDFs, Word docs, or CSVs to chat with their content, visualize data, or extract insights quickly. It supports internet browsing for real-time info, image generation via Stable Diffusion, and custom assistants tailored for roles like software engineer, financial analyst, or chef. Teams can collaborate securely with shared chats, enterprise features like SSO, and self-hosting options. Great for personal use, productivity, research, or business workflows needing powerful, customizable AI without complex setup. Free tier available with upgrades for more usage`,
    link: `https://chat.forefront.ai`,
    image: `images/chat_forefront.png`
  },
  {
    id: 96,
    name: `QuillBot`,
    description: `QuillBot is a popular AI writing assistant that helps improve and transform text quickly. Its main tool paraphrases sentences in modes like Standard, Fluency, Creative, or Academic to match your style while keeping the original meaning. It includes a grammar checker for errors, a summarizer to shorten articles or notes, a citation generator, and plagiarism detector. You can adjust tone, freeze key words, and integrate it with Google Docs, Word, or as a browser extension for real-time help. Perfect for students avoiding writer's block, professionals polishing reports, or non-native speakers boosting clarity. Works in multiple languages with mobile apps too. Free version available; premium unlocks more modes and unlimited use.`,
    link: `https://quillbot.com`,
    image: `images/quillbot.jpg`
  },
  {
    id: 97,
    name: `Moz.com`,
    description: `Moz.com offers powerful SEO tools to help websites rank higher and grow traffic. Its Moz Pro suite includes Keyword Explorer for finding search volume, difficulty, and related terms; Link Explorer for backlink analysis with Domain Authority scores; and Site Crawl to detect technical issues like broken links or slow pages. Track rankings, audit sites, and get optimization tips with on-page grading and SERP analysis. MozBar Chrome extension shows metrics instantly on any page. Great for beginners and pros, it integrates competitor research, local SEO, and custom reports. Free tools like Domain Analysis complement paid plans starting at \$49/month. Simplifies SEO workflows for marketers and agencies.`,
    link: `https://moz.com`,
    image: `images/moz_com.png`
  },
  {
    id: 98,
    name: `StockAI.com`,
    description: `StockAI.com appears to be a platform focused on secure financial transactions and payments. It emphasizes safe, fast, and hassle-free money transfers for users needing simple payment solutions. The service likely supports quick peer-to-peer or business transactions with strong security features to protect user data and funds. While specific AI features aren't detailed in available info, it positions itself for easy digital payments without complications. Ideal for individuals or small businesses handling everyday transfers efficiently. Note that related sites like stoxai.in offer AI stock screening with sentiment analysis and technical tools for Indian markets, but stockai.com centers on payments.`,
    link: `https://www.stockai.com`,
    image: `images/stockai_com.png`
  },
  {
    id: 99,
    name: `Otter.ai`,
    description: `Otter.ai is an AI-powered transcription service that records and transcribes meetings in real-time with high accuracy. It identifies speakers automatically, generates searchable notes, and creates concise summaries or action items from discussions. Key features include live captions for Zoom and Google Meet, keyword highlighting, collaboration tools like comments and sharing, plus integrations with calendars, Slack, and Dropbox. Upload audio/video files for transcription up to four hours, edit transcripts easily, and use Otter AI Chat to query notes or generate emails. Ideal for professionals, teams, educators, and journalists saving time on note-taking while capturing every detail securely. Free plan available with premium options for more minutes and features.`,
    link: `https://otter.ai`,
    image: `images/otter_ai.jpg`
  },
  {
    id: 100,
    name: `Vertex.im`,
    description: `Vertex.im is an online platform for creating impressive 3D scenes and icons easily. Users can customize handcrafted 3D icons by adjusting colors, materials, viewing angles, and more before downloading in high-quality PNG format. It includes a Figma plugin to build 3D scenes directly in design workflows, with pre-made models, SVG-to-3D conversion, and various materials. Perfect for designers adding unique visuals to projects, social media, or apps without needing advanced 3D skills. Free for personal and commercial use, it streamlines customization for quick, professional results. Ideal for UI/UX, presentations, or branding needing eye-catching 3D elements.`,
    link: `https://vertex.im`,
    image: `images/vertex_im.png`
  },
  {
    id: 101,
    name: `Repurpose.io`,
    description: `Repurpose.io automates content distribution across social media platforms, saving creators hours of manual posting. Connect accounts like YouTube, TikTok, Instagram, LinkedIn, Facebook, and cloud storage such as Google Drive or Dropbox. Set up workflows to transform one video, podcast, or Zoom call into shorts, reels, clips with auto-captions, hashtags, watermark removal, and platform-specific resizing. Schedule posts via calendar view, track performance, and back up content automatically to avoid losses. Ideal for solopreneurs, podcasters, marketers, and agencies managing multiple clients efficiently. Handles 25+ accounts per platform with AI-generated text for posts. Free trial available.`,
    link: `https://repurpose.io`,
    image: `images/repurpose_io.png`
  },
  {
    id: 102,
    name: `Adobe Firefly`,
    description: `Adobe Firefly is a family of creative generative AI models designed for making images, videos, vectors, and audio safely. Type a text prompt to generate photorealistic or artistic visuals, edit with Generative Fill to add/remove elements, or expand canvases seamlessly. Create short videos from text or images, add effects like fire/water, and translate to 20+ languages while preserving voice tone. Use Boards for mood boards and team ideation, then export to Photoshop or Express. All content is commercially safe, trained on licensed Adobe Stock data. Free tier with credits; integrates across Creative Cloud apps. Perfect for designers, marketers, and creators speeding up workflows ethically.`,
    link: `https://www.adobe.com/products/firefly.html`,
    image: `images/adobe_firefly.png`
  },
  {
    id: 103,
    name: `Murf.ai`,
    description: `Murf.ai is an AI-powered text-to-speech platform that creates realistic voiceovers from text for videos, presentations, and podcasts. Choose from 120+ natural-sounding voices in 20 languages, with controls for pitch, speed, emphasis, pauses, and emotions like happy or excited. Features include voice cloning to replicate your own voice, auto-translation, pronunciation tweaks, and easy editing with a timeline interface. Add background music, sound effects, or export in MP3/WAV formats. Integrates with Canva, Google Slides, and PowerPoint for quick voiceovers. Perfect for creators, educators, marketers, and businesses needing professional audio without hiring actors. Free trial; plans from \$19/month.`,
    link: `https://murf.ai`,
    image: `images/murf_ai.jpg`
  },
  {
    id: 104,
    name: `ElevenLabs`,
    description: `ElevenLabs is a leading AI voice platform specializing in ultra-realistic text-to-speech and voice generation. It turns written text into lifelike speech with natural intonation, emotions, and pacing across 70+ languages using models like Eleven Multilingual v2 and the expressive Eleven v3. Key features include instant and professional voice cloning from short audio samples, AI dubbing that translates videos while preserving the original speaker's voice, speech-to-speech conversion, and sound effects generation. Create custom voices via Voice Design, generate multi-speaker dialogues, or build AI agents and audiobooks. Ideal for content creators, developers, podcasters, and businesses needing high-quality, scalable audio. Free tier with paid API access.`,
    link: `https://elevenlabs.io`,
    image: `images/elevenlabs.png`
  },
  {
    id: 105,
    name: `tl;dv`,
    description: `tl;dv is an AI meeting assistant that automatically records, transcribes, and summarizes video calls across Zoom, Google Meet, and Microsoft Teams. It captures every word with speaker identification, generates smart highlights like key moments and action items, and provides timestamped chapters for quick navigation. Share searchable, editable transcripts and AI-generated insights like sentiment analysis or Q&A from calls. Integrates with Slack, Notion, Gmail, and CRMs for seamless workflows. Perfect for sales teams reviewing demos, managers tracking decisions, or anyone avoiding note-taking during busy calls. Free unlimited recordings for individuals; teams get advanced AI features. Boosts productivity by turning hours of meetings into minutes of actionable notes.`,
    link: `https://tldv.io`,
    image: `images/tl_dv.png`
  },
  {
    id: 106,
    name: `Wizdom.ai`,
    description: `Wizdom.ai is an AI-powered knowledge management platform that helps organizations capture, organize, and share information efficiently. It automatically gathers knowledge from documents, emails, and conversations using AI, then provides intelligent search with natural language processing to find relevant info fast. Users get personalized feeds based on their role and interests, plus collaborative tools like forums and wikis for team sharing. Features reduce information silos, boost productivity, and support enterprise knowledge bases, R&D, customer support, and training. Scalable for businesses but may need quality data and initial setup time. Great for teams wanting accessible, centralized insights without manual effort.`,
    link: `https://www.wisdom.ai/`,
    image: `images/wizdom_ai.png`
  },
  {
    id: 107,
    name: `Async (async.ai)`,
    description: `Async, formerly Podcastle.ai, is an AI-powered all-in-one platform for audio, video, and voice content creation. Record studio-quality podcasts or remote interviews with up to 10 participants in 4K video and lossless WAV audio, regardless of internet quality. AI editing tools remove noise, filler words, silences, and auto-level volumes while generating subtitles, clips, and multi-language dubs using 1000+ voices. Clone your voice instantly for voiceovers or build real-time conversational AI agents via developer APIs. Perfect for podcasters, YouTubers, marketers, and teams producing professional content globally without expensive gear. Handles everything from recording to publishing on Spotify, YouTube, and TikTok. Free plan available.`,
    link: `https://async.ai`,
    image: `images/async_async_ai.png`
  },
  {
    id: 108,
    name: `Apowersoft.com`,
    description: `Apowersoft.com provides multimedia software solutions for screen recording, video editing, and mobile management. Key tools include ApowerREC for capturing screen activity with audio, ApowerMirror to mirror and control iOS/Android devices on PC wirelessly, and ApowerEdit for professional video editing with effects and transitions. Other features cover online screen recording, free screenshot capture with annotation, watermark removal, video conversion, audio recording, and file compression. The Unlimited subscription bundles all tools for \$59.95/year with priority support and updates. Perfect for educators, gamers, businesses, and creators needing versatile multimedia utilities across Windows, Mac, and web. Free versions available for basic use.`,
    link: `https://www.apowersoft.com`,
    image: `images/apowersoft_com.png`
  },
  {
    id: 109,
    name: `Blink`,
    description: `Blink (blinkai.co) is an all-in-one AI content generator platform that handles text, images, video, voice, and code creation. It uses models like ChatGPT, Gemini, Claude, and Grok to produce high-quality images from text prompts, analyze uploaded images with AI vision, generate voiceovers, transcribe speech to text in multiple languages, and create code snippets. Features include AI chat image generation within conversations, customizable resolutions and lighting for visuals, and frameworks like AIDA for writing. Perfect for creators, marketers, and developers needing quick, versatile AI tools in one place without switching apps. Supports affiliate programs and fast Google sign-in for easy access.`,
    link: `https://blinkai.co`,
    image: `images/blink.png`
  },
  {
    id: 110,
    name: `Descript`,
    description: `Descript revolutionizes audio and video editing by letting you edit content like a text document. Its text-based editing transcribes speech automatically with 95% accuracy, so deleting words removes the corresponding audio/video instantly. Key AI features include Overdub for voice cloning to fix mistakes without re-recording, Studio Sound to enhance poor recordings by removing noise and boosting clarity, filler word removal, and AI eye contact correction for videos. Record remotely with multiple participants, create clips automatically, add captions, and screen record directly. Perfect for podcasters, YouTubers, marketers, and teams producing professional content fast. Integrates with Zoom and exports to social platforms. Free plan available; Creator Pro at \$12/month unlocks advanced tools.`,
    link: `https://www.descript.com`,
    image: `images/descript.png`
  },
  {
    id: 111,
    name: `Haiper AI`,
    description: `Haiper AI (likely what you meant by "hoiper ai") is a powerful AI video generator that creates high-quality videos from text prompts, images, or existing clips. Key features include text-to-video for storytelling, image-to-video animation that adds realistic motion to static photos, video extension to lengthen clips seamlessly, and video enhancement for better resolution and quality. Users control camera angles, lighting, poses, and motion through advanced AI tools, plus video repainting to change colors, textures, or elements. Perfect for social media reels, marketing videos, educational content, and professional creators needing fast production without editing skills. Outputs ultra-realistic results in minutes. Free credits available with paid plans for more usage.`,
    link: `https://docs.haiper.ai/introduction`,
    image: `images/haiper_ai.png`
  },
  {
    id: 112,
    name: `InVideo AI`,
    description: `InVideo AI is an online AI video creation platform that turns text prompts into complete, professional videos automatically. Enter a simple description like "30-second product ad" and it generates scripts, scenes, voiceovers, stock footage, music, captions, and transitions using advanced AI models. Edit using text commands in the "Magic Box" - change scenes, swap clips, adjust voice accents, or remove elements without timeline complexity. Features include 16M+ stock assets, voice cloning, multi-language dubbing in 50+ languages, mobile apps, and templates for social media, explainers, and ads. Perfect for marketers, small businesses, educators, and creators needing fast social content without editing skills. Free plan with watermarks; paid tiers from \$20/month unlock unlimited exports.`,
    link: `https://invideo.io/make/ai-video-editor/`,
    image: `images/invideo_ai.png`
  },
  {
    id: 113,
    name: `Kling AI`,
    description: `Kling AI is a cutting-edge AI video generation and editing platform that creates hyper-realistic videos from text, images, or existing clips. Its Kling O1 model offers unified multimodal editing with features like semantic inpainting to swap objects (car to tractor), add/remove elements, change lighting/weather, or extend scenes while maintaining motion consistency. Generate up to 15-second 1080p clips at 30fps with native audio sync, lip-sync dialogue in multiple languages, and character locking across shots using reference images. Advanced tools include motion transfer from video to image, camera angle changes, and physics-realistic movements. Perfect for filmmakers, marketers, and creators producing cinematic content without traditional editing. Free credits available.`,
    link: `https://klingai.com`,
    image: `images/kling_ai.png`
  },
  {
    id: 114,
    name: `Krea AI`,
    description: `Krea AI is a user-friendly platform that lets you create, edit, and enhance images and videos using simple text prompts or sketches. It generates high-quality visuals in seconds with real-time rendering, taking just 0.8 seconds per image. You can train the AI on your own style for custom results, make videos from images or text, upscale content, and even create 3D objects. Perfect for creators, designers, and marketers, it offers free access with powerful tools like AI video generation using models such as Veo 3 and Kling. With over 22 million users and 1 billion images generated, it's fast, intuitive, and boosts creativity without complex skills.`,
    link: `#`,
    image: `images/krea_ai.png`
  },
  {
    id: 115,
    name: `LTX Studio`,
    description: `LTX Studio is an all-in-one AI platform for video production that turns text ideas into full videos, storyboards, and edits. Created by Lightricks, it helps filmmakers, marketers, and teams build professional content fast—from scripting and character design to camera controls, motion keyframes, and final 4K renders. You input a prompt, generate shots with styles like cinematic or branded looks, edit precisely with tools for music, voiceovers, and effects, and export ready videos. It's web-based for desktop, offers free and paid plans, and uses open-source LTX-2 models plus proprietary tech for consistency and speed. Ideal for pros and beginners to streamline workflows without complex software.`,
    link: `#`,
    image: `images/ltx_studio.png`
  },
  {
    id: 116,
    name: `Luma AI`,
    description: `Luma AI is a powerful platform for creating 3D models, videos, and immersive content from simple inputs like text, images, or smartphone videos. Its Dream Machine tool generates realistic 5-10 second video clips quickly, while Ray3 models add advanced physics, HDR quality, and smooth motion for professional results. Users can scan real-world objects with the free mobile app to build detailed 3D models for e-commerce, games, or AR/VR. Features include image-to-video animation, video editing with text prompts, upscaling to 4K, and customizable scenes. Ideal for creators, marketers, and developers, it simplifies complex visuals without needing expert skills—over 10 million models created so far. Free tier available with paid upgrades for more credits.`,
    link: `#`,
    image: `images/luma_ai.jpg`
  },
  {
    id: 117,
    name: `Pika AI`,
    description: `Pika AI is an easy-to-use AI video generator that turns text, images, or videos into short, stunning clips perfect for social media, ads, and creative projects. Key features include text-to-video for quick scene creation, image-to-video to animate stills with motion like zooms or pans, and video-to-video for editing footage. Fun tools like Pikaffects add effects (inflate, melt, explode), Pikaswaps replace objects, Pikadditions insert elements seamlessly, Pikaframes for keyframe control, and Pikaformance for lip-sync with audio. It supports cinematic, anime, or 3D styles, up to 1080p resolution, and 3-25 second clips. Beginner-friendly with fast generation, free tier, and paid plans for pros—ideal for TikTok, Reels, or concepts without editing skills.`,
    link: `#`,
    image: `images/pika_ai.png`
  },
  {
    id: 118,
    name: `Runway AI`,
    description: `Runway AI (often called RunwayML) is a leading creative platform for generating and editing videos and images with AI, popular among filmmakers, artists, and marketers. Its Gen-4 and Gen-4.5 models excel at text-to-video, image-to-video, and video-to-video creation, producing realistic motion, consistent characters across shots, and cinematic quality up to 1080p in formats like 16:9 or 9:16. Upload a reference image, describe motion (e.g., "walk toward camera"), and get 5-10 second clips fast—Turbo mode in 30 seconds. Tools include lip-sync (Act-One), background removal, relighting, inpainting, slow-motion, and 3D textures. Free plan with credits, paid tiers from \$12/month for pros; trusted by millions for social media, ads, music videos, and concepts without traditional editing skills.`,
    link: `#`,
    image: `images/runway_ai.png`
  },
  {
    id: 119,
    name: `Sora AI`,
    description: `Sora AI, developed by OpenAI, is a cutting-edge text-to-video generator that creates realistic videos up to 20 seconds long from simple text prompts, images, or existing clips. It excels at producing cinematic scenes with consistent characters, natural physics, smooth motion, and synchronized audio like sound effects or dialogue. Key features include storyboarding for multi-shot planning, remix to tweak videos, re-cut for editing lengths, blend for combining scenes, loop for seamless repetitions, and style presets for looks like cinematic or anime. Accessible via ChatGPT Plus/Pro subscriptions starting around \$20/month, it supports 1080p resolution and aspect ratios like 16:9 or 9:16. Perfect for filmmakers, marketers, and creators to prototype ideas fast without cameras or editing suites—handling complex actions, emotions, and worlds effortlessly.`,
    link: `#`,
    image: `images/sora_ai.jpg`
  },
  {
    id: 120,
    name: `AutoDraw`,
    description: `AutoDraw is a free Google AI drawing tool that turns your rough sketches into polished artwork instantly. Just doodle on the canvas with your mouse, finger, or stylus, and the AI uses machine learning to guess what you're drawing—like a house, tree, or cat—then suggests matching professional illustrations from talented artists. Pick one to replace your sketch, then customize with colors, shapes, text, resize, rotate, or fill tools. No skills needed; it's perfect for quick diagrams, icons, presentations, or fun doodles on any device—phone, tablet, or computer—without downloads or sign-up. Export as PNG or share to social media easily. Simple, fast, and creative for everyone.`,
    link: `https://www.autodraw.com/`,
    image: `images/autodraw.png`
  },
  {
    id: 121,
    name: `Canva`,
    description: `Canva is a popular online design platform with powerful AI tools that make creating graphics, videos, presentations, and websites easy for everyone. Its Magic Studio suite includes text-to-image generation, AI photo editing like background removal and upscaling, video tools for auto-captions and transitions, and Magic Write for smart text suggestions. New 2026 updates add image-to-video conversion, 3D objects, email templates, forms, and ChatGPT integration for faster workflows. Free to start with millions of templates and elements; Pro plans unlock unlimited AI uses from around \$15/month. Perfect for beginners, marketers, and teams—no design skills needed to produce pro results quickly.`,
    link: `#`,
    image: `images/canva.jpg`
  },
  {
    id: 122,
    name: `Design.com`,
    description: `Design.com is an AI-powered branding platform that helps small businesses and entrepreneurs create professional logos, websites, business cards, social media graphics, flyers, and more—all in one place with a single subscription. Its AI logo maker generates thousands of editable, royalty-free designs instantly from your business name or ideas, using smart templates and customization for fonts, colors, and layouts. The website builder crafts responsive sites with hosting and custom domains, while tools handle Instagram posts, YouTube banners, QR codes, email signatures, and print assets like letterheads. No design skills needed; drag-and-drop editing makes it fast and intuitive. Free trials available, with paid plans for unlimited access—perfect for startups to build cohesive branding quickly.`,
    link: `#`,
    image: `images/design_com.png`
  },
  {
    id: 123,
    name: `Framer`,
    description: `Framer is a powerful no-code platform for designers to build interactive, responsive websites with full creative control—no coding required. Its AI-powered tools like AI Wireframer generate complete layouts, pages, and content from simple text prompts, while the visual drag-and-drop editor handles animations, scroll effects, parallax, hover states, and 3D transforms. Built-in CMS manages dynamic content like blogs or portfolios, with real-time collaboration, SEO optimization, and responsive breakpoints for flawless mobile/desktop views. Create reusable components, integrate custom code if needed, and publish instantly with hosting. Free for unlimited projects; paid plans from around \$5/month for custom domains. Ideal for portfolios, agencies, startups, and pros seeking pixel-perfect sites fast.`,
    link: `https://www.framer.com/`,
    image: `images/framer.png`
  },
  {
    id: 124,
    name: `Microsoft Designer`,
    description: `Microsoft Designer is a free AI-powered graphic design app that helps anyone create stunning visuals, images, stickers, and layouts using simple text prompts. Powered by DALL-E 3 and other AI models, it generates custom images, removes or blurs backgrounds, suggests designs, and edits photos with tools like restyling, cropping, or boosting quality. Integrated with Microsoft 365 apps like Word, PowerPoint, and Edge, it auto-applies designs for presentations, social posts, flyers, logos, and more. No design skills needed—just describe your idea for professional results in seconds. Available on web, mobile (iOS/Android), with Copilot Pro (\$20/month) for 100 daily boosts and faster creation. Perfect for quick marketing, personal projects, or teams.`,
    link: `https://designer.microsoft.com/`,
    image: `images/microsoft_designer.png`
  },
  {
    id: 125,
    name: `Uizard`,
    description: `Uizard is an AI-powered UI/UX design tool that lets non-designers and teams quickly turn ideas into wireframes, mockups, and interactive prototypes. Using Autodesigner 2.0, enter simple text prompts to generate full multi-screen app or website layouts instantly, complete with themes, colors, and components. Scan hand-drawn sketches or screenshots to convert them into editable digital designs; switch between low/high-fidelity views effortlessly. Features include drag-and-drop editing, real-time collaboration, auto-prototyping with clickable elements, theme builders, and code export for developers. Perfect for product managers, startups, and designers to ideate, iterate, and test fast—no coding or advanced skills needed. Free plan available; pro tiers unlock advanced AI from \$12/user/month.`,
    link: `https://uizard.io/`,
    image: `images/uizard.png`
  },
  {
    id: 126,
    name: `Decktopus AI`,
    description: `Decktopus AI is an intuitive AI-powered presentation maker that generates complete, professional slide decks in seconds from a simple topic, outline, or pasted text. Enter your title or upload documents (PDF, DOCX, etc.), and it auto-creates layouts, content, images, speaker notes, and even Q&A sections using smart templates and branding options. Customize via drag-and-drop editor with AI image generation, voice recording, interactive forms for lead capture, analytics to track views, and translation tools. Export as PDF, PPT, or share links; supports teams with collaboration and Zapier integration. No design skills needed—ideal for sales pitches, business reports, educators, and startups saving hours on polished visuals. Free trial available; plans start around \$15/month for unlimited AI uses.`,
    link: `https://www.decktopus.com/`,
    image: `images/decktopus_ai.png`
  },
  {
    id: 127,
    name: `Flourish`,
    description: `Flourish is a powerful no-code platform for creating interactive data visualizations, charts, maps, and storytelling experiences that captivate audiences. Upload your data (Excel, CSV, Google Sheets), and choose from templates like bar chart races, Sankey diagrams, line charts, heatmaps, or scrollytelling narratives—no coding needed. Customize colors, fonts, animations, filters, and add text, images, or audio for engaging stories. Embed easily into websites, reports, or presentations; supports real-time updates and team collaboration. Free tier for basic use; pro plans from around \$29/month unlock advanced features, private projects, and exports. Ideal for journalists, marketers, analysts, and educators to turn numbers into compelling visuals quickly.​`,
    link: `https://flourish.studio/`,
    image: `images/flourish.jpg`
  },
  {
    id: 128,
    name: `Julius AI`,
    description: `Julius AI is a conversational AI platform that simplifies data analysis, visualization, and insights for everyone—no coding required. Upload CSV, Excel, PDF, or connect live data sources, then chat in plain English to clean messy data, generate charts (bar, scatter, heatmaps), run stats tests (t-tests, regression), predict trends, or build reports automatically. It auto-selects visuals, explains results simply, handles "what-if" scenarios, and supports team sharing with secure collaboration. Features include data filtering, batch processing, templates, and mobile apps for quick analysis. Free basic plan; paid tiers from \$20/month unlock advanced models and unlimited use. Great for business pros, researchers, and teams turning raw data into actionable decisions fast.`,
    link: `https://julius.ai/`,
    image: `images/julius_ai.png`
  },
  {
    id: 129,
    name: `Visme AI`,
    description: `Visme is an intuitive AI-powered data visualization and design platform for turning raw data into stunning charts, infographics, dashboards, reports, and presentations. Upload CSV/Excel data or connect live sources; AI auto-generates optimal visuals like bar graphs, pie charts, heatmaps, maps, and gauges with smart recommendations, animations, and interactive elements. Customize themes, add Dynamic Fields for auto-updates, embed analytics for viewer insights, and integrate with tools like Google Analytics. No coding needed—perfect for marketers, analysts, educators creating engaging stories. Free tier; Pro plans from \$29/month unlock AI tools, unlimited storage, and exports (PDF, video, HTML). From conversation pattern of design/presentation tools.`,
    link: `https://www.visme.co/`,
    image: `images/visme_ai.png`
  },
  {
    id: 130,
    name: `AskCodi`,
    description: `AskCodi is an AI-powered coding assistant that helps developers write, debug, explain, and optimize code across multiple languages like Python, JavaScript, Java, and more. Integrated with IDEs such as VS Code, JetBrains, and Sublime Text, it offers chat-based help, code generation from prompts, auto-documentation, unit test creation, bug detection, regex building, SQL query writing, and Big-O analysis. Use the web app or browser extension for quick tasks; build UIs with the UI Builder tool or create custom agents. Supports GPT-4 and other models for context-aware suggestions without leaving your workflow. Free tier available; premium unlocks unlimited queries and advanced features—ideal for speeding up development from prototyping to production.`,
    link: `https://www.askcodi.com/`,
    image: `images/askcodi.png`
  },
  {
    id: 131,
    name: `Codiga`,
    description: `Codiga is an AI-powered developer platform that boosts code quality, security, and productivity through real-time analysis and smart tools. It offers static code analysis to detect violations instantly in your IDE (VS Code, JetBrains), automated pull request reviews for design/performance issues, and a code snippet manager to create, share, and reuse contextual snippets across 15+ languages like Python, JavaScript, Java, and C++. Security scans find vulnerabilities (CWE/CVE), while custom rules enforce team standards. Integrates with GitHub, GitLab, and Bitbucket for seamless workflows. Free basic version; paid plans for teams save ~3 hours/week per developer by catching errors early and accelerating reviews—ideal for individuals, startups, and enterprises shipping cleaner code faster.`,
    link: `https://www.codiga.io/`,
    image: `images/codiga.png`
  },
  {
    id: 132,
    name: `Cursor AI`,
    description: `Cursor is an AI-first code editor built on VS Code that supercharges development with intelligent features for faster coding. Key tools include Tab autocomplete for multi-line predictions, Composer for generating/editing code via natural language (Ctrl+K), codebase chat that understands your entire project context, inline error fixing, and Agent mode for autonomous tasks like debugging or terminal commands. Supports models like GPT-4o, Claude 3.5 Sonnet; handles Python, JS/TS, Java, and more with linting, refactoring, docs generation, and image-to-code. Privacy-focused with SOC 2 certification. Free tier (2K completions); Pro \$20/month for unlimited advanced use—perfect for solo devs to teams building software 2-3x faster without leaving the editor.`,
    link: `https://cursor.com/`,
    image: `images/cursor_ai.png`
  },
  {
    id: 133,
    name: `Qodo AI`,
    description: `Qodo is a quality-first AI coding platform that automates code reviews, test generation, and integrity checks to boost developer productivity and reliability. It integrates into IDEs (VS Code, JetBrains), Git providers, and CI/CD pipelines, offering agentic workflows for context-aware suggestions, bug detection, PR reviews, documentation, and coverage analysis using advanced embedding models. Key tools include Qodo Gen for code/test creation, Qodo Merge for smart PR walkthroughs, and Qodo Cover for precise metrics—learning your repo's rules automatically to reduce noise and catch 5+ bugs/developer monthly. Trusted by NVIDIA for enterprise-scale mono-repos; outperforms rivals on F1-score benchmarks. Free tier available; paid for teams—ideal for writing confident, high-quality code faster without manual toil.`,
    link: `https://www.qodo.ai/`,
    image: `images/qodo_ai.png`
  },
  {
    id: 134,
    name: `Replit AI`,
    description: `Replit is a browser-based coding platform with powerful AI features that lets anyone build, collaborate on, and deploy apps instantly without setup. Its standout Replit Agent turns natural language prompts into full apps—handling code generation, dependencies, databases, and deployment in minutes across 50+ languages like Python, JavaScript, and HTML/CSS. Ghostwriter provides smart autocomplete and chat-based editing/debugging, while multiplayer real-time collaboration works like Google Docs for teams. One-click hosting includes custom domains; supports mobile app creation too. Perfect for prototyping, learning, education, and rapid MVPs—no local installs needed. Free core features; AI Pro plans around \$20/month unlock unlimited Agent uses and advanced models.`,
    link: `https://replit.com/ai`,
    image: `images/replit_ai.png`
  },
  {
    id: 135,
    name: `Tabnine`,
    description: `Tabnine is a privacy-focused AI coding assistant that delivers context-aware code completions, whole-line suggestions, and full functions directly in your IDE like VS Code, JetBrains, and Eclipse. It uses proprietary models trained only on open-source code for secure, accurate predictions across 80+ languages including Python, JavaScript, Java, Rust, and C++. Standout features include in-editor chat with switchable LLMs (GPT-4o, Claude 3.5), repo-connected RAG for codebase understanding, onboarding agents, test/doc generation, refactoring, and local/VPC deployment with zero data retention. Unlike cloud-heavy rivals, it prioritizes IP protection and customizable rules. Free starter plan; Pro/Enterprise from \$12/month—ideal for devs/teams seeking fast, secure productivity without code leakage.`,
    link: `https://www.tabnine.com/`,
    image: `images/tabnine.png`
  },
  {
    id: 136,
    name: `Friday AI`,
    description: `Friday AI (codewithfriday.com) is an AI-powered coding agent designed as a collaborative developer companion that automates pull requests from start to finish. You describe tasks in natural language, and it analyzes your codebase, crafts detailed plans with clarifying questions, edits files directly on your local branch, and opens ready-to-review PRs on GitHub. Unlike basic autocomplete tools, it mimics senior engineer workflows—replicating existing patterns, handling multi-file changes, and integrating with your git flow. Test changes locally before merging; supports complex refactors, new features, and bug fixes across languages. Privacy-focused for local runs; boosts productivity for solo devs and teams by handling repetitive tasks. Free open-source core with premium options—ideal for accelerating project velocity without context-switching.`,
    link: `https://www.codewithfriday.com/`,
    image: `images/friday_ai.png`
  },
  {
    id: 137,
    name: `CodeMaestro AI (Maestro)`,
    description: `Maestro AI from CodeMaestro is an intelligent coding companion that translates natural language into code changes, completions, and optimizations to accelerate development. Chat with the bot to generate code for new features, fix bugs, or refactor— it understands context and executes tasks like linting, style checks, and container management automatically. Key strengths include conversational workflows for Python/JavaScript (extensible), secure sandbox environments for testing repos/dependencies/shell commands, and continuous learning of your coding style for personalized suggestions. No manual editing needed; it handles the heavy lifting while you focus on logic. Ideal for speeding up cycles and building higher-quality software solo or in teams—privacy-focused with open extensibility.​`,
    link: `https://www.code-maestro.com/`,
    image: `images/codemaestro_ai_maestro.png`
  },
  {
    id: 138,
    name: `Shortwave`,
    description: `Shortwave is an AI-powered email client that automates inbox management and boosts productivity for professionals handling high-volume email. Built by ex-Google engineers, it features a smart AI assistant that searches your emails, calendar, and history to answer questions like "What progress on Project X?" or "Schedule meeting with stakeholders Friday." It auto-generates personalized replies in your writing style using Ghostwriter, summarizes threads, translates, extracts action items, and handles multi-step tasks like finding feedback and analyzing progress. Custom AI filters label/archive/snooze based on plain English rules; supports shared inboxes, link tracking, and mobile/desktop apps. Free tier available; Pro plans for teams with advanced automations—turns chaotic email into organized workflows effortlessly.`,
    link: `https://www.shortwave.com/`,
    image: `images/shortwave.jpg`
  },
  {
    id: 139,
    name: `Superhuman`,
    description: `Superhuman is a premium AI-powered email client built for speed and productivity, designed for executives and high-volume users to process inboxes twice as fast. Its AI features include Instant Reply for auto-generated draft responses in your writing style, Auto Summarize for one-line thread overviews that update live, Ask AI to query your email history (e.g., "budget discussions"), and Auto Archive/Labels to declutter marketing pitches automatically using simple prompts. Keyboard shortcuts, split inbox, read receipts, snippets, and follow-up reminders complete the workflow. Supports Gmail/Outlook; mobile/desktop apps available. Users save ~4 hours/week. Invite-only with 30-day free trial; \$30/month after—worth it for pros who live in email.`,
    link: `https://superhuman.com/`,
    image: `images/superhuman.png`
  }
];
