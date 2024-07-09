import styles from "./style.module.css";
import { RenderField } from "../../global/fields/RenderField";

export const ChangePassword = () => {
  return (
    <div className={styles.password}>
      <h5 className="vehicle_category_title">Change Password</h5>
      <div className={styles.password_container}>
        <form>
          <div className={styles.password_fields}>
            <RenderField
              attributes={{
                type: "input",
                inputType: "text",
                placeholder: "password...",
                label: "Old Password",
                name: "oldpass",
              }}
            />
            <RenderField
              attributes={{
                type: "input",
                inputType: "text",
                placeholder: "password...",
                label: "New Password",
                name: "newpass",
              }}
            />
            <RenderField
              attributes={{
                type: "input",
                inputType: "text",
                placeholder: "password...",
                label: "Retype Password",
                name: "retypepass",
              }}
            />
            <button className={styles.password_btn}>Change Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};
