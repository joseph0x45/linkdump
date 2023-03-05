<script>
    import { navigate } from "svelte-routing"
    import { onMount } from "svelte";
    import { auth } from "../store";
    onMount( async ()=>{
        const user = localStorage.getItem("user") ?? ""
        if(user===""){
            auth.set({ state:false, user })
            return
        }
        auth.set({ state:true, user })
    })
</script>

<h1 class="text-white" >{ $auth.state?"Logged in":"Nah" }</h1>
<main class=" h-screen w-full flex flex-col items-center justify-center" >
    <button class=" btn-v2" on:click={()=>{ navigate("/auth") }} >
        click me mf
    </button>
</main>