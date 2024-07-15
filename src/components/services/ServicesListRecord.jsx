import { GlobalIcon } from "../global/GlobalIcon";

export const ServicesListRecord = ({ feature }) => {
  return (
    <li className="flex items-center gap-2">
      <div className="bg-cape-green text-white p-2 border rounded">
        <GlobalIcon type="check" />
      </div>
      <p>{feature}</p>
    </li>
  );
};
