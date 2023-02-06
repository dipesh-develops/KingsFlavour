import logo from "../assets/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isonline = useOnline();
  const { user } = useContext(userContext);
  // console.log(user);

  return (
    <div className="h-28 p-2 flex items-center justify-between bg-[#F8F9F9] text-lg">
      <img src={logo} className="h-full " />
      {/* <p>Logo</p> */}
      {/* <img src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" /> */}
      <ul className="flex space-x-20">
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <Link to={"/about"}>
          <li>About</li>
        </Link>

        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link to={"/instamart"}>
          <li>Instamart</li>
        </Link>
        <li className="">Cart</li>
      </ul>
      <h1>{isonline ? "🟢" : "🔴"}</h1>
      <p className="text-green-600">{user.name}</p>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button
          className="bg-[#333333] text-white w-28 h-9 rounded-md hover:bg-slate-600"
          onClick={() => setIsLoggedIn(true)}
        >
          <FaUserAlt className="relative inline mr-2 -top-1" />
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
