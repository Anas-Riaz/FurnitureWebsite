import { NavLink } from "react-router";
import logo from "../assets/Navbar/logo.png";
import search from "../assets/Navbar/search.png";
import accountImg from "../assets/Navbar/account.png";
import notificationImg from "../assets/Navbar/notification.png";
import cartImg from "../assets/Navbar/cart.png";
import menuIcon from "../assets/Navbar/menu.png"; // Add a menu icon image
import closeIcon from "../assets/Navbar/close.png"; // Add a close icon image
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogIn() {
    setIsLoggedIn((prev) => !prev);
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between px-6 md:px-12 py-4">
      <div>
        <img src={logo} alt="Furniro" className="w-28 md:w-32" />
      </div>

      <nav className="hidden md:hidden lg:flex gap-20 items-center font-medium text-gray-700">
        <NavLink to="">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      <div className="flex gap-6 md:gap-10 items-center">
        <button>
          <img src={search} alt="Search" className="w-5 md:w-6" />
        </button>
        {isLoggedIn && (
          <>
            <button>
              <img
                src={notificationImg}
                alt="Notification"
                className="w-5 md:w-6"
              />
            </button>
            <button>
              <img src={cartImg} alt="Cart" className="w-5 md:w-6" />
            </button>
          </>
        )}

        <button onClick={handleLogIn}>
          <img src={accountImg} alt="Account" className="w-5 md:w-6" />
        </button>

        {/* Hamburger Menu Button - Visible on Small Screens */}
        <button
          onClick={toggleMenu}
          className="block md:block lg:hidden focus:outline-none"
        >
          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt="Menu"
            className="w-6"
          />
        </button>
      </div>

      {/* Mobile Menu Popup */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 z-10 lg:hidden animate-fadeIn">
          <NavLink to="" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="shop" onClick={() => setMenuOpen(false)}>
            Shop
          </NavLink>
          <NavLink to="blog" onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
