import { useContext } from "react";
import { MenuToggleContext } from "../context/MenuToggleContext";

import { Outlet, useNavigation } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import MobileNavigation from "../components/MobileNavigation";
import Loader from "../components/Loader";

function RootLayout() {
  const { menuToggle, toggleMenu, handleLinkClick } =
    useContext(MenuToggleContext);

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-20 w-full bg-slate-200">
        <MainHeader />
      </header>
      <main className="relative mt-[80px]">
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-slate-700/90 backdrop-blur-sm">
            <div className="flex h-full items-center justify-center">
              <Loader />
            </div>
          </div>
        )}

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
