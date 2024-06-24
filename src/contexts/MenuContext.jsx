import { createContext } from "react";
import { useNavbarMenu, useAsideMenu } from "../hooks/useMenu";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const { nav, toggleNavbar, openNavbar, closeNavbar } = useNavbarMenu();
  const { aside, toggleAside, openAside, closeAside } = useAsideMenu();

  return (
    <MenuContext.Provider
      value={{
        navbarMenu: {
          nav,
          toggleNavbar,
          openNavbar,
          closeNavbar,
        },
        asideMenu: {
          aside,
          toggleAside,
          openAside,
          closeAside,
        },
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};