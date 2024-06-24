import { links } from "./Text";

import { Link } from "react-router-dom";
import { useMenuContext } from "../../../../hooks/useContexts";

import { GlobalIcon } from "../../../global/GlobalIcon";

export const LinkEntries = () => {
  const { navbarMenu } = useMenuContext();

  return (
    <ul className="flex flex-col gap-8 my-8 lg:flex-row lg:gap-4 lg:my-0">
      {links.map((record) => (
        <LinkEntry
          record={record}
          key={record.text}
          closeNavbar={navbarMenu.closeNavbar}
        />
      ))}
    </ul>
  );
};

const LinkEntry = ({ record, closeNavbar }) => {
  return (
    <li onClick={closeNavbar}>
      <Link to={record.path} className="flex items-center gap-2 text-base">
        <GlobalIcon type={record.icon} size={18} />
        <p>{record.text}</p>
      </Link>
    </li>
  );
};
