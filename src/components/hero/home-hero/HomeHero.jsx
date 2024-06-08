import styles from "./style.module.css";

import { TitleContent } from "./title-content/TitleContent";
import { SearchBar } from "./search-bar/SearchBar";
import { VehiclesTypes } from "./vehicles-types/VehiclesTypes";

export const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <TitleContent />
        <SearchBar />
        <VehiclesTypes />
      </div>
    </section>
  );
};
