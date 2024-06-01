import { RenderField } from "../../global/fields/RenderField";
import { Form } from "../../global/form/Form";
import styles from "./style.module.css";

export const SubmitListing = () => {
  return (
    <div className={["dashboard_section", styles.submit].join(" ")}>
      <h4 className={styles.submit_title}>Add Vehicle Listing</h4>
      <div className={styles.submit_form}>
        <Form>
          <div className={styles.submit_fields}>
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
                placeholder:'Category...'
              }}
            />
            <RenderField
              attributes={{
                type: "select",
                label: "Condition",
                name: "condition",
                placeholder:'Condition...'
              }}
            />
          </div>
          <div className={styles.submit_fields}>
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
        </Form>
      </div>
    </div>
  );
};
