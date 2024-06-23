import styles from "./style.module.css";

import { RenderField } from "../../components/global/fields/RenderField";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";

import { useState } from "react";

import { useSignUp } from "../../hooks/useSignUp";

export const Register = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { signUp } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(formValues)
  };

  return (
    <div className={styles.auth_container}>
      <form onSubmit={handleSubmit}>
        <RenderField
          attributes={{
            type: "text",
            label: "Username",
            placeholder: "iamiordan",
            name: "username",
            setValues: setFormValues,
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Email",
            placeholder: "iordan@gmail.com",
            name: "email",
            setValues: setFormValues,
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Phone",
            placeholder: "+359 896 35 9651",
            name: "phone",
            setValues: setFormValues,
          }}
        />
        <RenderField
          attributes={{
            type: "password",
            label: "Password",
            placeholder: "*****",
            name: "password",
            setValues: setFormValues,
          }}
        />
        <RenderField
          attributes={{
            type: "password",
            label: "Repeat Password",
            placeholder: "*****",
            name: "repass",
            setValues: setFormValues,
          }}
        />
        <AuthBtn text="Register" />
        <AuthSeparator />
        <AuthSocials />
      </form>
    </div>
  );
};
