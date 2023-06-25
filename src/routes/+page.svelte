<script lang="ts">
    import LoginScreen from "../components/LoginScreen.svelte";
    import { currentUser } from "../lib/supabase";
    import UserScreen from "../components/UserScreen.svelte";
  </script>
  
  {#if !$currentUser}
    <LoginScreen />
  {:else}
    <UserScreen />
  {/if}