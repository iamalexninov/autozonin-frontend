import { Form } from "../../components/global/form/Form";
import { InputTextField } from "../../components/global/input-text-field/InputTextField";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";

export const Register = () => {
  return (
    <Form>
      <InputTextField
        label="Username"
        name="username"
        placeholder="Ivan Todorov"
      />
      <InputTextField label="Email" name="email" placeholder="ivan@gmail.com" />
      <InputTextField label="Password" name="password" placeholder="*****" />
      <InputTextField
        label="Repeat Password"
        name="repass"
        placeholder="*****"
      />
      <AuthBtn text="Register" />
      <AuthSeparator />
      <AuthSocials />
    </Form>
  );
};
