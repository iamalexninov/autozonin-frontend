import { GlobalIcon } from "../../global/GlobalIcon";

export const VehicleOverview = ({ vehicle }) => {
  const dataVehicleRecords = [
    {
      label: "Category",
      value: vehicle && vehicle?.details?.type,
      icon: "car",
    },
    {
      label: "Condition",
      value: vehicle && vehicle?.details?.condition,
      icon: "filter",
    },
    {
      label: "Fuel Type",
      value: vehicle && vehicle?.details?.fuel,
      icon: "petrol",
    },
    {
      label: "Year",
      value: vehicle && vehicle?.details?.year,
      icon: "calendar",
    },
    {
      label: "Transmission",
      value: vehicle && vehicle?.details?.transmission,
      icon: "transmission",
    },
    {
      label: "Engine Size",
      value: vehicle && vehicle?.details?.engineSize,
      icon: "engine",
    },
    {
      label: "Doors",
      value: vehicle && vehicle?.details?.door,
      icon: "doors",
    },
    {
      label: "Cylinders",
      value: vehicle && vehicle?.details?.cylinder,
      icon: "cylinders",
    },
    {
      label: "Color",
      value: vehicle && vehicle?.details?.color,
      icon: "color",
    },
    {
      label: "VIN",
      value: vehicle && vehicle?.details?.vin,
      icon: "vin",
    },
  ];

  return (
    <div className="bg-white p-5 lg:p-8 border border-gray-300 rounded-3xl mb-10">
      <h3 className="font-600 mb-10 text-xl">Vehicle Overview</h3>
      {dataVehicleRecords.map((item) => (
        <div
          className="flex items-center justify-between gap-2 mb-8"
          key={item.label}
        >
          <div className="flex items-center gap-2 text-cape-green">
            <GlobalIcon type={item.icon} size={30} />
            <p className="text-base w-full font-600 text-black">{item.label}</p>
          </div>
          <div className="w-full max-w-52 bg-cape-green h-0.5 border border-dotted"></div>
          <p className="text-base">{item.value}</p>
        </div>
      ))}
    </div>
  );
};
