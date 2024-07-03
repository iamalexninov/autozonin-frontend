import { contacts, socials } from "./Text";

import { GlobalIcon } from "../../global/GlobalIcon";

export const ContactDetails = () => {
  return (
    <div className="w-full rounded-xl p-10 border border-gray-400">
      <h5 className="mb-5 text-xl">Contact Details</h5>
      <p className="mb-8 text-sm text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
        provident sed tempore repellendus deserunt, quisquam maxime assumenda.
      </p>
      <ContactRecords records={contacts} />
      <SocialRecords records={socials} />
    </div>
  );
};

const ContactRecords = ({ records }) => {
  return (
    <ul className="flex flex-col gap-7 mb-10">
      {records.map((record) => (
        <ContactRecord key={record.label} record={record} />
      ))}
    </ul>
  );
};

const ContactRecord = ({ record }) => {
  return (
    <li className="flex gap-2">
      <div className="flex items-center rounded-full bg-cape-green p-3 text-white">
        <GlobalIcon type={record.icon} size={22}/>
      </div>
      <div>
        <p className="text-sm font-600">{record.label}</p>
        <p className="text-gray-500 text-base">{record.value}</p>
      </div>
    </li>
  );
};

const SocialRecords = ({ records }) => {
  return (
    <ul className="flex gap-5">
      {records.map((record) => (
        <SocialRecord key={record} record={record} />
      ))}
    </ul>
  );
};

const SocialRecord = ({ record }) => {
  return (
    <li className="bg-cape-light text-white rounded-full cursor-pointer p-3">
      <GlobalIcon type={record} size={22}/>
    </li>
  );
};
