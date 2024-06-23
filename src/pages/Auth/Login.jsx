import styles from "./style.module.css";

import { RenderField } from "../../components/global/fields/RenderField";
import { Form } from "../../components/global/form/Form";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";
import { useGetUsers } from "../../hooks/useGetUsers";

export const Login = () => {
  const { users } = useGetUsers();

  console.log(users && users);

  return (
    <div className={styles.auth_container}>
      <Form>
        <RenderField
          attributes={{
            type: "text",
            label: "Email",
            name: "email",
            placeholder: "iordan@gmail.com",
          }}
        />
        <RenderField
          attributes={{
            type: "password",
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
