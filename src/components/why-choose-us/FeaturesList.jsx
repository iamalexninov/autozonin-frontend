import { FeaturesListRecord } from "./FeaturesListRecord";

export const FeaturesList = () => {
  const featuresmockdata = [
    {
      type: "Comprehensive Inventory Management System",
      desc: "An integrated system for managing and displaying new and used car inventories online, allowing customers to easily browse and check real-time availability.",
    },
    {
      type: "Customer Relationship Management System",
      desc: "A CRM tailored for dealerships helps manage customer interactions, track leads, schedule test drives, and improve follow-ups, fostering long-term relationships and increasing sales.",
    },
    {
      type: "On-Site Financing and Insurance Services",
      desc: "Providing financing and insurance options on-site streamlines the purchasing process, enabling customers to complete all necessary paperwork conveniently at the dealership.",
    },
    {
      type: "Service and Maintenance Department",
      desc: "A fully equipped service department offering routine maintenance, repairs, and parts replacement enhances post-sale customer satisfaction and encourages repeat business.",
    },
  ];

  return (
    <ul className="flex flex-wrap justify-between">
      {featuresmockdata.map((record) => (
        <FeaturesListRecord key={record.type} record={record} />
      ))}
    </ul>
  );
};
