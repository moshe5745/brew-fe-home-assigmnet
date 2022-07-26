<script lang="ts">
  import { Router } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
</script>

<Router>
  <main>
    <Home />
  </main>
</Router>

<style>
  :global(#app) {
    width: 100%;
    margin: unset;
    padding: unset;
    max-width: unset;
  }
  
  
</style>