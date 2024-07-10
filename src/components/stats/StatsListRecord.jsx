export const StatsListRecord = ({ record }) => {
  return (
    <li className="flex flex-col items-center">
      <p className="text-3xl font-700 mb-2">{record.value}</p>
      <p className="uppercase text-xl">{record.type}</p>
    </li>
  );
};
