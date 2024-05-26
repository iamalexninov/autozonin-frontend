import { HomeHero } from "../components/hero/home-hero/HomeHero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { AllVehicles } from "../components/all-vehicles/AllVehicles";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";
import { PopularMakes } from "../components/popular-makes/PopularMakes";
import { LatestBlogPosts } from "../components/latest-blog-posts/LatestBlogPosts";
import { AutoHub } from "../components/autohub/AutoHub";
import { Subscribe } from "../components/subscribe/Subscribe";
import { RangeSlider } from "../components/global/range-slider/RangeSlider";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <ExplorePremiumBrands />
      <AllVehicles />
      <Services />
      <Stats />
      <WhyChooseUs />
      <PopularMakes />
      <LatestBlogPosts />
      <RangeSlider />
      <AutoHub />
      <Subscribe />
    </>
  );
};
