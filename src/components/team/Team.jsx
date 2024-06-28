import styles from "./style.module.css";
import { members } from "./Text";

import { Wrapper } from "../global/wrapper/Wrapper";

export const Team = () => {
  return (
    <section className="py-20">
      <Wrapper>
        <h3 className="text-2xl mb-12 text-center">Our Team</h3>
        <TeamRecords records={members} />
      </Wrapper>
    </section>
  );
};

const TeamRecords = ({ records }) => {
  return (
    <ul className="flex flex-wrap gap-3 justify-center lg:justify-between">
      {records.map((record) => (
        <TeamRecord key={record.name} record={record} />
      ))}
    </ul>
  );
};

const TeamRecord = ({ record }) => {
  return (
    <li className="relative w-full max-w-52 lg:max-w-xs">
      <img src={record.img} alt={record.name} className="h-full max-h-96 w-full rounded-md"/>
      <div className="absolute bottom-3 left-3">
        <p className="bg-gray-200 text-center p-2 rounded mb-2 text-xs">{record.name}</p>
        <p className="bg-gray-200 text-center p-2 rounded text-xs">{record.role}</p>
      </div>
    </li>
  );
};
