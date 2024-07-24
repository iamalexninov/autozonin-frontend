import { Wrapper } from "../../global/Wrapper";
import { SortBy } from "./sort-by/SortBy";
import { VehiclesCatalogSearch } from "./vehicle-catalog-search/VehiclesCatalogSearch";

export const VehiclesCatalog = () => {
  return (
    <section>
      <Wrapper>
        <SortBy />
        <VehiclesCatalogSearch />
        {/* <VehicleList /> */}
      </Wrapper>
    </section>
  );
};
