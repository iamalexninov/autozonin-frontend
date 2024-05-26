import { Form } from "../../components/global/form/Form";
import { AuthBtn } from "./auth-btn/AuthBtn";
import { AuthSeparator } from "./auth-separator/AuthSeparator";
import { AuthSocials } from "./auth-socials/AuthSocials";

export const Register = () => {
  return (
    <Form>
      {/* <TextField
        type="input"
        label="Username"
        name="username"
        placeholder="Ivan Todorov"
      />
      <TextField
        type="input"
        label="Email"
        name="email"
        placeholder="ivan@gmail.com"
      />
      <TextField
        type="input"
        label="Password"
        name="password"
        placeholder="*****"
      />
      <TextField
        type="input" */}
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
