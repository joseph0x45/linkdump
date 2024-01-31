import { useState } from "react"

function AuthPage() {
  const [loading, setLoading] = useState(false)

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col gap-5 p-8 border rounded-md w-auto ">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your username</span>
          </div>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your password</span>
          </div>
          <input type="password" className="input input-bordered w-full max-w-xs" />
        </label>
        <button onClick={() => { setLoading(!loading) }} role="button" className={`btn ${loading ? "btn-disabled" : ""}`}>
          {loading && <span className="loading loading-spinner"></span>}
          <h1>Register</h1>
        </button>
      </div>
    </main>
  )
}

export default AuthPage
