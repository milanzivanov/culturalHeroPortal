import { useContext } from "react";
import { MenuToggleContext } from "../context/MenuToggleContext";

import { NavLink, Link } from "react-router-dom";

import logoImage from "/images/logo.jpg";

function MainNavigation() {
  const { isMenuOpen, toggleMenu, handleLinkClick } =
    useContext(MenuToggleContext);

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-5">
      <Link className="pr-2" to="/" onClick={handleLinkClick}>
        <img src={logoImage} alt="main header logo" />
      </Link>
      <nav className="hidden md:block">
        <ul className="text-md flex space-x-3 md:text-lg lg:space-x-5">
          <li className="cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/blogovi"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Naslovi
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/onama"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              O nama
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/kontakt"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className="flex cursor-pointer items-center md:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default MainNavigation;
