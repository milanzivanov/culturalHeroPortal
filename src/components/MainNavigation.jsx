import { NavLink, Link } from "react-router-dom";

import logoImage from "/images/kulturniHerojTempLogo.jpg";

function MainNavigation() {
  return (
    <header className="bg-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-0">
        <Link className="pr-2" to="/">
          <img src={logoImage} alt="main header logo" />
        </Link>
        <nav>
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
      </div>
    </header>
  );
}

export default MainNavigation;
