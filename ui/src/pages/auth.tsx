import { useState } from "react"

function AuthPage() {
  const [action, setAction] = useState("Login")
  const [loading, setLoading] = useState(false)

  function switchAction() {
    setAction(action => action == "Login" ? "Register" : "Login")
  }
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col gap-5 shadow-xl">
        <input type="text" placeholder="Your username" autoComplete="off" className="input input-bordered w-full max-w-xs" />
        <input type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs" />
        <button onClick={() => { setLoading(!loading) }} role="button" className={`btn btn-wide ${loading ? "btn-disabled" : ""}`}>
          {loading && <span className="loading loading-spinner"></span>}
          {action}
        </button>
        <button onClick={switchAction} className="btn btn-link">{action == "Login" ? "Register instead" : "Login instead"}</button>
      </div>
    </main>
  )
}

export default AuthPage
