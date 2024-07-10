import { GlobalIcon } from "../../global/GlobalIcon";

export const SocialsListRecord = ({ record }) => {
  return (
    <li className="bg-cape-light text-white rounded-full cursor-pointer p-3">
      <GlobalIcon type={record} size={22} />
    </li>
  );
};
