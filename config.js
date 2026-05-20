// config.js
const SUPABASE_URL = 'https://txvgclavcmhyxamxgvsi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4dmdjbGF2Y21oeXhhbXhndnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1MzEyMDgsImV4cCI6MjA5MzEwNzIwOH0.oq3lH7_mRR-TIUV0sW8EtbYqS2SjmKOzneSrV3n45mY';

// Hindari deklarasi ganda
if (typeof window.supabaseClient === 'undefined') {
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

const sb = window.supabaseClient;
