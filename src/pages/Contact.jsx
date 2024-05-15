import { Hero } from "../components/hero/Hero";
import { ContactSection } from "../components/contact/ContactSection";
import { AutoHub } from "../components/auto-hub/AutoHub";

export const Contact = () => {
  return (
    <>
      <Hero type="generic" page="Contact Us" text="get in touch" />
      <ContactSection />
      <AutoHub />
    </>
  );
};
