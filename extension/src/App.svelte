<script>
  import { Route, Router } from "svelte-routing"
  import Index from "./pages/index.svelte";
  import Auth from "./pages/auth.svelte";
</script>

<Router >
  <Route component={Index}/>
  <Route component={Auth} path="/auth"/>
</Router>