import { AboutPreview } from "../components/about-preview/AboutPreview";
import { GenericHero } from "../components/hero/generic-hero/GenericHero";

export const About = () => {
  return (
    <>
      <GenericHero header="About Us" title="Our History" />
      <AboutPreview />
    </>
  );
};
