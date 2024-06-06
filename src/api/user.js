import { api } from "./api";
import { setUser } from "../utils/localeStorage";

const endpoints = {
  register: "/user/register",
  login: "/user/login",
  logout: "/user/logout",
};

async function register(username, email, phone, password) {
  // console.log({ username, email, phone, password });
    const result = await api.post(endpoints.register, {
      username,
      email,
      phone,
      password,
    });
  
    setUser(result);
    return result;
}

export const userApi = {
  register,
};
