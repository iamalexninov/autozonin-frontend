import styles from "./style.module.css";

import { HeroTextContent } from "./hero-text-content/HeroTextContent";
import { HeroConditions } from "./hero-conditions/HeroConditions";
import { HeroSearchBar } from "./hero-search-bar/HeroSearchBar";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <HeroTextContent />
        <HeroConditions />
        <HeroSearchBar />
      </div>
    </section>
  );
};
