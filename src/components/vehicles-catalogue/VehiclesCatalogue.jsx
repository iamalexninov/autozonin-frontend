import styles from "./style.module.css";
import { Wrapper } from "../global/wrapper/Wrapper";
import { VehiclesCatalogueCard } from "../cards/vehicles-catalogue-card/VehiclesCatalogueCard";

export const VehiclesCatalogue = () => {
  return (
    <section className={styles.catalogue}>
      <Wrapper>
        <VehiclesCatalogueCard />
      </Wrapper>
    </section>
  );
};
