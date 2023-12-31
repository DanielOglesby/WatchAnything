import { supabase } from "../../lib/supabase";

  export async function load() {
    const { data } = await supabase.from("profiles").select();
    return {
      profiles: data ?? [],
    };
  }