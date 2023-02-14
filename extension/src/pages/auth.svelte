<script lang="ts" >
    let email = ""
    let password = ""
    function authenticate(){

    }
</script>

<main class="  flex flex-col items-center justify-center h-screen" >
    <form class="flex flex-col gap-3" on:submit={authenticate} >
        <input class=" focus:outline-none p-2 rounded-md text-slate-500 border-[2px] w-64 " type="email" placeholder="Your email">
        <input class=" focus:outline-none p-2 rounded-md text-slate-500 w-64 border-[2px]" type="password" placeholder="Your password">
        <button type="submit" class=" rounded-md border-white text-white bg-slate-700 p-2" >
            Authenticate
        </button>
    </form>
</main>