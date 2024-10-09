import { NavLink } from "react-router-dom";

function MobileNavigation() {
  return (
    <div className="absolute inset-0 z-20 hidden bg-slate-700 text-white">
      <nav className="relative flex h-full w-full items-center justify-center">
        <ul className="flex flex-col space-y-5 text-lg">
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
  );
}

export default MobileNavigation;
