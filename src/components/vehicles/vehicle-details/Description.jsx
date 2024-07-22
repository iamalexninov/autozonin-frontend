import { GlobalIcon } from "../../global/GlobalIcon";

export const Description = ({ desc }) => {
  return (
    <div className="bg-white p-8 border border-gray-300 rounded-3xl mb-10">
      <h3 className="text-xl font-600 mb-5">Description</h3>
      <p className="text-base mb-5">{desc}</p>
      <div className="flex justify-center gap-2 p-3 rounded bg-cape-light text-white max-w-52">
        <GlobalIcon type="document" />
        <p>Car-Brochure.Pdf</p>
      </div>
    </div>
  );
};
