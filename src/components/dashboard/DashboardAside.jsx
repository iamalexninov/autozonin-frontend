import { Link, useNavigate } from "react-router-dom";
import { useMenuContext } from "../../hooks/useContexts";

import { GlobalIcon } from "../global/GlobalIcon";

export const DashboardAside = () => {
  const paths = [
    {
      icon: "submitListing",
      path: "/dashboard/submit-listing",
      text: "Submit Listing",
    },
    {
      icon: "logout",
      path: "/dashboard/logout",
      text: "Logout",
    },
  ];

  const { asideMenu } = useMenuContext();

  const handleClick = () => {
    asideMenu.toggleAside();
  };

  return (
    <>
      <aside
        className={`fixed top-0 pt-10 w-full max-w-64 z-40 bg-cape-green md:max-w-72 lg:relative lg:left-0 lg:max-w-80 ${
          asideMenu.aside ? "left-0 h-full" : "-left-full"
        }`}
      >
        <LinkRecords records={paths} />
      </aside>
      <div
        className="fixed top-32 right-0 bg-cape-green text-white p-3 rounded lg:hidden"
        onClick={handleClick}
      >
        <GlobalIcon type={asideMenu.aside ? "exit" : "bars"} />
      </div>
    </>
  );
};

const LinkRecords = ({ records }) => {
  return (
    <ul className="flex flex-col gap-10 px-10">
      <Link
        to="/"
        className="text-gray-200 flex gap-1 items-center"
        reloadDocument="true"
      >
        <GlobalIcon type="chevronLeft" size={25} />
        <p>Back To Home</p>
      </Link>
      {records.map((record) => (
        <LinkRecord key={record.link} record={record} />
      ))}
    </ul>
  );
};

const LinkRecord = ({ record }) => {
  return (
    <li className="bg-white p-4 rounded border border-cape-light">
      <Link
        to={record.path}
        className="flex justify-center items-center gap-2 text-cape-green font-600"
      >
        <GlobalIcon type={record.icon} size={23} />
        <p>{record.text}</p>
      </Link>
    </li>
  );
};
