import { RenderField } from "../../global/fields/RenderField";
import { Form } from "../../global/form/Form";
import styles from "./style.module.css";

export const ChangePassword = () => {
  return (
    <div className={styles.password}>
      <div className={styles.password_container}>
        <Form>
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
        </Form>
      </div>
    </div>
  );
};
