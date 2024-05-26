import { Form } from "../../components/global/form/Form";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";

export const Login = () => {
  return (
    <Form>
      {/* <TextField
        type="input"
        label="Username or Email"
        name="usernameOrEmail"
        placeholder="admin or admin@gmail.com"
      />
      <TextField
        type="input"
        label="Password"
        name="password"
        placeholder="*****"
      /> */}
      <AuthBtn text="Login" />
      <AuthSeparator />
      <AuthSocials />
    </Form>
  );
};
