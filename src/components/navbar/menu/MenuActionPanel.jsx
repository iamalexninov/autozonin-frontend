import { Link } from "react-router-dom";

import { useAuthContext, useMenuContext } from "../../../hooks/useContexts";

export const MenuActionPanel = () => {
  const navbarMenu = useMenuContext();

  const handleOnClick = () => {
    navbarMenu.closeNavbar();
  };

  const { user } = useAuthContext();

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <Link
        to={user ? "/dashboard" : "/user"}
        onClick={handleOnClick}
        className="bg-black text-white p-3 w-full rounded-md lg:w-40"
      >
        <p className="text-center uppercase">
          {user ? user.username : "Sign In"}
        </p>
      </Link>
      <Link
        to="/dashboard/submit-listing"
        onClick={handleOnClick}
        className="bg-cape-green text-white p-3 w-full rounded-md lg:w-40"
      >
        <p className="text-center uppercase">Sell</p>
      </Link>
    </div>
  );
};
