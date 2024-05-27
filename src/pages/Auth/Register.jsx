import styles from './style.module.css';

import { RenderField } from "../../components/global/fields/RenderField";
import { Form } from "../../components/global/form/Form";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";

export const Register = () => {
  return (
    <div className={styles.auth_container}>
      <Form>
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Username",
            placeholder: "iamiordan",
            name: "username",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Email",
            placeholder: "iordan@gmail.com",
            name: "email",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Password",
            placeholder: "*****",
            name: "password",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Repeat Password",
            placeholder: "*****",
            name: "repass",
          }}
        />
        <AuthBtn text="Register" />
        <AuthSeparator />
        <AuthSocials />
      </Form>
    </div>
  );
};
