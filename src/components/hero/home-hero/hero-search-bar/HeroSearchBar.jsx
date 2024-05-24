import styles from "./style.module.css";

import Select from "react-select";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const HeroSearchBar = () => {
  const selectStyles = {
    control: () => ({
      display: "flex",
      alignItems: "center",
      minWidth:'180px',
      borderRadius: "50px",
      padding: "8px 5px",
    }),
  };

  // TODO: Fill with server data
  const makers = [
    { label: "All", value: "" },
    { label: "Mercedes", value: "mercedes" },
    { label: "BMW", value: "bmw" },
    { label: "Opel", value: "opel" },
    { label: "Honda", value: "honda" },
  ];

  return (
    <div className={styles.bar}>
      <Select options={makers} styles={selectStyles} placeholder="Any Makers"/>
      <Select options={makers} styles={selectStyles} placeholder="Any Models"/>
      <Select options={makers} styles={selectStyles} placeholder="Price: All Prices"/>
      <button className={styles.bar_btn}>
        <GlobalIcon type="search" size={25} />
        Search Vehicles
      </button>
    </div>
  );
};
