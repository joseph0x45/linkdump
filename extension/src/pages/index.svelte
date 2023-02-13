<script lang="ts" >
    import { navigate } from "svelte-routing"
    function breuh(){
        navigate("/auth")
    }

</script>

<button on:click={breuh} >
    Hello
</button>