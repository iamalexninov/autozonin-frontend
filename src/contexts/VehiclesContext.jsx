import { createContext, useReducer } from "react";

export const VehiclesContext = createContext();

export const vehiclesReducer = (state, action) => {
  switch (action.type) {
    case "VEHICLES":
      return { vehicles: action.payload };
    case "VEHICLE_CREATE":
      return {
        vehicle: [action.payload, ...state.result],
      };
    // edit, delete
    default:
      return state;
  }
};

export const VehiclesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(vehiclesReducer, {
    vehicles: null,
  });

  // TODO:Remove it later
  console.log("VehiclesContext:", state);

  return (
    <VehiclesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VehiclesContext.Provider>
  );
};
