import { Form } from "../../components/global/form/Form";
import { InputTextField } from "../../components/global/input-text-field/InputTextField";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";

export const Login = () => {
  return (
    <Form>
      <InputTextField
        label="Username or Email"
        name=""
        placeholder="admin or admin@gmail.com"
      />
      <InputTextField label="Password" name="password" placeholder="*****" />
      <AuthBtn text="Login" />
      <AuthSeparator />
      <AuthSocials />
    </Form>
  );
};
