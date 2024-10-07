import { NavLink, Link } from "react-router-dom";

import logoImage from "/images/logo.jpg";

function MainNavigation() {
  return (
    <header className="bg-slate-200">
      {/* bg-slate-100 */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-0">
        <Link className="pr-2" to="/">
          <img src={logoImage} alt="main header logo" />
        </Link>
        <nav className="hidden md:block">
          <ul className="text-md flex space-x-3 md:text-lg lg:space-x-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogovi">Naslovi</NavLink>
            </li>
            <li>
              <NavLink to="/onama">O nama</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center md:hidden">
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
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
