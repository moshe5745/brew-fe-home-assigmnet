<script lang="ts">
  import TopBar from "./lib/TopBar.svelte";
  import { menuOpt, userSelections } from "../../stores/top_bar";
import ListData from "./lib/ListData.svelte";
import Graph from "./lib/Graph.svelte";
</script>

<TopBar menuOpt={$menuOpt} userSelections={$userSelections} />
<div class="data-section">
  <ListData />
  <Graph />
</div>

<style>
  .data-section {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
</style>