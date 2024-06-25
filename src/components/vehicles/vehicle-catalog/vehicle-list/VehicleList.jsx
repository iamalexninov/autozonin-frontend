import { useGetVehicles } from "../../../../hooks/useGetVehicles";

import { VehicleCard } from "../../VehicleCard";

export const VehicleList = () => {
  const { vehicles } = useGetVehicles();

  return (
    <div>
      {vehicles &&
        vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle._id} />
        ))}
    </div>
  );
};
