import { LinksListRecord } from "./LinksListRecord";
import { useMenuContext } from "../../../../hooks/useContexts";

export const LinksList = () => {
  const { navbarMenu } = useMenuContext();

  const linksmockdata = [
    {
      path: "/",
      text: "Home",
      icon: "home",
    },
    {
      path: "/about",
      text: "About",
      icon: "about",
    },
    {
      path: "/catalog",
      text: "Catalog",
      icon: "catalog",
    },
    {
      path: "/contacts",
      text: "Contact",
      icon: "contact",
    },
  ];

  return (
    <ul className="flex flex-col gap-8 my-8 lg:flex-row lg:gap-4 lg:my-0">
      {linksmockdata.map((record) => (
        <LinksListRecord
          record={record}
          key={record.text}
          closeNavbar={navbarMenu.closeNavbar}
        />
      ))}
    </ul>
  );
};
