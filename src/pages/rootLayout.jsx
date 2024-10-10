import { useContext } from "react";
import { MenuToggleContext } from "../context/MenuToggleContext";

import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import MobileNavigation from "../components/MobileNavigation";
import Loader from "../components/Loader";

function RootLayout() {
  const { menuToggle, toggleMenu, handleLinkClick } =
    useContext(MenuToggleContext);

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <MainNavigation />
      <main className="relative">
        {isLoading && <Loader />}
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
