import { Hero } from "../components/hero/Hero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { AllVehicles } from "../components/all-vehicles/AllVehicles";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";
import { PopularMakes } from "../components/popular-makes/PopularMakes";
import { LatestBlogPosts } from "../components/latest-blog-posts/LatestBlogPosts";
import { AutoHub } from "../components/autohub/AutoHub";

export const Home = () => {
  return (
    <>
      <Hero />
      <ExplorePremiumBrands />
      <AllVehicles />
      <Services />
      <Stats />
      <WhyChooseUs />
      <PopularMakes />
      <LatestBlogPosts />
      <AutoHub />
    </>
  );
};
