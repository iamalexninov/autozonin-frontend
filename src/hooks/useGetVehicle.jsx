import { useEffect } from "react";
import { useVehiclesContext } from "./useContexts";
import { vehicleApi } from "../api/vehicles";

export const useGetVehicle = (id) => {
  const { vehicle, dispatch } = useVehiclesContext();

  useEffect(() => {
    const fetchVehicle = async () => {
      const result = await vehicleApi.renderVehicle(id);
      dispatch({ type: "VEHICLE", payload: result });
    };

    fetchVehicle();
  }, []);

  return { vehicle };
};
