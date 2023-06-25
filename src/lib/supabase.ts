import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

export const supabase = createClient(
	"https://ogjkqrcskuvpmhwljwcn.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9namtxcmNza3V2cG1od2xqd2NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2NTM2OTUsImV4cCI6MjAwMzIyOTY5NX0.Im6Hd0pyo_uwM-5n4l1R22llAyaBVde0VXKFfpog0WU"
  );

export const currentUser = writable((await supabase.auth.getUser()).data.user);

supabase.auth.onAuthStateChange(async () => {
	currentUser.set((await supabase.auth.getUser()).data.user);
});

export default supabase;
