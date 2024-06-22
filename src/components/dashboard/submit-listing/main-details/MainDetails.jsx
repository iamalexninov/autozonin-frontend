import styles from "./style.module.css";

import { RenderField } from "../../../global/fields/RenderField";

export const MainDetails = ({ setDetails }) => {
  return (
    <div className={["vehicle_category", styles.details].join(" ")}>
      <h5 className="vehicle_category_title">Vehicle Details</h5>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "text",
            label: "Vehicle Title",
            name: "title",
            placeholder: "Enter Title",
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Tagline",
            name: "tagline",
            placeholder: "Enter Tagline",
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Category",
            name: "category",
            options: [
              { label: "New", value: "new" },
              { label: "Used", value: "used" },
              { label: "DamagFed", value: "damaged" },
            ],
            setValues: setDetails,
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "select",
            label: "Label",
            name: "label",
            options: [
              { label: "Great Price", value: "greatPrice" },
              { label: "Low Mileage", value: "lowMileage" },
              { label: "One Owner", value: "oneOwner" },
              { label: "Certified Pre Owner", value: "certifiedPreOwner" },
              { label: "Excellent Condition", value: "excellentCondition" },
              { label: "Fuel Efficient", value: "fuelEfficient" },
            ],
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Condition",
            name: "condition",
            options: [
              { label: "Used", value: "used" },
              { label: "New", value: "new" },
              { label: "Damaged", value: "damaged" },
            ],
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Type",
            name: "type",
            options: [
              { label: "Sedan", value: "sedan" },
              { label: "Suv", value: "suv" },
              { label: "Truck", value: "truck" },
              { label: "Coupe", value: "coupe" },
              { label: "Convertible", value: "convertible" },
              { label: "Hatchback", value: "hatchback" },
              { label: "Minivan", value: "minivan" },
              { label: "Station Wagon", value: "stationWagon" },
              { label: "Crossover", value: "crossover" },
              { label: "Hybrid", value: "hybrid" },
            ],
            setValues: setDetails,
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "text",
            label: "Make",
            name: "make",
            placeholder: "Enter Make",
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Model",
            name: "model",
            placeholder: "Enter Model",
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Specification",
            name: "specification",
            placeholder: "Enter Specification",
            setValues: setDetails,
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "number",
            label: "Enter Year",
            name: "year",
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Drive Type",
            name: "driveType",
            options: [
              { label: "All-Wheel Drive(AWD/4WD)", value: "all" },
              { label: "Front-Wheel Drive", value: "front" },
              { label: "Rear-Wheel Drive", value: "rear" },
            ],
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Transmission",
            name: "transmission",
            options: [
              { label: "Automatic", value: "automatic" },
              { label: "Manual", value: "manual" },
              { label: "CVT", value: "cvt" },
              { label: "DCT", value: "dct" },
            ],
            setValues: setDetails,
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "select",
            label: "Fuel Type",
            name: "fuelType",
            placeholder: "Select Type",
            options: [
              { label: "Diesel", value: "diesel" },
              { label: "Electric", value: "electric" },
              { label: "Petrol", value: "petrol" },
              { label: "Hybrid", value: "hybrid" },
              { label: "Gasoline", value: "gasoline" },
            ],
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "number",
            label: "Mileage",
            name: "mileage",
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "number",
            label: "Engine Size",
            name: "engineSize",
            setValues: setDetails,
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "number",
            label: "Torque",
            name: "torque",
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "number",
            label: "Cylinder",
            name: "cylinder",
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Color",
            name: "color",
            setValues: setDetails,
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "select",
            label: "Doors",
            name: "doors",
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Offer Type",
            name: "offerType",
            options: [
              { label: "Hot", value: "hot" },
              { label: "Sell", value: "sell" },
              { label: "Loan", value: "loan" },
              { label: "Lease", value: "lease" },
              { label: "Traid In", value: "tradeIn" },
            ],
            setValues: setDetails,
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "VIN",
            name: "vin",
            setValues: setDetails,
          }}
        />
      </div>
      <RenderField
        attributes={{
          type: "textarea",
          label: "Listing Description",
          placeholder: "Description",
          name: "description",
          setValues: setDetails,
        }}
      />
    </div>
  );
};
