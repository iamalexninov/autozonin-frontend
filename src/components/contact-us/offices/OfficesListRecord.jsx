import { GlobalIcon } from "../../global/GlobalIcon";

export const OfficesListRecord = ({ record }) => {
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
