import { GlobalIcon } from "../../global/GlobalIcon";

export const ConnectUs = () => {
  return (
    <div>
      <h4 className="text-lg mb-8 font-600 text-white">Connect With Us</h4>
      <div className="flex gap-4">
        <div className="bg-cape-light text-white flex p-4 rounded-md">
          <GlobalIcon type="facebook" />
        </div>
        <div className="bg-cape-light text-white flex p-4 rounded-md">
          <GlobalIcon type="twitter" />
        </div>
        <div className="bg-cape-light text-white flex p-4 rounded-md">
          <GlobalIcon type="pinterest" />
        </div>
        <div className="bg-cape-light text-white flex p-4 rounded-md">
          <GlobalIcon type="linkedin" />
        </div>
      </div>
    </div>
  );
};
