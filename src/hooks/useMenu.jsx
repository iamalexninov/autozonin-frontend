import { useState } from "react";

export const useNavbarMenu = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => setNavbar((prev) => !prev);
  const openNavbar = () => setNavbar(true);
  const closeNavbar = () => setNavbar(false);

  return { navbar, toggleNavbar, openNavbar, closeNavbar };
};

export const useAsideMenu = () => {
  const [aside, setAside] = useState(false);

  const toggleAside = () => setAside((prev) => !prev);
  const openAside = () => setAside(true);
  const closeAside = () => setAside(false);

  return { aside, toggleAside, openAside, closeAside };
};
