import { Hero } from "../components/hero/Hero";
import { Service } from "../components/service/Service";
import { BrowseSection } from "../components/browse/Browse";
import { FeaturedVehicles } from "../components/featured-vehicles/FeaturedVehicles";
import { AutoHub } from "../components/auto-hub/AutoHub";
import { RenderCard } from "../components/card-components/RenderCard";

export const Home = () => {
  return (
    <>
      <Hero type="home" />
      <Service />
      <BrowseSection />
      <FeaturedVehicles />
      <AutoHub />
      {/* TODO: Change it Later */}
      <RenderCard card="auto_magazine"/>
    </>
  );
};
