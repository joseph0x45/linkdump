<script>
    import { navigate } from "svelte-routing"
    // import { onMount } from "svelte";
    // import { ping } from "../lib"
        
    // let browser_online
    // onMount( async ()=>{
    //     browser_online = await ping()
    // })
</script>

<main class=" h-screen w-full flex flex-col items-center justify-center" >
    <button class=" btn-v2" on:click={()=>{ navigate("/auth") }} >
        click me mf
    </button>
</main>