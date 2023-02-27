<script  >
    import axios from "axios"
    let api_url = ""
    let email_or_username = ""
    let password = ""
    let username = ""
    let action = "Register" 
    let alt = "Login"
    let loading = false
    function authenticate(){
        loading = true
    }
    function switch_action(){
        if(action==="Login"){
            action="Register"
            alt="Login"
            return
        }
        action="Login"
        alt="Register"
    }
</script>

<main class="  flex flex-col items-center justify-center h-screen" >
    <form class="flex flex-col gap-3" on:submit|preventDefault={authenticate} >
        <input bind:value={email_or_username} class=" focus:outline-none p-2 rounded-md text-slate-500 border-[2px] w-64 " required type="text" placeholder={`Email ${action==="Login"?"or username":""}`}>
        <input bind:value={username} hidden={action==="Login"} class=" focus:outline-none p-2 rounded-md text-slate-500 w-64 border-[2px]" required type="text" placeholder="Username">
        <input bind:value={password} class=" focus:outline-none p-2 rounded-md text-slate-500 w-64 border-[2px]" type="password" required placeholder="Password">
        <button type="submit" class=" rounded-md border-white text-white bg-slate-700 p-2 flex justify-center" >
            {#if !loading}
                <h1>
                    {action}
                </h1>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 animate-spin">
                    <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
                </svg>
            {/if}
        </button>
        <button type="button" class=" underline" on:click={switch_action}>
            <h1>
                {alt} instead
            </h1>
        </button>
    </form>
</main>