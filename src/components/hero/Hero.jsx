import { HomeHero } from "./HomeHero/HomeHero";
import { GenericHero } from "./GenericHero/GenericHero";

export const Hero = ({ type }) => {
  const heroComponents = {
    home: HomeHero,
    generic: GenericHero,
  };

  const RenderHero = heroComponents[type];

  return <RenderHero />;
};
