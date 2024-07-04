import { offices } from "./Text";

import { GlobalIcon } from "../../global/GlobalIcon";

export const Offices = () => {
  return (
    <div className="my-10">
      <h2 className="mb-8 text-2xl">Our Offices</h2>
      <OfficeRecords records={offices} />
    </div>
  );
};

const OfficeRecords = ({ records }) => {
  return (
    <ul className="flex flex-col justify-between gap-5 lg:flex-row">
      {records.map((record) => (
        <OfficeRecord key={record.town} record={record} />
      ))}
    </ul>
  );
};

const OfficeRecord = ({ record }) => {
  return (
    <li className="py-5 px-8 border border-gray-400 rounded-xl">
      <p className="mb-3 font-600 text-lg">{record.town}</p>
      <p className="mb-5 font-600">{record.address}</p>
      <div className="flex items-center mb-5 text-gray-500 text-sm font-600">
        <p>See on Map</p>
        <GlobalIcon type="arrowRightInline" />
      </div>
      <div className="flex items-center gap-1 font-600 text-sm mb-3">
        <div className="bg-cape-green text-white p-2 rounded-full">
          <GlobalIcon type="email" size={14} />
        </div>
        <p>{record.email}</p>
      </div>
      <div className="flex items-center gap-1 font-600 text-sm">
        <div className="bg-cape-green text-white p-2 rounded-full">
          <GlobalIcon type="phone" size={14} />
        </div>
        <p>{record.phone}</p>
      </div>
    </li>
  );
};
