import { FooterTopTitle } from "./footer-top-subsection/FooterTopTitle";
import { FooterTopLinks } from "./footer-top-subsection/FooterTopLinks";

export const FooterTopContact = () => {
  const links = [
    {
      path: "/contact",
      text: "bul.Bulgaria, Plovdiv, Bulgaria",
    },
    {
      path: "/contact",
      text: "+359 896 35 9865",
    },
    {
      path: "/contact",
      text: "zoninshowroom@gmail.com",
    },
  ];

  return (
    <div>
      <FooterTopTitle text="contact us" />
      <FooterTopLinks links={links} />
    </div>
  );
};
