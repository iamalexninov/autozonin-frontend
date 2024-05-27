import styles from "./style.module.css";

import { ListingSearch } from "../../search-boxes/listing-search/ListingSearch";
import { SortBy } from "../../sort-by/SortBy";

export const VehiclesListing = () => {
  return (
    <section className={styles.vehicles}>
      <ListingSearch />
      <SortBy />
    </section>
  );
};