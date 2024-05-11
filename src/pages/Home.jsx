import { GenericHero } from "../components/hero/generic-hero/GenericHero";
import { Hero } from "../components/hero/Hero";
import { Service } from "../components/service/Service";

export const Home = () => {
  return (
    <>
      <Hero type="home" />
      <Service />
    </>
  );
};
