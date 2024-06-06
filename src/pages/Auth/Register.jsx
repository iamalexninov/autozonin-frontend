import styles from "./style.module.css";

import { RenderField } from "../../components/global/fields/RenderField";
import { Form } from "../../components/global/form/Form";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";

import { userApi } from "../../api/user";
import { useState } from "react";

export const Register = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleOnSubmit = async () => {
    const { username, email, phone, password } = formValues;

    try {
      await userApi.register(username, email, phone, password);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.auth_container}>
      <Form onSubmit={handleOnSubmit}>
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Username",
            placeholder: "iamiordan",
            name: "username",
            onChange: handleChange,
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Email",
            placeholder: "iordan@gmail.com",
            name: "email",
            onChange: handleChange,
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Phone",
            placeholder: "+359 896 35 9651",
            name: "phone",
            onChange: handleChange,
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Password",
            placeholder: "*****",
            name: "password",
            onChange: handleChange,
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Repeat Password",
            placeholder: "*****",
            name: "repass",
            onChange: handleChange,
          }}
        />
        <AuthBtn text="Register" />
        <AuthSeparator />
        <AuthSocials />
      </Form>
    </div>
  );
};
