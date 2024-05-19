import { Hero } from "../components/hero/Hero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { AllVehicles } from "../components/all-vehicles/AllVehicles";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";

export const Home = () => {
  return (
    <>
      <Hero />
      <ExplorePremiumBrands />
      <AllVehicles />
      <Services />
      <Stats />
    </>
  );
};
