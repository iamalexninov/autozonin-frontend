import { StatsListRecord } from "./StatsListRecord";

export const StatsList = () => {
  const statsmockdata = [
    {
      type: "cars for sale",
      value: "30K+",
    },
    {
      type: "dealer reviews",
      value: "2K+",
    },
    {
      type: "visitors per day",
      value: "1K+",
    },
    {
      type: "verified dealers",
      value: "1.5K+",
    },
  ];

  return (
    <ul className="flex flex-wrap justify-center gap-10 lg:gap-20">
      {statsmockdata.map((record) => (
        <StatsListRecord key={record.type} record={record} />
      ))}
    </ul>
  );
};
