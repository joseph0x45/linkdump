<script lang="ts" >
    import { navigate } from "svelte-routing"
</script>

<main>
    <button on:click={()=>{ navigate("/auth") }} >
        Auth
    </button>
</main>