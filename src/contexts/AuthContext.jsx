import { createContext, useEffect, useReducer } from "react";
import { getUser } from "../utils/localeStorage";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_USERS":
      return { users: action.payload };
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    users: [],
  });

  useEffect(() => {
    const user = getUser();

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  console.log("AuthContext:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
