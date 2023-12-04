import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/alt-text */
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>Cart</li>
          <button
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
            className="login-btn"
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
