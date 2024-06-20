import { useEffect } from "react";

import { useVehiclesContext } from "./useContexts";
import { vehicleApi } from "../api/vehicles";

export const useGetVehicles = () => {
  const { vehicles, dispatch } = useVehiclesContext();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await vehicleApi.renderVehicles();
        dispatch({ type: "VEHICLES", payload: data });
      } catch (error) {
        console.log(error);
      }
    };

    fetchVehicles();
  }, []);

  return { vehicles };
};
