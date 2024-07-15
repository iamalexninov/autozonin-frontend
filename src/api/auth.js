import { api } from "./api";
import { clearUser, setUser } from "../utils/localeStorage";

const endpoints = {
  users: "/auth/users",
  register: "/auth/register",
  login: "/auth/login",
  logout: "/auth/logout",
};

async function getUsers() {
  const result = await api.get(endpoints.users);
  return result;
}

async function register(data) {
  const result = await api.post(endpoints.register, data);

  setUser(result);
  return result;
}

async function login(data) {
  const result = await api.post(endpoints.login, data);

  setUser(result);
  return result;
}

function logout() {
  clearUser();
}

export const authApi = {
  getUsers,
  register,
  login,
  logout,
};
