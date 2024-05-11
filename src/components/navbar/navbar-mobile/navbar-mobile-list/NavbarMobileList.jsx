import styles from "./style.module.css";

import { GlobalIcon } from "../../../global/GlobalIcon";
import { NavbarMobileItem } from "../navbar-mobile-item/NavbarMobileItem";

import { useMobileMenuContext } from "../../../../hooks/useContexts";

export const NavbarMobileList = ({ data }) => {
  const { toggle } = useMobileMenuContext();

  const handleMobileMenu = () => {
    toggle();
  };

  return (
    <div className={styles.mobile_container}>
      <div className={styles.mobile_container_icon} onClick={handleMobileMenu}>
        <GlobalIcon type="exit" size={35} />
      </div>
      <ul className={styles.mobile_container_list}>
        {data.map((item) => (
          <NavbarMobileItem
            key={item.content}
            content={item.content}
            path={item.path}
          />
        ))}
      </ul>
    </div>
  );
};
