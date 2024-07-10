import { Link } from "react-router-dom";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const LinksListRecord = ({ record, closeNavbar }) => {
  return (
    <li onClick={closeNavbar}>
      <Link to={record.path} className="flex items-center gap-2 text-base">
        <GlobalIcon type={record.icon} size={18} />
        <p>{record.text}</p>
      </Link>
    </li>
  );
};
