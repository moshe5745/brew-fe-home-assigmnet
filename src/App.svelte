<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
import PrivateRoute from "./lib/PrivateRoute.svelte";
  import Home from "./routes/Home.svelte";
  import Login from "./routes/Login.svelte";

</script>

<Router>
  <header>
    <h1>BREW</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="login">Login</Link>
    </nav>
  </header>

  <main>
    <Route path="login">
      <Login />
    </Route>

    <PrivateRoute path="/" let:location>
      <Home />
    </PrivateRoute>
  </main>
</Router>

<style>

</style>