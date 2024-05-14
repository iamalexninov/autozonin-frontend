import { HomeHero } from "./home-hero/HomeHero";
import { GenericHero } from "./generic-hero/GenericHero";

export const Hero = ({ type, text, page }) => {
  const heroComponents = {
    home: HomeHero,
    generic: GenericHero,
  };

  const RenderHero = heroComponents[type];

  return <RenderHero text={text} page={page} />;
};
