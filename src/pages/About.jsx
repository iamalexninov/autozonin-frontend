import { Hero } from "../components/hero/Hero";
import { Service } from "../components/service/Service";
import { BrowseSection } from "../components/browse/Browse";
import { FAQ } from "../components/faq/FAQ";
import { AutoHub } from "../components/auto-hub/AutoHub";

export const About = () => {
  return (
    <>
      <Hero type="generic" text="Who are we?" page="About Us" />
      <Service />
      <BrowseSection />
      <FAQ />
      <AutoHub />
    </>
  );
};
