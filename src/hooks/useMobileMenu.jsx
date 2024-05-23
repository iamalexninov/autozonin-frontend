import { useState } from "react";

export const useMobileMenu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return { menu, toggleMenu, openMenu, closeMenu };
};
