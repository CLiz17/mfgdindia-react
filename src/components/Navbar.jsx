import React from "react";
import { NavLink } from "react-router-dom";

//CSS
import styles from "./styles/Navbar.module.css";

//Image
import Logo from "../assets/logo.png";
import { ReactComponent as ReactLogo } from "../assets/login.svg";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <span>Categories</span>
          <span>Manufactures & Customers</span>
        </div>
        <ul>
          <NavLink to="/products" activeStyle={{ color: "orange" }}>
            Products
          </NavLink>
          <NavLink to="/about" activeStyle={{ color: "orange" }}>
            About
          </NavLink>
          <NavLink to="/blog-news" activeStyle={{ color: "orange" }}>
            Blog & News
          </NavLink>
          <NavLink to="/faq" activeStyle={{ color: "orange" }}>
            FAQ
          </NavLink>
        </ul>
      </div>
      <div className={styles.right}>
        <ReactLogo width="50px" height="40px" />
        <div>
          <p> Sign In</p>
          <p> Register </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
