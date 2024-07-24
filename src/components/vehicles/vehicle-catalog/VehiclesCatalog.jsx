import { Wrapper } from "../../global/Wrapper";
import { SortBy } from "./SortBy";
import { VehiclesCatalogSearch } from "./VehiclesCatalogSearch";

export const VehiclesCatalog = () => {
  return (
    <section>
      <Wrapper>
        <SortBy />
        <VehiclesCatalogSearch />
      </Wrapper>
    </section>
  );
};
