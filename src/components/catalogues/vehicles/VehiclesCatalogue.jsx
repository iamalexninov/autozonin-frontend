import styles from "./style.module.css";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { VehiclesSearchBar } from "./vehicles-search-bar/VehiclesSearchBar";
import { SortBy } from "./sort-by/SortBy";
import { Listing } from "./listing/Listing";
import { useGetVehicles } from "../../../hooks/useGetVehicles";

export const VehiclesCatalogue = () => {
  const { vehicles } = useGetVehicles();

  console.log(vehicles);

  return (
    <section className={styles.vehicles}>
      <Wrapper>
        <VehiclesSearchBar />
        <SortBy />
        <Listing />
      </Wrapper>
    </section>
  );
};
