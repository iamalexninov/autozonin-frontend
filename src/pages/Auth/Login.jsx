import styles from "./style.module.css";

import { RenderField } from "../../components/global/fields/RenderField";
import { Form } from "../../components/global/form/Form";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";

export const Login = () => {
  return (
    <div className={styles.auth_container}>
      <Form>
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Username or Email",
            name: "usernameOrEmail",
            placeholder: "iamiordan or iordan@gmail.com",
          }}
        />  
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Password",
            name: "password",
            placeholder: "*****",
          }}
        />
        <AuthBtn text="Login" />
        <AuthSeparator />
        <AuthSocials />
      </Form>
    </div>
  );
};
