import { Hero } from "../components/hero/Hero";
import { Service } from "../components/service/Service";
import { BrowseSection } from "../components/browse/Browse";

export const Home = () => {
  return (
    <>
      <Hero type="home" />
      <Service />
      <BrowseSection />
    </>
  );
};
