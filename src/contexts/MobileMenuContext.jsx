import { createContext } from "react";
import { useMobileMenu } from "../hooks/useMobileMenu";

export const MobileMenuContext = createContext();

export const MobileMenuContextProvider = ({ children }) => {
    
  const { menu, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <MobileMenuContext.Provider
      value={{ menu, toggle: toggleMenu, close: closeMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
