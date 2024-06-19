import { useEffect, useState } from "react";
import { useVehiclesContext } from "./useContexts";
import { vehicleApi } from "../api/vehicles";

export const useGetVehicles = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { vehicles, dispatch } = useVehiclesContext();

  useEffect(() => {
    const fetchVehicles = async () => {
      setIsLoading(true);
      setError(null);

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
