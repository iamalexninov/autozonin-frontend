import { features } from "./Text";

import { Wrapper } from "../global/wrapper/Wrapper";

export const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <Wrapper>
        <h3 className="text-2xl mb-10">Why Choose Us?</h3>
        <FeaturesRecords records={features} />
      </Wrapper>
    </section>
  );
};

const FeaturesRecords = ({ records }) => {
  return (
    <ul className="flex flex-wrap justify-between">
      {records.map((record) => (
        <FeaturesRecord key={record.type} record={record} />
      ))}
    </ul>
  );
};

const FeaturesRecord = ({ record }) => {
  return (
    <li className="max-w-72">
      <p className="mb-3 text-base font-600">{record.type}</p>
      <p>{record.desc}</p>
    </li>
  );
};
