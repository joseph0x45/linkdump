<script lang="ts" >
    import { navigate } from "svelte-routing"
    function breuh(){
        navigate("/auth")
    }

</script>

<button class=" bg-red-400 text-white" on:click={breuh} >
    Hello
</button>