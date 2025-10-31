import { NavLink } from "react-router";
import logo from "../assets/Navbar/logo.png";
import search from "../assets/Navbar/search.png";
import accountImg from "../assets/Navbar/account.png";
import notificationImg from "../assets/Navbar/notification.png";
import cartImg from "../assets/Navbar/cart.png";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogIn() {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <header className="flex items-center justify-between px-12 py-4 bg-white shadow-md">
      <div>
        <img src={logo} alt="Furniro" />
      </div>

      <nav className="flex gap-20 items-center">
        <NavLink to="">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      <div className="flex gap-10 items-center">
        <button>
          <img src={search} alt="Search" />
        </button>
        <button onClick={handleLogIn}>
          <img src={accountImg} alt="Account" />
        </button>
        {isLoggedIn && (
          <button>
            <img src={notificationImg} alt="Notification" />
          </button>
        )}
        {isLoggedIn && (
          <button>
            <img src={cartImg} alt="Cart" />
          </button>
        )}
      </div>
    </header>
  );
}
