import styles from "./style.module.css";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { VehiclesSearchBar } from "./vehicles-search-bar/VehiclesSearchBar";
import { SortBy } from "./sort-by/SortBy";
import { Listing } from "./listing/Listing";

import { useEffect, useState } from "react";
import { vehicleApi } from "../../../api/vehicles";

export const VehiclesCatalogue = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const handleVehicleItems = async () => {
      const data = await vehicleApi.renderVehicles();
      setVehicles(data);
    };

    handleVehicleItems();
  }, []);

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
