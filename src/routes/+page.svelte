<script lang="ts">
    import LoginScreen from "../components/LoginScreen.svelte";
    import { currentUser } from "../lib/supabase";
    import UserScreen from "../components/UserScreen.svelte";
    import supabase from "../lib/supabase";

    console.log(supabase);
  </script>
  
  {#if !$currentUser}
    <LoginScreen />
  {:else}
    <UserScreen />
  {/if}