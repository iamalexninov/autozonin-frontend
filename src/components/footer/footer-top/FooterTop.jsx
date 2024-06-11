import styles from "./style.module.css";
import { mockdata } from "./Text";

import { Link } from "react-router-dom";

import { GlobalIcon } from "../../global/GlobalIcon";

export const FooterTop = () => {
  return (
    <div className={styles.footer_top}>
      <RenderFooterSection section={mockdata.company} />
      <RenderFooterSection section={mockdata.quickLinks} />
      <RenderFooterSection section={mockdata.brands} />
      <RenderFooterSection section={mockdata.types} />
      <ConnectWithUs />
    </div>
  );
};

const RenderFooterSection = ({ section }) => {
  return (
    <div className={styles.footer_section}>
      <p className={styles.footer_section_header}>{section.header}</p>
      <ul className={styles.footer_section_links}>
        <RenderFooterSectionLinks links={section.links} />
      </ul>
    </div>
  );
};

const RenderFooterSectionLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <li className={styles.footer_section_link} key={link.text}>
          <Link to={link.path}>{link.text}</Link>
        </li>
      ))}
    </>
  );
};

const ConnectWithUs = () => {
  return (
    <div className={styles.footer_connect}>
      <p className={styles.footer_connect_header}>Connect With Us</p>
      <div className={styles.footer_connect_icons}>
        <div className={styles.footer_connect_icon}>
          <GlobalIcon type="facebook" />
        </div>
        <div className={styles.footer_connect_icon}>
          <GlobalIcon type="twitter" />
        </div>
        <div className={styles.footer_connect_icon}>
          <GlobalIcon type="pinterest" />
        </div>
        <div className={styles.footer_connect_icon}>
          <GlobalIcon type="linkedin" />
        </div>
      </div>
    </div>
  );
};
