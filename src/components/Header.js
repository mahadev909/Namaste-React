import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

/* eslint-disable jsx-a11y/alt-text */
const Header = () => {
  const storedData = useSelector((state) => state.cart.Items);
  console.log("stored", storedData);
  const onlineStatus = useOnlineStatus();
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-50 shadow-xl mb-2 h-30">
      <div className="logo">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4 ">
          <li className="px-4">OnlineStatus {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - {storedData.length}</Link>
          </li>
          <button
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
