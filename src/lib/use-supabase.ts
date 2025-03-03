import { useMemo } from "react";
import { getSupabaseBrowserClient } from "./supabaseClient";

function useSupabase() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabase;
