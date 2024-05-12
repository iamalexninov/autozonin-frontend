import { Hero } from "../components/hero/Hero";
import { Service } from "../components/service/Service";
import { BrowseSection } from "../components/browse/Browse";
import { FeaturedVehicles } from "../components/featured-vehicles/FeaturedVehicles";
import { AutoHub } from "../components/auto-hub/AutoHub";
import { AutoMagazine } from "../components/auto-magazine/AutoMagazine";

export const Home = () => {
  return (
    <>
      <Hero type="home" />
      <Service />
      <BrowseSection />
      <FeaturedVehicles />
      <AutoHub />
      <AutoMagazine />
    </>
  );
};
