<script lang="ts">
    import { Link,Route } from "svelte-navigator";
    import { user } from "../stores/user";
    import Login from "./auth/Login.svelte";
    import User from "./auth/User.svelte";
    import Nav2 from "./home/Nav2.svelte";
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
        <h1>Nav 1</h1>
    </PrivateRoute>
    <PrivateRoute path="nav_2" let:location>
        <Nav2 />
    </PrivateRoute>
    <PrivateRoute path="nav_3" let:location>
        <h1>Nav 3</h1>
    </PrivateRoute>
</main>

<style>
    header {
        position: absolute;
        top: 0px;
        left: 0;
        margin: 20px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }

    main {
        width: 100%;
        height: 100%;
    }
</style>
