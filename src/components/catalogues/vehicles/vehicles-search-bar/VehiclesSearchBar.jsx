import styles from "./style.module.css";

import { useState } from "react";

import { Form } from "../../../global/form/Form";
import { MainFilters } from "./main-filters/MainFilters";
import { AdditionalFilters } from "./additional-filters/AdditionalFilters";
import { SliderFilters } from "./slider-filters/SliderFilters";
import { FeatureFilters } from "./feature-filters/FeatureFilters";

export const VehiclesSearchBar = () => {
  const [toggleFilters, setToggleFilters] = useState(false);

  const handleClick = () => {
    setToggleFilters((prev) => !prev);
  };

  return (
    <div className={styles.search}>
      <Form>
        <MainFilters onClick={handleClick} />
        {toggleFilters && (
          <div className={styles.filters}>
            <AdditionalFilters />
            <SliderFilters />
            <FeatureFilters />
          </div>
        )}
      </Form>
    </div>
  );
};
