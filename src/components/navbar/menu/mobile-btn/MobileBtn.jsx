import styles from "./style.module.css";

import { useMenuContext } from "../../../../hooks/useContexts";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const MobileBtn = ({ type }) => {
  const { navbarMenu } = useMenuContext();
  const { closeNavbar, openNavbar } = navbarMenu;

  return (
    <div
      className={[styles.btn, styles.open, styles.close].join(" ")}
      onClick={
        type === "close" ? closeNavbar : type === "open" ? openNavbar : null
      }
    >
      <GlobalIcon
        type={type === "close" ? "exit" : type === "open" ? "bars" : null}
      />
    </div>
  );
};
