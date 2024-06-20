import { createContext, useReducer } from "react";

export const VehiclesContext = createContext();

export const vehiclesReducer = (state, action) => {
  switch (action.type) {
    case "VEHICLE":
      return { vehicle: action.payload };
    case "VEHICLES":
      return { vehicles: action.payload };
    case "VEHICLE_CREATE":
      return {
        vehicle: [action.payload, ...state.result],
      };
    default:
      return state;
  }
};

export const VehiclesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(vehiclesReducer, {
    vehicle: null,
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
