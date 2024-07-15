import { Link } from "react-router-dom";
import { GlobalIcon } from "../global/GlobalIcon";
import { LinksList } from "./menu/links/LinksList";
import { MenuActionPanel } from "./menu/MenuActionPanel";
import { useMenuContext } from "../../hooks/useContexts";

export const Navbar = () => {
  const { navbarMenu } = useMenuContext();

  return (
    <header className="bg-slate-50 flex p-5 justify-between items-center w-full lg:fixed lg:top-0 lg:z-30">
      <div>
        <Link to="/" className="text-2xl font-black text-black">
          ZONIN
        </Link>
      </div>
      <nav>
        <div
          className={`fixed top-0 z-30 bg-white p-8 w-60 sm:w-96 lg:relative lg:top-0 lg:left-0 lg:bg-transparent lg:w-full lg:flex lg:items-center lg:gap-7 lg:p-0 ${
            navbarMenu.nav ? "left-0 h-full" : "-left-full"
          } `}
        >
          <div className="lg:hidden">
            <Link to="/">
              <h3 className="text-2xl font-black  text-black">ZONIN</h3>
            </Link>
          </div>
          <LinksList />
          <MenuActionPanel />
        </div>
      </nav>
      <div
        onClick={navbarMenu.toggleNavbar}
        className="cursor-pointer border-gray-700 p-2 text-black bg-slate-200 rounded-2xl lg:hidden"
      >
        <GlobalIcon type={navbarMenu.nav ? "exit" : "bars"} />
      </div>
    </header>
  );
};
