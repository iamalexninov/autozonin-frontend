import img1 from "../../../../assets/images/jpg/nadq.jpg";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const ReviewCard = () => {
  return (
    <div className="border border-gray-300 p-8 rounded-3xl">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <img
            src={img1}
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <div>
            <p className="text-base">Alex Ninov</p>
            <p className="text-sm text-gray-400">November 13,2024y.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex p-3 rounded-full bg-blue-600 hover:bg-blue-300 text-blue-300 hover:text-blue-600 cursor-pointer">
            <GlobalIcon type="edit" />
          </div>
          <div className="flex p-3 rounded-full bg-red-600 text-red-300 hover:bg-red-300 hover:text-red-600 cursor-pointer">
            <GlobalIcon type="bin" />
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor labore
        temporibus facilis, dignissimos adipisci dolorem pariatur alias
        molestias nihil et nesciunt, reprehenderit odio aliquid laudantium eum
        id suscipit harum officia.
      </p>
    </div>
  );
};
