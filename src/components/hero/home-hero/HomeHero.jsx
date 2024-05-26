import styles from "./style.module.css";

import { HeroTextContent } from "./hero-text-content/HeroTextContent";
import { HomeSearch } from "../../search-boxes/home-search/HomeSearch";
import { HeroTypes } from "./hero-types/HeroTypes";

export const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <HeroTextContent />
        <HomeSearch />
        <HeroTypes />
      </div>
    </section>
  );
};
