import React from "react"
import Logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">links</div>
      </div>
    </div>
  )
}

export default Navbar
