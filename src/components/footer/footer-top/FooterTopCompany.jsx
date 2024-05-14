import { FooterTopTitle } from "./footer-top-subsection/FooterTopTitle";
import { FooterTopLinks } from "./footer-top-subsection/FooterTopLinks";

export const FooterTopCompany = () => {
  const links = [
    {
      path: "/register",
      text: "Sign Up",
    },
    {
      path: "login",
      text: "Sign In",
    },
    {
      path: "/about",
      text: "Our History",
    },
    {
      path: "/catalogue",
      text: "Vehicles",
    },
  ];

  return (
    <div>
      <FooterTopTitle text="our company" />
      <FooterTopLinks links={links} />
    </div>
  );
};
