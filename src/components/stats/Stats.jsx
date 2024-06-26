import { stats } from "./Text";

import { Wrapper } from "../global/wrapper/Wrapper";

export const Stats = () => {
  return (
    <section className="py-10">
      <Wrapper>
        <StatsRecords records={stats} />
      </Wrapper>
    </section>
  );
};

const StatsRecords = ({ records }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-5 lg:gap-20">
      {records.map((record) => (
        <StatsRecord key={record.type} record={record} />
      ))}
    </ul>
  );
};

const StatsRecord = ({ record }) => {
  return (
    <li className="flex flex-col items-center">
      <p className="text-3xl font-700 mb-2">{record.value}</p>
      <p className="uppercase text-xl">{record.type}</p>
    </li>
  );
};
