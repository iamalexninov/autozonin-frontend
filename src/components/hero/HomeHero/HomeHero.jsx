import styles from "./style.module.css";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { HomeHeroContent } from "./home-hero-content/HomeHeroContent";
import { HomeHeroSearch } from "./home-hero-search/HomeHeroSearch";

export const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <Wrapper>
        <div className={styles.container}>
          <HomeHeroContent />
          <HomeHeroSearch />
        </div>
      </Wrapper>
    </section>
  );
};
