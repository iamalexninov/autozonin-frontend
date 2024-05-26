import styles from "./style.module.css";
import { Wrapper } from "../../../global/wrapper/Wrapper";
import { GlobalIcon } from "../../../global/GlobalIcon";
import { useState } from "react";
import { GlobalSelect } from "../../../global/GlobalSelect";
import { TextField } from "../../../global/text-field/TextField";

export const VehiclesListingSearch = () => {
  const [toggleFilters, setToggleFilters] = useState(false);

  const handleClick = () => {
    setToggleFilters((prev) => !prev);
  };

  return (
    <div className={styles.search}>
      <Wrapper>
        <form className={styles.search_form}>
          <div className={styles.search_form_preview}>
            <GlobalSelect placeholder="Condition" name="condition" />
            <GlobalSelect placeholder="Category" name="category" />
            <GlobalSelect placeholder="Type" name="type" />
            <GlobalSelect placeholder="Make" name="make" />
            <GlobalSelect placeholder="Model" name="model" />
            {/* TODO: set per click - show/hide */}
            <div className={styles.more_filters} onClick={handleClick}>
              <GlobalIcon type="filter" size={25} />
              <p>More Filters</p>
            </div>
          </div>
          {toggleFilters && (
            <div className={styles.filters}>
              <div className={styles.filters_select}>
                <GlobalSelect placeholder="Fuel Type" name="fuel" />
                <GlobalSelect placeholder="Cylinder" name="cylinder" />
                <GlobalSelect placeholder="Drive Type" name="drivetype" />
                <GlobalSelect placeholder="Offer Type" name="transmission" />
              </div>
              <div className={styles.filters_select}>
                <GlobalSelect placeholder="Door" name="door" />
                <GlobalSelect placeholder="Color" name="color" />
                <GlobalSelect placeholder="Drive Type" name="offertype" />
                <TextField name="VIN" placeholder="VIN" type="input" />
              </div>
              <div className={styles.features}>
                {/* TODO: Think about it */}
              </div>
            </div>
          )}
        </form>
      </Wrapper>
    </div>
  );
};
