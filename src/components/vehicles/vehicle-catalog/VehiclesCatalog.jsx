import { Wrapper } from "../../global/Wrapper";
import { SortBy } from "./sort-by/SortBy";
import { VehiclesCatalogSearch } from "./vehicle-catalog-search/VehiclesCatalogSearch";
import { VehicleList } from "./vehicle-list/VehicleList";

export const VehiclesCatalog = () => {
  return (
    <section>
      <Wrapper>
        <SortBy />
        <VehiclesCatalogSearch />
        <VehicleList />
      </Wrapper>
    </section>
  );
};
