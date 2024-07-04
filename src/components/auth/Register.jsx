import { RenderField } from "../global/fields/RenderField";
import { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { signUp } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(user);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 p-3">
      <h2 className="text-xl mb-5">Sign Up</h2>
      <RenderField
        attributes={{
          type: "text",
          label: "Username",
          placeholder: "iamiordan",
          name: "username",
          setValues: setUser,
        }}
      />
      <RenderField
        attributes={{
          type: "text",
          label: "Email",
          placeholder: "iordan@gmail.com",
          name: "email",
          setValues: setUser,
        }}
      />
      <RenderField
        attributes={{
          type: "text",
          label: "Phone",
          placeholder: "+359 896 35 9651",
          name: "phone",
          setValues: setUser,
        }}
      />
      <RenderField
        attributes={{
          type: "password",
          label: "Password",
          placeholder: "*****",
          name: "password",
          setValues: setUser,
        }}
      />
      <RenderField
        attributes={{
          type: "password",
          label: "Repeat Password",
          placeholder: "*****",
          name: "repass",
          setValues: setUser,
        }}
      />
      <button className="bg-cape-green p-5 text-white font-600 rounded-2xl w-full uppercase mb-14">
        Register
      </button>
    </form>
  );
};
