import { HomeHero } from "../components/hero/HomeHero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";
import { AutoHub } from "../components/autohub/AutoHub";
import { Subscribe } from "../components/Subscribe";
import { ExplorePremiumCars } from "../components/vehicles/ExplorePremiumCars";
import { PopularMakers } from "../components/vehicles/PopularMakers";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <ExplorePremiumBrands />
      <ExplorePremiumCars />
      <Services />
      <Stats />
      <WhyChooseUs />
      <PopularMakers />
      <AutoHub />
      <Subscribe />
    </>
  );
};
