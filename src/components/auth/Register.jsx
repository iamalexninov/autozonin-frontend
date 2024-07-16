import { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { signUp } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(user);
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 p-3">
      <h2 className="text-xl mb-5">Sign Up</h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="username" className="pl-1 text-base">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="iamalexninov"
          onChange={handleInputChange}
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="regEmail" className="pl-1 text-base">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="regEmail"
          placeholder="alex@gmail.com"
          onChange={handleInputChange}
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="pl-1 text-base">
          Phone:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="+359 896 35 9845"
          onChange={handleInputChange}
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="regPass" className="pl-1 text-base">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="regPass"
          placeholder="******"
          onChange={handleInputChange}
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button className="bg-cape-green p-5 text-white font-600 rounded-2xl w-full uppercase mb-14">
        Register
      </button>
    </form>
  );
};
