import { Link } from "react-router-dom";
import { GlobalIcon } from "../../global/GlobalIcon";

export const CardDetails = ({ id, price }) => {
  return (
    <div>
    <div className="flex justify-between items-center">
      <p className="font-700 text-xl">${price}</p>
      <Link to={`/catalog/${id}`} className="flex items-center gap-1">
        <p className="hover:text-cape-green">More</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
    </div>
  );
};
