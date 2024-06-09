import { HomeHero } from "../components/hero/home-hero/HomeHero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";
import { LatestBlogPosts } from "../components/latest-blog-posts/LatestBlogPosts";
import { AutoHub } from "../components/autohub/AutoHub";
import { Subscribe } from "../components/subscribe/Subscribe";
import { ConditionsOrMakes } from "../components/conditions-or-makes/ConditionsOrMakes";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <ExplorePremiumBrands />
      <ConditionsOrMakes type="conditions"/>
      <Services />
      <Stats />
      <WhyChooseUs />
      <ConditionsOrMakes type="makes"/>
      <LatestBlogPosts />
      <AutoHub />
      <Subscribe />
    </>
  );
};
