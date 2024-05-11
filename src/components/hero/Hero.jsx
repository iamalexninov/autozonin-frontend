import { GenericHero } from "./generic-hero/GenericHero";
import { HomeHero } from "./home-hero/HomeHero";

export const Hero = ({ type }) => {
  const heroComponents = {
    home: HomeHero,
    generic: GenericHero,
  };

  const RenderHero = heroComponents[type];

  return <RenderHero />;
};
