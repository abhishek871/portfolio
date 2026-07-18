import { createClient } from '@supabase/supabase-js'

/* ----------------------------------------------------------------------------
   Supabase client for Realtime (live presence + reactions).

   Both values are PUBLIC and safe to ship to the browser:
   - VITE_SUPABASE_URL: your project URL
   - VITE_SUPABASE_ANON_KEY: the "anon" public key, protected by Row Level
     Security. It's designed to live in frontend code (unlike the Groq key,
     which is a real secret and stays server-side).

   If either is missing, we export null and the app runs in graceful
   "it's just you" offline mode.
   -------------------------------------------------------------------------- */
const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase =
  url && anon
    ? createClient(url, anon, { realtime: { params: { eventsPerSecond: 10 } } })
    : null
