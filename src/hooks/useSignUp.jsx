import { authApi } from "../api/auth";
import { useAuthContext } from "./useContexts";

export const useSignUp = () => {
  const { dispatch } = useAuthContext();

  const signUp = async (data) => {
    try {
      const result = await authApi.register(data);
      dispatch({ type: "LOGIN", payload: result });
    } catch (error) {
      console.error(error);
    }
  };

  return { signUp };
};
