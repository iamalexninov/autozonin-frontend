import { reviews } from "./Text";

import { Wrapper } from "../global/wrapper/Wrapper";
import { GlobalIcon } from "../global/GlobalIcon";

export const Testimonials = () => {
  return (
    <section className="py-14">
      <Wrapper>
        <h2 className="text-2xl mb-10">What Our Customers Say</h2>
        <TestimonialsRecords records={reviews} />
      </Wrapper>
    </section>
  );
};

const TestimonialsRecords = ({ records }) => {
  return (
    <ul className="flex flex-wrap gap-5 justify-center">
      {records.map((record) => (
        <TestimonialsRecord key={record.title} record={record} />
      ))}
    </ul>
  );
};

const TestimonialsRecord = ({ record }) => {
  return (
    <li className="rounded-2xl bg-slate-50 p-16 lg:max-w-sm">
      <div className="flex justify-between items-center mb-5">
        <h5 className="text-xl font-600">{record.title}</h5>
        <GlobalIcon type="quote" />
      </div>
      <p className="text-sm font-600 mb-16">{record.opinion}</p>
      <div className="flex items-center gap-2">
        <img src={record.img} alt={record.name} className="object-cover w-14 h-14 rounded-full"/>
        <div>
          <p className="text-sm font-600">{record.name}</p>
          <p className="text-sm">{record.role}</p>
        </div>
      </div>
    </li>
  );
};
