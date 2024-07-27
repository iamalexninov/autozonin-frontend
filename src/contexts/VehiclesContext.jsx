import { createContext, useEffect, useReducer } from "react";

export const VehiclesContext = createContext();

export const vehiclesReducer = (state, action) => {
  switch (action.type) {
    case "VEHICLE":
      return { vehicle: action.payload };
    case "VEHICLES":
      return { vehicles: action.payload };
    case "VEHICLE_CREATE":
      return {
        ...state,
        vehicles: [action.payload],
      };
    default:
      return state;
  }
};

export const VehiclesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(vehiclesReducer, {
    vehicle: {},
    vehicles: [],
  });

  useEffect(()=>{
    console.log("VehiclesContext:", state);
  },[])

  return (
    <VehiclesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VehiclesContext.Provider>
  );
};
