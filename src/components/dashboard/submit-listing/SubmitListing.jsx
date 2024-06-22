import styles from "./style.module.css";

import { MainDetails } from "./main-details/MainDetails";
import { useState } from "react";

export const SubmitListing = () => {
  const [details, setDetails] = useState({
    title: "",
    tagline: "",
    category: "",
    label: "",
    condition: "",
    type: "",
    make: "",
    model: "",
    specification: "",
    year: "",
    driveType: "",
    transmission: "",
    fuelType: "",
    mileage: "",
    engineSize: "",
    torque: "",
    cylinder: "",
    color: "",
    doors: "",
    offerType: "",
    vin: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div
      className={["dashboard_section", styles.submit].join(" ")}
      style={{ paddingTop: "10rem" }}
    >
      <h3 className={styles.submit_title}>Add Vehicle Listing</h3>
      <form onSubmit={handleSubmit}>
        <MainDetails setDetails={setDetails} />
        <button>Submit</button>
      </form>
    </div>
  );
};
