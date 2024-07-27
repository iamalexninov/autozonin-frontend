import { useEffect } from "react";

import { useVehiclesContext } from "./useContexts";
import { vehicleApi } from "../api/vehicles";

export const useGetVehicles = (params = {}) => {
  const { vehicles, dispatch } = useVehiclesContext();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await vehicleApi.renderVehicles(params);
        dispatch({ type: "VEHICLES", payload: data });
      } catch (error) {
        console.log(error);
      }
    };

    if (Object.keys(params).length) {
      fetchVehicles();
    }
  }, [params, dispatch]);

  return { vehicles };
};
