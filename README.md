# Abhishek's Portfolio 🎨

A playful, real-time developer portfolio with:

- 🤖 **"Ask my AI" chatbot** — speaks in first person as you, streams answers (Groq + Llama 3.3), grounded only in your real info.
- 👀 **Live presence** — "X viewing now" + floating emoji reactions, over WebSockets (Supabase Realtime).
- ✨ Sticker-style playful design, light/dark themes, fully accessible, self-hosted fonts.

**Stack:** React + Vite · Vercel (site + AI edge function) · Supabase Realtime (presence) · Groq (LLM).

---

## 1. Make it yours

Edit **one file**: [`src/data/content.js`](src/data/content.js). It powers both the page *and* the chatbot's knowledge. Replace name, blurb, projects, skills, timeline, socials, and the `aiKnowledge` block.

Drop your `resume.pdf` into `public/` to wire up the Resume button.

## 2. Run locally

```bash
npm install
npm run dev          # site at http://localhost:5173
```

The site works immediately. The **AI chat** and **live presence** need two free services:

### AI chat (Groq) — secret key, server-side
1. Get a free key: https://console.groq.com/keys
2. `cp .env.example .env.local` and set `GROQ_API_KEY=...`
3. `/api/chat` runs automatically on Vercel. To test the API locally, use `vercel dev` instead of `npm run dev` (plain Vite doesn't run the `/api` function).

### Live presence (Supabase Realtime) — public keys, browser-safe
1. Create a free project at https://supabase.com
2. Project → **Settings → API**, copy the **Project URL** and the **anon public** key.
3. Put them in `.env.local`:
   ```
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJ...
   ```
4. Restart `npm run dev`. Realtime works with zero server code — presence + broadcast
   run entirely against Supabase's WebSocket. (The anon key is designed to be public,
   protected by Row Level Security — unlike the Groq key, which is a true secret.)

## 3. Deploy the site (free, Vercel)

Push to GitHub, then import the repo at https://vercel.com/new. In the Vercel project →
**Settings → Environment Variables**, add all three:

| Name | Value | Exposed to browser? |
|------|-------|---------------------|
| `GROQ_API_KEY` | your Groq key | ❌ No — server-side only |
| `VITE_SUPABASE_URL` | `https://xxxx.supabase.co` | ✅ Yes (public, fine) |
| `VITE_SUPABASE_ANON_KEY` | `eyJ...` | ✅ Yes (public, fine) |

Deploy. You're live at `https://<project>.vercel.app`, and every `git push` auto-deploys.

---

## Interview talk-track cheat sheet 🎤

**AI chat**
- Why SSE streaming (not WebSockets) for a one-shot request → streamed response.
- Context-stuffing vs. RAG: for a tiny corpus I inject the full knowledge into the
  system prompt — no vector DB needed. I can explain *when* embeddings become worth it.
- Guardrails: the server owns the system prompt (client can't hijack the key as a free LLM),
  plus history/length/token caps and topic-locking.
- The Groq key stays server-side in an edge function; the browser only calls my own `/api/chat`.

**Live presence (WebSockets, Supabase Realtime)**
- Two primitives: **Presence** (CRDT-backed sync of who's connected → the live count) and
  **Broadcast** (fan-out messages → shared reactions). Both ride one WebSocket.
- Why the anon key is safe in the frontend (RLS) vs. why the Groq key is not.
- Client-side reaction cooldown; `eventsPerSecond` throttle on the socket.
- Managed vs. self-hosted tradeoff: I chose a managed realtime layer over running my own
  WebSocket server / Durable Objects — less ops, and it scales fan-out for me.
- Extension idea: live cursors → then talk send-throttling + client-side interpolation (lerp).
