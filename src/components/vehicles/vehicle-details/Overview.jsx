import { GlobalIcon } from "../../global/GlobalIcon";
import { useGetVehicle } from "../../../hooks/useGetVehicle";

export const VehicleOverview = ({ id }) => {
  const { vehicle } = useGetVehicle(id);
  const dataVehicleRecords = [
    {
      label: "Body",
      value: vehicle && vehicle.details ? vehicle.details.type : "Loading...",
      icon: "car",
    },
    {
      label: "Condition",
      value:
        vehicle && vehicle.details ? vehicle.details.condition : "Loading...",
      icon: "filter",
    },
    {
      label: "Year",
      value: vehicle && vehicle.details ? vehicle.details.year : "Loading...",
      icon: "calendar",
    },
    {
      label: "Transmission",
      value:
        vehicle && vehicle.details
          ? vehicle.details.transmission
          : "Loading...",
      icon: "transmission",
    },
    {
      label: "Color",
      value: vehicle && vehicle.details ? vehicle.details.color : "Loading...",
      icon: "color",
    },
  ];

  return (
    <div className="bg-white p-5 lg:p-8 border border-gray-300 rounded-3xl mb-10">
      <h3 className="font-600 mb-10 text-xl">Vehicle Overview</h3>
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
