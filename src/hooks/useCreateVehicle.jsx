import { vehicleApi } from "../api/vehicles";
import { useVehiclesContext } from "./useContexts";

export const useCreateVehicle = () => {
  const { dispatch } = useVehiclesContext();

  const createRecord = async (data) => {
    const vehicle = await vehicleApi.createVehicle(data);
    dispatch({ type: "VEHICLE_CREATE", payload: vehicle });
  };

  return { createRecord };
};
