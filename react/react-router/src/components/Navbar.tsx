import { NavLink } from "react-router"

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>&nbsp;|&nbsp;
      <NavLink to="/second">Second</NavLink>
    </nav>
  )
}

export default Navbar