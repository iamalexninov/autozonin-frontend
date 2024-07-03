import { useState } from "react";

import { MainFilters } from "./main-filters/MainFilters";
import { AdditionalFilters } from "./additional-filters/AdditionalFilters";
import { FeatureFilters } from "./feature-filters/FeatureFilters";

export const VehiclesCatalogSearch = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleMoreFiltersOnClick = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <div className="mb-9 bg-white">
      <form>
        <MainFilters onClick={handleMoreFiltersOnClick} />
        {showFilters && (
          <div className="mt-10 p-10 rounded-lg border border-gray-300 w-full">
            <AdditionalFilters />
            <FeatureFilters />
          </div>
        )}
      </form>
    </div>
  );
};
