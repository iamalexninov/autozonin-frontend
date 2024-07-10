import { Wrapper } from "../global/Wrapper";
import { FooterTop } from "./footer-top/FooterTop";
import { FooterBottom } from "./FooterBottom";

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
