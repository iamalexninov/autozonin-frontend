import styles from "./style.module.css";

import { TitleContent } from "./title-content/TitleContent";
import { HomeSearch } from "../../search-boxes/home-search/HomeSearch";
import { VehiclesTypes } from "./vehicles-types/VehiclesTypes";

export const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <TitleContent />
        <HomeSearch />
        <VehiclesTypes />
      </div>
    </section>
  );
};
