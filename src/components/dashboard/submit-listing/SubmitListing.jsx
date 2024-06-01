import styles from "./style.module.css";

import { Form } from "../../global/form/Form";
import { Categories } from "./categories/Categories";

export const SubmitListing = () => {
  // [] - main details form
  // [] - dimensions & capacity
  // [] - engine & transmission
  // [] - media form - upload images
  // [] - location

  return (
    <div className={["dashboard_section", styles.submit].join(" ")}>
      <h3 className={styles.submit_title}>Add Vehicle Listing</h3>
      <Form>
        <Categories />
      </Form>
    </div>
  );
};
