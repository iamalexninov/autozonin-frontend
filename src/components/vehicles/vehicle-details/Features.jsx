import { GlobalIcon } from "../../global/GlobalIcon";

export const Features = () => {
  return (
    <div className="bg-white p-8 border border-gray-300 rounded-3xl mb-10">
      <h3 className="text-xl font-600 mb-5">Features</h3>
      <div>
        <div className="flex gap-2 items-center">
          <div className="p-1 bg-cape-light text-white rounded-full">
            <GlobalIcon type="check" size={15}/>
          </div>
          <p>Air Conditioner</p>
        </div>
      </div>
    </div>
  );
};
