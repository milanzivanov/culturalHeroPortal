/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function MobileNavigation({ isMenuOpen, handleLinkClick, toggleMenu }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const menuElement = menuRef.current;
    const handleClickOnMenu = (event) => {
      if (menuElement && menuElement.contains(event.target)) {
        // Close the menu on click inside the navigation menu
        toggleMenu();
      }
    };

    menuElement.addEventListener("click", handleClickOnMenu);
    return () => {
      menuElement.removeEventListener("click", handleClickOnMenu);
    };
  }, [toggleMenu]);

  return (
    <div
      className={`fixed z-20 h-full w-full bg-slate-700 text-white ${isMenuOpen ? "block" : "hidden"}`}
    >
      <nav
        className="relative flex h-[calc(100dvh-80px)] items-center justify-center"
        ref={menuRef}
      >
        <ul className="flex flex-col space-y-7 text-2xl">
          <li onClick={handleLinkClick}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={handleLinkClick}>
            <NavLink to="/blogovi">Naslovi</NavLink>
          </li>
          <li onClick={handleLinkClick}>
            <NavLink to="/onama">O nama</NavLink>
          </li>
          <li onClick={handleLinkClick}>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </li>
          <li onClick={handleLinkClick}>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavigation;
