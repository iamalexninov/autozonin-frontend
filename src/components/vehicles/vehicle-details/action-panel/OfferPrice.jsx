import { RenderField } from "../../../global/fields/RenderField";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const OfferPrice = ({ active, setActive }) => {
  const handleClick = (e) => {
    if (setActive) {
      setActive(false);
    }
  };

  return (
    <div
      className={`${
        active ? "fixed top-0 left-0 z-40 w-full h-screen" : "hidden"
      }`}
    >
      <div className="fixed bg-slate-800 opacity-70 w-full h-screen"></div>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full px-5">
        <div className="bg-white w-full max-w-2xl p-10 rounded-3xl">
          <div className="flex justify-between items-center mb-8">
            <p className="text-xl font-600">Offer Price</p>
            <div
              className="bg-cape-light text-white p-2 rounded-full hover:bg-red-700 cursor-pointer"
              onClick={handleClick}
            >
              <GlobalIcon type="exit" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <RenderField
              attributes={{
                type: "text",
                name: "username",
                placeholder: "Enter Username...",
              }}
            />
            <RenderField
              attributes={{
                type: "text",
                name: "email",
                placeholder: "Enter Email...",
              }}
            />
            <RenderField
              attributes={{
                type: "text",
                name: "phone",
                placeholder: "Enter Phone Number...",
              }}
            />
            <RenderField
              attributes={{
                type: "number",
                name: "offer",
                placeholder: "Enter Offer...",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
