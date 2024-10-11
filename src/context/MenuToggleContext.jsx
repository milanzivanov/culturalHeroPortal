/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MenuToggleContext = createContext();

// Context provider component
export const MenuToggleProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((menuToggle) => !menuToggle);
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <MenuToggleContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, toggleMenu, handleLinkClick }}
    >
      {children}
    </MenuToggleContext.Provider>
  );
};
