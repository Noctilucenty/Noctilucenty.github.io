# Leon Kelvin Li — Developer Portfolio

**Software Engineer · Full-Stack Developer · Product Builder**

[leonbuilds.org](https://leonbuilds.org) · [leondragon3798@gmail.com](mailto:leondragon3798@gmail.com) · Hayward, CA · 510-826-7735

---

Computer Engineering student at Cal State East Bay. I build complete products solo — mobile apps, backend systems, AI agents, and the automation around them.

---

## Featured

### Curio — 2026 – Present

A full-screen swipe feed of short, source-backed knowledge cards, with an AI layer that opens any card up. Built and shipped solo on iOS.

- Launched on the US App Store on 22 July 2026; 72k lines of TypeScript across 289 files, 413 commits, in about six weeks
- AI content engine: card generation, quality filtering, factual-risk screening, translation, and continuous replacement of weaker cards
- Curio AI, an in-app companion that explains concepts, answers follow-ups and generates quizzes, hardened against hallucination with retrieval grounding
- Six reading experiences: eye-protection mode, immersive soundtracks, read-aloud, translation-based language learning, branching scenarios, community stories
- The last CI step reintroduces six defects that had already shipped through a green suite and fails the build unless the guard covering each one turns red

**Stack:** React · TypeScript · Vite · Capacitor 8 · Tailwind · Node.js · PostgreSQL · OpenAI · Claude API · ElevenLabs · RevenueCat

[App Store](https://apps.apple.com/app/id6781121127) · [trycurio.app](https://trycurio.app)

---

### ATLAS — 2026

A walk-forward ML pipeline for short-horizon FX binary-option prediction across 28 currency pairs. The model is the small part; the point is the harness around it, built to destroy its own results first.

- A pre-registered 2003–2015 holdout cut the headline result from 79% to about 57%. The 57% is what is recorded
- Calibrated LightGBM plus an expected-value gate against the live payout, so a worse payout demands more conviction
- Meta-labeling filter on trade context; the system abstains most of the time, roughly 6 signals a day
- Purged walk-forward, cross-asset trade clustering, decade-scale replication, Bonferroni correction, 154-trial deflation penalty on every statistic
- Rejected levers are written down as rejected so they are never quietly retried
- MCP server so Claude can read the broker and place demo trades. No validated live edge yet; the forward test is pre-registered and running

**Stack:** Python · LightGBM · scikit-learn · pandas · NumPy · MCP

[GitHub](https://github.com/Noctilucenty/ATLAS) — public repo, no licence

---

## Shipped and running in production

### The Home Screen — Client work · 2026 – Present
An ordering app that behaves like an iPhone home screen. Every icon is a ghost kitchen, one cart spans all of them, one checkout pays them all. Live and taking real orders. Nothing is invented — no made-up menu item, price, hour or photo, and anything estimated is flagged wherever the price appears.
**Stack:** TypeScript · React · Node.js · Express · Render — [Live](https://the-home-screen.onrender.com)

### ALLCPR — iOS App — GOSVEA Inc · 2026 – Present
Sole developer of ALLCPR, the company's iOS app for CPR, BLS and first-aid students. Rebuilt as an editable five-tab React codebase with a native in-app form system, on Capacitor 8 over Swift Package Manager. Ships through TestFlight.
**Stack:** React · TypeScript · Vite · Tailwind · Capacitor 8 · Swift/SPM

### ALLCPR Site Intelligence — GOSVEA Inc · 2026
Decides where to open the next training center. Scores 33,772 US ZIP codes on demand, competition and demographics, with the evidence behind every score. The validation harness found the previous version's evidence was circular, and that is in the README. 1,300+ tests.
**Stack:** Python · FastAPI · PostgreSQL · Leaflet · Census ACS · Google Places — [Live](https://allcpr-site-intelligence.onrender.com)

### Curio Automation Platform — 2026 – Present
The content and distribution machine behind Curio: an autonomous video pipeline with audit gates that reject a run rather than ship it, a painted image-post engine that typesets text in code so translation is free, and a publisher split across a Render queue and a local worker so credentials never leave the machine.
**Stack:** Python · FFmpeg · Pillow · FastAPI · launchd · ElevenLabs · Graph API — [YouTube](https://www.youtube.com/@trycurio)

### Continuity — 2026
A persistent memory layer for AI work. When one session ends, expires or runs out of context, the next resumes from a written checkpoint. Local-first, no LLM required.
**Stack:** TypeScript · Node.js · CLI · GitHub Actions — [GitHub](https://github.com/Noctilucenty/Continuity)

### Scenara — Oct 2025 – Apr 2026
A bilingual prediction-market simulation platform targeting Brazil. Trading engine, AI market generation from breaking news every two hours, KYC onboarding, 9 production REST endpoints, full CI/CD across Vercel and Render. Wound down in April 2026 — prediction markets remain tightly regulated in the markets it targeted, so I stopped rather than keep building toward a launch that could not happen.
**Stack:** React Native · Expo · TypeScript · FastAPI · PostgreSQL · Vercel · Render — [Live](https://scenara.vercel.app)

---

## Agents and internal tools

### ALLCPR Student Help Agent — GOSVEA Inc · 2026 – Present
Student-facing help agent built from the CRM manual, the Smart Manikin manual and the operations log, in English and Chinese. Runs with no AI API key by design: lexical retrieval over pre-written answers, ~7ms round trip, $0/month. The 911 redirect lives in code upstream of retrieval, because a rule only a model reads does not exist when there is no model.
**Stack:** Node.js · JavaScript · Express · Render — [Live](https://allcpr-user-agent.onrender.com)

### 明途 — Gut Health Advisor — 2026
Chinese-language RAG agent for gut-microbiome questions. Grades evidence by how much it can be trusted and decides when to say see a doctor. A deterministic safety screen runs first, with no model in the path. Every claim carries a source number, and an exit check rejects text making health claims banned under Chinese advertising and food-safety law.
**Stack:** Python · FastAPI · RAG · BM25 · Render — [Live](https://mingtu-gut-agent.onrender.com)

### ALLCPR Site Operations Agent — GOSVEA Inc · 2026
Bilingual staff tool for Smart Manikin training sites: inspections, incident triage, onboarding, and the SOP knowledge base. Deterministic answer engine with an optional model summary layer, so the answer does not change when the API key does.
**Stack:** Python · FastAPI · OpenAI · Render — [Live](https://allcpr-agent-7bt0.onrender.com)

### Yelp Review Desk — GOSVEA Inc · 2026
Classifies new Yelp reviews and drafts fact-grounded replies for a human to approve. It never posts — Yelp has no reply API and automating the portal risks the listing, so the flow stops at copy-and-open. The Gmail credential is draft-only.
**Stack:** Python · FastAPI · Gmail API · Slack · Chrome Extension — [GitHub](https://github.com/Noctilucenty/Yelp-Automated-Review-Desk)

### ONPECY AI Lab — 3D Proposal — Client work · 2026
A lab renovation proposal delivered as an interactive 3D page: LiDAR scan of the real room against the renovated model on the same camera. Every object maps to one purchase line. A layout audit script measures clearances and prints the clash list so the drawing can be checked.
**Stack:** Python · Blender · three.js · glTF · LiDAR — [Live](https://onpecy-lab.onrender.com)

---

## Sites and smaller builds

- **FLORES Boxing Gloves** — brand site for a Bay Area maker of hand-stitched leather gloves, in business since the 1920s. Static, no build step. [Live](https://flores-boxing-gloves-u81a.onrender.com)
- **安安 — WeChat Sticker Pack** — 24 stickers for ALLCPR's Chinese-speaking students, captions typeset in code so the second language cost nothing. [Live](https://allcpr-stickers.onrender.com)
- **Noctilucente** — site for my own music, an EP page under an animated night sky. No backdrop-filter anywhere; it destroyed the frame rate on mobile. [Live](https://noctilucente-nx1i.onrender.com)
- **Services Site** — my own services page, every service with a starting price next to it. [Live](https://leonkelvinli.onrender.com)

---

## Earlier work

- **ExpertFlow** · 2025 — AI expert-network CRM with a matching engine, dialer, call summarizer and RBAC. Zero-dependency single-file SPA. [GitHub](https://github.com/Noctilucenty/ExpertFlow)
- **Orryin Investment** · 2024 — investing platform for people outside the US, using their own country's ID instead of an SSN. Stopped on the regulatory documentation burden. [GitHub](https://github.com/Noctilucenty/orryin-backend-FORMER-SCENARA)
- **MIDAS** · 2024 — research trading system for market data processing, strategy prototyping and historical backtesting. [GitHub](https://github.com/Noctilucenty/MIDAS)
- **AIngle** · 2024 — full-stack experimental platform for AI-assisted image analysis. [GitHub](https://github.com/Noctilucenty/AIngle)
- **catnap** · 2024 — AI phone and SMS intake for small businesses. [GitHub](https://github.com/Noctilucenty/catnap)
- **GX-Ambient** · 2023 — browser extension bringing Opera GX's ambient audio to Chromium. [GitHub](https://github.com/Noctilucenty/GX-Ambient)
- **Freelance builds and Max4Live devices** · 2023–2026 — small business sites, web automation, internal tooling, custom Max4Live MIDI devices for Ableton Live, and LED strip control over MIDI on Teensy

---

## Experience

**Founder** — Curio, self-employed, SF Bay Area *(Jun 2026 – Present)*
**AI Agent & Web Development** — University of San Jose, part-time *(Apr 2026 – Present)*
**Founder & Sole Engineer** — Scenara, self-employed *(Oct 2025 – Apr 2026)*
**Robotics Development Intern** — GTSP Special Projects Group, Santa Clara CA *(May 2025 – Apr 2026)*
**Founder & President, Coding Club** — Green River College *(May 2022 – Apr 2024)*

---

## Education

**B.S. Computer Engineering** — California State University, East Bay *(expected May 2027)*
**A.S. Computer Engineering** — Green River College *(2022–2024)*

---

## Languages

English · 中文 · Português · Español

---

## Stack

Python · TypeScript · React · React Native · FastAPI · Node.js · PostgreSQL · Capacitor · Rust · C++ · Blender · three.js · Vercel · Render · GitHub Actions
