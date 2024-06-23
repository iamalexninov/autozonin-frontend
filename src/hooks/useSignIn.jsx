import { authApi } from "../api/auth";
import { useAuthContext } from "./useContexts";

export const useSignIn = () => {
  const { dispatch } = useAuthContext();

  const signIn = async (data) => {
    try {
      const result = await authApi.login(data);
      dispatch({ type: "LOGIN", payload: result });
    } catch (error) {
      console.error(error);
    }
  };

  return { signIn };
};
