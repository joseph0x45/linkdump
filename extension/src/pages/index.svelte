<script>
    import { navigate } from "svelte-routing"
    import { onMount } from "svelte";
    import { ping } from "../lib"
        
    let browser_online
    onMount( async ()=>{
        browser_online = await ping()
    })
</script>

<main>
    <h1>
        {browser_online?"Browser online":"No internet bozo"}
    </h1>
</main>