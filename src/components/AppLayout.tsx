import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import './AppLayout.css'

function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-layout__main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout