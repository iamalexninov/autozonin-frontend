import { ContactUs } from "../components/contact-us/ContactUs";
import { GenericHero } from "../components/hero/GenericHero";

export const Contact = () => {
  return (
    <>
      <GenericHero header="Contact Us" title="Connect With Us" />
      <ContactUs />
    </>
  );
};
