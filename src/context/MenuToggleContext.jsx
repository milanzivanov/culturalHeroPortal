/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MenuToggleContext = createContext();

// Context provider component
export const MenuToggleProvider = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenu() {
    setMenuToggle((menuToggle) => !menuToggle);
  }

  const handleLinkClick = () => {
    setMenuToggle(false);
  };

  return (
    <MenuToggleContext.Provider
      value={{ menuToggle, setMenuToggle, toggleMenu, handleLinkClick }}
    >
      {children}
    </MenuToggleContext.Provider>
  );
};
