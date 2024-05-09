import { useState } from "react";

export const useMobileMenu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return { menu, toggleMenu, closeMenu };
};
