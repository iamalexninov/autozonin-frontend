import { Hero } from "../components/hero/Hero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { AllVehicles } from "../components/all-vehicles/AllVehicles";

export const Home = () => {
  return (
    <>
      <Hero />
      <ExplorePremiumBrands />
      <AllVehicles />
    </>
  );
};
