import { GlobalIcon } from "../../global/GlobalIcon";
import { useGetVehicle } from "../../../hooks/useGetVehicle";

export const VehicleOverview = ({ id }) => {
  const { vehicle } = useGetVehicle(id);
  const dataVehicleRecords = [
    {
      label: "Body",
      value: vehicle.details && vehicle.details.type,
      icon: "car",
    },
    {
      label: "Condition",
      value: vehicle.details && vehicle.details.condition,
      icon: "filter",
    },
    {
      label: "Fuel Type",
      value: vehicle.details && vehicle.details.fuelType,
      icon: "petrol",
    },
    {
      label: "Year",
      value: vehicle.details && vehicle.details.year,
      icon: "calendar",
    },
    {
      label: "Transmission",
      value: vehicle.details && vehicle.details.transmission,
      icon: "transmission",
    },
    {
      label: "Drive Type",
      value: vehicle.details && vehicle.details.driveType,
      icon: "drive",
    },
    {
      label: "Engine Size",
      value: vehicle.details && vehicle.details.engineSize,
      icon: "engine",
    },
    {
      label: "Doors",
      value: vehicle.details && vehicle.details.doors,
      icon: "doors",
    },
    {
      label: "Cylinders",
      value: vehicle.details && vehicle.details.cylinder,
      icon: "cylinders",
    },
    {
      label: "Color",
      value: vehicle.details && vehicle.details.color,
      icon: "color",
    },
    {
      label: "VIN",
      value: vehicle.details && vehicle.details.vin,
      icon: "vin",
    },
  ];

  return (
    <div className="bg-slate-50 p-5 lg:p-8 border border-gray-300 rounded-3xl mb-10">
      <h5 className="font-600 mb-10 text-lg">Vehicle Overview</h5>
      {dataVehicleRecords.map((vehicle) => (
        <div
          className="flex items-center justify-between gap-2 mb-5"
          key={vehicle.label}
        >
          <div className="flex items-center gap-2 text-cape-green">
            <GlobalIcon type={vehicle.icon} size={30} />
            <p className="text-base w-full font-600 text-black">
              {vehicle.label}
            </p>
          </div>
          <div className="w-full max-w-52 bg-cape-green h-0.5 border border-dotted"></div>
          <p className="text-base">{vehicle.value}</p>
        </div>
      ))}
    </div>
  );
};
