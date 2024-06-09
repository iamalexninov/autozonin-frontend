import { HomeHero } from "../components/hero/home-hero/HomeHero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { ExploreVehicles } from "../components/explore-vehicles/ExploreVehicles";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";
import { PopularMakes } from "../components/popular-makes/PopularMakes";
import { LatestBlogPosts } from "../components/latest-blog-posts/LatestBlogPosts";
import { AutoHub } from "../components/autohub/AutoHub";
import { Subscribe } from "../components/subscribe/Subscribe";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <ExplorePremiumBrands />
      <ExploreVehicles />
      <Services />
      <Stats />
      <WhyChooseUs />
      <PopularMakes />
      <LatestBlogPosts />
      <AutoHub />
      <Subscribe />
    </>
  );
};
