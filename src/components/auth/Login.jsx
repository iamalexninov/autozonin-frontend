import { RenderField } from "../global/fields/RenderField";

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
    <form onClick={handleSubmit} className="w-full flex flex-col gap-5 p-3">
      <h2 className="text-xl mb-8">Sign In</h2>
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
      <button className="bg-cape-green p-5 text-white font-600 rounded-2xl w-full uppercase mb-14">
        login
      </button>
    </form>
  );
};
