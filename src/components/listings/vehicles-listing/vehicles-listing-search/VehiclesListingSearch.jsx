import styles from "./style.module.css";
import Select from "react-select";
import { options } from "./Text";
import { Wrapper } from "../../../global/wrapper/Wrapper";
import { GlobalIcon } from "../../../global/GlobalIcon";
import { useState } from "react";

export const VehiclesListingSearch = () => {
  const useStyles = {
    control: () => ({
      border: "1px solid var(--light-gray)",
      borderRadius: "50px",
      display: "flex",
      padding: "10px",
      color: "var(--white)",
      width: "100%",
    }),
  };

  const [toggleFilters, setToggleFilters] = useState(false);

  const handleClick = () => {
    setToggleFilters((prev) => !prev);
  };

  return (
    <div className={styles.search}>
      <Wrapper>
        <form className={styles.search_form}>
          <div className={styles.search_form_preview}>
            <Select
              placeholder="Condition.."
              options={options.condition}
              styles={useStyles}
            />
            <Select
              placeholder="Category.."
              options={options.category}
              styles={useStyles}
            />
            <Select
              placeholder="Type.."
              options={options.type}
              styles={useStyles}
            />
            <Select
              placeholder="Make"
              options={options.make}
              styles={useStyles}
            />
            <Select placeholder="Model" styles={useStyles} />
            {/* TODO: set per click - show/hide */}
            <div className={styles.more_filters} onClick={handleClick}>
              <GlobalIcon type="filter" size={25} />
              <p>More Filters</p>
            </div>
          </div>
          {toggleFilters && (
            <div className={styles.filters}>
              <div className={styles.filters_select}>
                <Select placeholder="Fuel Type" styles={useStyles} />
                <Select placeholder="Cylinder" styles={useStyles} />
                <Select placeholder="Drive Type" styles={useStyles} />
                <Select placeholder="Transmission" styles={useStyles} />
              </div>
              <div className={styles.filters_select}>
                <Select placeholder="Door" styles={useStyles} />
                <Select placeholder="Color" styles={useStyles} />
                <Select placeholder="Offer Type" styles={useStyles} />
                <input type="text" placeholder="VIN" />
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
