import React from "react";
import logo from "../../Assest/LOGO.png";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navdiv">
        {/* Use an img tag to display the logo image */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li>
            <a href="#">Galary</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <button><a href="#"></a>Login</button>
          <button><a href="#"></a>Sign up</button>
        </ul>
       
      </div>
    </nav>
  );
};

export default Navbar;
