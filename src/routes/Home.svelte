<script lang="ts">
    import { Link,Route } from "svelte-navigator";
    import { user } from "../stores/user";
    import Login from "./auth/Login.svelte";
    import User from "./auth/User.svelte";
    import Nav1 from "./home/Nav1.svelte";
    import Nav2 from "./home/Nav2.svelte";
    import Nav3 from "./home/Nav3.svelte";
    import Wireframe from "./home/Wireframe.svelte";
    import PrivateRoute from "./lib/PrivateRoute.svelte";
</script>

<header>
    {#if $user}
        <nav>
            <Link to="">Wireframe</Link>
            <Link to="nav_1">Nav 1</Link>
            <Link to="nav_2">Nav 2</Link>
            <Link to="nav_3">Nav 3</Link>
        </nav>
        <User />
    {/if}
</header>

<main>
    <Route path="/login">
        <Login />
    </Route>
    <PrivateRoute path="" let:location>
        <Wireframe />
    </PrivateRoute>
    <PrivateRoute path="nav_1" let:location>
        <Nav1 />
    </PrivateRoute>
    <PrivateRoute path="nav_2" let:location>
        <Nav2 />
    </PrivateRoute>
    <PrivateRoute path="nav_3" let:location>
        <Nav3 />
    </PrivateRoute>
</main>

<style>
    header {
        margin: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    main {
        margin: 0 20px;
        height: 100vh;
    }
</style>
