/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function MobileNavigation({ menuToggle, handleLinkClick }) {
  return (
    <div
      className={`fixed z-20 h-full w-full bg-slate-700 text-white ${menuToggle ? "block" : "hidden"}`}
    >
      <nav className="relative flex h-[calc(100dvh-80px)] items-center justify-center">
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
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavigation;
