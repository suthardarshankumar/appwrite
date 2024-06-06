import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./features/authSlice"
import { Footer, Header } from "./components/index"
import { Outlet } from "react-router-dom"

const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      <div className="w-screen min-h-screen flex flex-wrap content-between bg-slate-400">
        <div className="w-full block">
          <Header />
          <main>
            TODO: {/* <Outlet/> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : null
}

export default App