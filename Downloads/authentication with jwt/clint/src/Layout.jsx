
import { Link,Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
      <nav className="navbar">

        <div className="logo">

         MY - AUTH

        </div>

        <div className="nav-links">

          <Link to="/sign">Sign Up</Link>

          <Link to="/login">Login</Link>

        </div>

      </nav>

      <main>

        <Outlet />

      </main>
    </>
  )
}

export default Layout
