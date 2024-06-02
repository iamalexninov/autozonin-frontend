import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";

export const MainDetails = () => {
  return (
    <div className={["vehicle_category", styles.details].join(" ")}>
      <h5 className="vehicle_category_title">Vehicle Details</h5>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Vehicle Title",
            name: "vehicleTitle",
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Category",
            name: "category",
            placeholder: "All...",
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Condition",
            name: "condition",
            placeholder: "All...",
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Model",
            name: "model",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Make",
            name: "make",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Modification",
            name: "modification",
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "select",
            label: "Coupe",
            name: "coupe",
            placeholder: "All...",
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Transmission",
            name: "transmission",
            placeholder: "All...",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Year",
            name: "year",
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "select",
            label: "Drive Type",
            name: "drive",
            placeholder: "All...",
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Fuel type",
            name: "fuel",
            placeholder: "All...",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Mileage",
            name: "mileage",
            placeholder: "From 0 km To 500000 km.",
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Engine Size",
            name: "enginesize",
            placeholder: "Hp...",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Torque",
            name: "torque",
            placeholder: "Nm...",
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Cylinder",
            name: "cylinder",
            placeholder: "All...",
          }}
        />
      </div>
      <div className={styles.details_fields}>
        <RenderField
          attributes={{
            type: "select",
            label: "Color",
            name: "color",
            placeholder: "All...",
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            label: "Doors",
            name: "doors",
            placeholder: "All...",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "VIN",
            name: "vin",
            placeholder: "2B3KA43T39H587629",
          }}
        />
      </div>
      <RenderField
        attributes={{
          type: "input",
          inputType: "textarea",
          label: "Listing Description",
          placeholder: "Description",
          name: "description",
        }}
      />
    </div>
  );
};
