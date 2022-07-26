<script lang="ts">
    import type { IMenu, IUserSelections } from "src/models/menu";
    export let menuOpt: IMenu;
    export let userSelections: IUserSelections;
</script>

<div class="container">
    <div class="categories">
        {#each menuOpt.categories as categorie, index}
            <div class="categorie">
                <select value={userSelections.categoryItemIds[index]}>
                    {#each categorie.items as item, index}
                        <option value={item.id}>{categorie.name}: ({item.name})</option>
                    {/each}
                </select>
            </div>
        {/each}
    </div>
    <div class="date">
        <input
            type="date"
            name="date"
            value={userSelections.date}
        />
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
    }
    .categories {
        display: flex;
    }
    .categorie {
        margin: 0 10px;
    }
</style>
