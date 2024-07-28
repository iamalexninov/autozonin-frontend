import { HomeHero } from "../components/hero/home-hero/HomeHero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";
import { AutoHub } from "../components/autohub/AutoHub";
import { Subscribe } from "../components/Subscribe";
import { CarsByConditions } from "../components/vehicles/CarsByConditions";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <ExplorePremiumBrands />
      <CarsByConditions />
      <Services />
      <Stats />
      <WhyChooseUs />
      <AutoHub />
      <Subscribe />
    </>
  );
};
