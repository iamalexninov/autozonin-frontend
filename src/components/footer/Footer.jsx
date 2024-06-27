import { Wrapper } from "../global/wrapper/Wrapper";
import { FooterTop } from "./footer-top/FooterTop";
import { FooterBottom } from "./footer-bottom/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-cape-green">
      <Wrapper>
        <FooterTop />
      </Wrapper>
      <FooterBottom />
    </footer>
  );
};
