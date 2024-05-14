import { FooterTopLinks } from "./footer-top-subsection/FooterTopLinks";
import { FooterTopTitle } from "./footer-top-subsection/FooterTopTitle";

export const FooterTopNavigation = () => {
  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about",
      text: "About Us",
    },
    {
      path: "/catalogue",
      text: "Vehicles",
    },
    {
      path: "/team",
      text: "Team",
    },
    {
      path: "/blog",
      text: "Blog",
    },
    {
      path: "/contact",
      text: "Contact",
    },
  ];

  return (
    <div>
      <FooterTopTitle text="navigation" />
      <FooterTopLinks links={links} />
    </div>
  );
};
