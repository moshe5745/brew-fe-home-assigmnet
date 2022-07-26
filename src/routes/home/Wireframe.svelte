<script lang="ts">
  import type { IData,IDataContext } from "src/models/data";
  import { onMount,setContext } from "svelte";

  let allData: IData;

  onMount(async () => {
    const { json } = await fetch("/getAllData");
    allData = await json();

    setContext("data", {
      allData: json,
    } as IDataContext);
  });
</script>

<div class="container">
  <h1>Wireframe</h1>
</div>

<style>
  .container {
    width: 100vh;
    height: 100vh;
  }
</style>
