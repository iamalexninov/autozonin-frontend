import { GlobalIcon } from "../../global/GlobalIcon";

export const ContactsListRecord = ({ record }) => {
  return (
    <li className="flex gap-2">
      <div className="flex items-center rounded-full bg-cape-green p-3 text-white">
        <GlobalIcon type={record.icon} size={22} />
      </div>
      <div>
        <p className="text-sm font-600">{record.label}</p>
        <p className="text-gray-500 text-base">{record.value}</p>
      </div>
    </li>
  );
};
