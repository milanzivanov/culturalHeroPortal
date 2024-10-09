import { useContext } from "react";
import { MenuToggleContext } from "../context/MenuToggleContext";

import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import MobileNavigation from "../components/MobileNavigation";

function RootLayout() {
  const { menuToggle, toggleMenu } = useContext(MenuToggleContext);

  return (
    <>
      <MainNavigation />
      <main className="relative">
        <MobileNavigation menuToggle={menuToggle} toggleMenu={toggleMenu} />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
