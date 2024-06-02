// import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";

export const Location = () => {
  return (
    <div className="vehicle_category">
      <h5 className="vehicle_category_title">Location</h5>
      <RenderField
        attributes={{
          type: "input",
          inputType: "text",
          label: "Map Location",
          name: "location",
          placeholder:
            "Opalchenska, Centre, Vazrajdane, Sofia, Sofia City, Sofia-City, 1303, Bulgaria",
        }}
      />
    </div>
  );
};
