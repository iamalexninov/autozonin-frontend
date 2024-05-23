import { createContext } from "react";
import { useMobileMenu } from "../hooks/useMobileMenu";

export const MobileMenuContext = createContext();

export const MobileMenuContextProvider = ({ children }) => {
  const { menu, toggleMenu, openMenu, closeMenu } = useMobileMenu();

  return (
    <MobileMenuContext.Provider
      value={{ menu, toggle: toggleMenu, open: openMenu, close: closeMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
