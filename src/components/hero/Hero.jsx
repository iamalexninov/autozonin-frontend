import styles from "./style.module.css";

import { HeroTextContent } from "./hero-text-content/HeroTextContent";
import { HeroConditions } from "./hero-conditions/HeroConditions";
import { HeroSearchBar } from "./hero-search-bar/HeroSearchBar";
import { HeroTypes } from "./hero-types/HeroTypes";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <HeroTextContent />
        <HeroConditions />
        <HeroSearchBar />
        <HeroTypes />
      </div>
    </section>
  );
};
