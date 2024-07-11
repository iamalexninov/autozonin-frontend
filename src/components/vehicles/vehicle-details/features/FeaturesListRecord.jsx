import { GlobalIcon } from "../../../global/GlobalIcon";

export const FeaturesListRecord = ({ feature }) => {
  return (
    <div className="flex gap-1 items-center">
      <div className="p-1 bg-cape-green text-white rounded-full">
        <GlobalIcon type="check" size={12} />
      </div>
      <p className="text-sm">{feature}</p>
    </div>
  );
};
