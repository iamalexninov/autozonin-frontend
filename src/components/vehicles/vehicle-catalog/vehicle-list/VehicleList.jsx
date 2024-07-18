import { useGetVehicles } from "../../../../hooks/useGetVehicles";

import { VehicleCard } from "../../vehicle-card/VehicleCard";

export const VehicleList = () => {
  const { vehicles } = useGetVehicles();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
      {vehicles &&
        vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle._id} />
        ))}
    </div>
  );
};
