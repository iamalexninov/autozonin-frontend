import { GlobalIcon } from "../../../global/GlobalIcon";

export const VehicleOverview = ({ data }) => {
  const dataVehicleRecords = [
    {
      label: "Body",
      value: data && data.type,
      icon: "car",
    },
    {
      label: "Condition",
      value: data && data.condition,
      icon: "filter",
    },
    {
      label: "Fuel Type",
      value: data && data.fuelType,
      icon: "petrol",
    },
    {
      label: "Year",
      value: data && data.year,
      icon: "calendar",
    },
    {
      label: "Transmission",
      value: data && data.transmission,
      icon: "transmission",
    },
    {
      label: "Drive Type",
      value: data && data.driveType,
      icon: "drive",
    },
    {
      label: "Engine Size",
      value: data && data.engineSize,
      icon: "engine",
    },
    {
      label: "Doors",
      value: data && data.doors,
      icon: "doors",
    },
    {
      label: "Cylinders",
      value: data && data.cylinder,
      icon: "cylinders",
    },
    {
      label: "Color",
      value: data && data.color,
      icon: "color",
    },
    {
      label: "VIN",
      value: data && data.vin,
      icon: "vin",
    },
  ];

  return (
    <div className="bg-slate-50 p-8 border border-gray-300 rounded-3xl mb-10">
      <h5 className="font-600 mb-10 text-lg">Vehicle Overview</h5>
      {dataVehicleRecords.map((vehicle) => (
        <div className="flex items-center justify-between gap-2 mb-5" key={vehicle.label}>
          <div className="flex items-center gap-2 text-cape-green">
            <GlobalIcon type={vehicle.icon} size={30}/>
            <p className="text-base w-full font-600 text-black">{vehicle.label}</p>
          </div>
          <div className="w-full max-w-52 bg-cape-green h-0.5 border border-dotted"></div>
          <p className="text-base">{vehicle.value}</p>
        </div>
      ))}
    </div>
  );
};
