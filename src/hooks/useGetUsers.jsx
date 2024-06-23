import { useEffect } from "react";
import { useAuthContext } from "./useContexts";
import { authApi } from "../api/auth";

export const useGetUsers = () => {
  const { users, dispatch } = useAuthContext();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await authApi.getUsers();
        dispatch({ type: "SHOW_USERS", payload: result });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return { users };
};
