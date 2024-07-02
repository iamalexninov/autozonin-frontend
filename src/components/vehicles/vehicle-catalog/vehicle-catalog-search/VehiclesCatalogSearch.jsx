import { useState } from "react";

import { MainFilters } from "./main-filters/MainFilters";
import { AdditionalFilters } from "./additional-filters/AdditionalFilters";
import { SliderFilters } from "./slider-filters/SliderFilters";
import { FeatureFilters } from "./feature-filters/FeatureFilters";

export const VehiclesCatalogSearch = () => {
  const [toggleFilters, setToggleFilters] = useState(false);

  const handleClick = () => {
    setToggleFilters((prev) => !prev);
  };

  return (
    <div className="mb-9 bg-white">
      <form>
        <MainFilters onClick={handleClick} />
        {toggleFilters && (
          <div className="p-7 rounded-lg border-gray-500 max-w-7xl">
            <AdditionalFilters />
            <SliderFilters />
            <FeatureFilters />
          </div>
        )}
      </form>
    </div>
  );
};
