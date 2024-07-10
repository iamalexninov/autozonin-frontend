import { useGetVehicles } from "../../hooks/useGetVehicles";
import { VehicleCard } from "./VehicleCard";

export const RelatedVehicles = () => {
  const { vehicles } = useGetVehicles();

  return (
    <div className="mb-16">
      <h5 className="text-2xl font-600 mb-5">Related Listings</h5>
      <RelatedList records={vehicles} />
    </div>
  );
};

const RelatedList = ({ records }) => {
  return (
    <div className="flex justify-between gap-8">
      {records &&
        records
          .slice(0, 4)
          .map((vehicle, index) => (
            <VehicleCard vehicle={vehicle} key={index} />
          ))}
    </div>
  );
};
