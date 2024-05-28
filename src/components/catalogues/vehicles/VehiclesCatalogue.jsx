import styles from "./style.module.css";

import { VehiclesSearchBar } from "./vehicles-search-bar/VehiclesSearchBar";
import { SortBy } from "./sort-by/SortBy";
import { Listing } from "./listing/Listing";

export const VehiclesCatalogue = () => {
  return (
    <section className={styles.vehicles}>
      <VehiclesSearchBar />
      <SortBy />
      <Listing />
    </section>
  );
};
