import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../hooks/useSignIn";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { signIn } = useSignIn();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(userData);
    navigate("/");
  };

  return (
    <form onClick={handleSubmit} className="w-full flex flex-col gap-5 p-3">
      <h2 className="text-xl mb-8">Sign In</h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="logEmail" className="pl-1 text-base">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="logEmail"
          placeholder="alex@gmail.com"
          onChange={handleInputChange}
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="logPass" className="pl-1 text-base">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="logPass"
          placeholder="******"
          onChange={handleInputChange}
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button className="bg-cape-green p-5 text-white font-600 rounded-2xl w-full uppercase mb-14">
        login
      </button>
    </form>
  );
};
