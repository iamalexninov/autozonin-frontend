import { GenericHero } from "./GenericHero/GenericHero";
import { HomeHero } from "./HomeHero/HomeHero";

export const Hero = ({ type }) => {
  const heroComponents = {
    home: HomeHero,
    generic: GenericHero,
  };

  const RenderHero = heroComponents[type];

  return <RenderHero />;
};
