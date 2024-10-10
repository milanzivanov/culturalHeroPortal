import { useContext } from "react";
import { MenuToggleContext } from "../context/MenuToggleContext";

import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import MobileNavigation from "../components/MobileNavigation";

function RootLayout() {
  const { menuToggle, toggleMenu, handleLinkClick } =
    useContext(MenuToggleContext);

  return (
    <>
      <MainNavigation />
      <main className="relative">
        <MobileNavigation
          menuToggle={menuToggle}
          toggleMenu={toggleMenu}
          handleLinkClick={handleLinkClick}
        />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
