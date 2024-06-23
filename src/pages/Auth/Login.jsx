import styles from "./style.module.css";

import { RenderField } from "../../components/global/fields/RenderField";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";

import { useState } from "react";
import { useSignIn } from "../../hooks/useSignIn";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useSignIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(userData);
  };

  return (
    <div className={styles.auth_container}>
      <form onClick={handleSubmit}>
        <RenderField
          attributes={{
            type: "text",
            label: "Email",
            name: "email",
            placeholder: "iordan@gmail.com",
            setValues: setUserData,
          }}
        />
        <RenderField
          attributes={{
            type: "password",
            label: "Password",
            name: "password",
            placeholder: "*****",
            setValues: setUserData,
          }}
        />
        <AuthBtn text="Login" />
        <AuthSeparator />
        <AuthSocials />
      </form>
    </div>
  );
};
