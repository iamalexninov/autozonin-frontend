import styles from "./style.module.css";

import { Link, useLocation } from "react-router-dom";
import { GlobalIcon } from "../../global/GlobalIcon";
import { endpoints } from "../../../utils/endpoints";

export const NavbarLinkRecords = ({ records, type }) => {
  return (
    <ul
      className={[
        styles.records,
        type === "mobile"
          ? styles.mobile_records
          : type === "desktop"
          ? styles.desktop_records
          : null,
      ].join(" ")}
    >
      {records.map((record) => (
        <NavbarLinkRecord key={record.text} record={record} type={type} />
      ))}
      {type === "desktop" && <NavbarLinkRecordAuth />}
      <NavbarLinkRecordSell type={type} />
    </ul>
  );
};

const NavbarLinkRecord = ({ record, type }) => {
  const url = useLocation();

  return (
    <li
      className={[
        styles.record,
        type === "mobile"
          ? record.path === url.pathname
            ? [styles.mobile_record, styles.active].join(" ")
            : styles.mobile_record
          : type === "desktop"
          ? styles.desktop_record
          : null,
      ].join(" ")}
    >
      <Link to={record.path} className={styles.record_link}>
        {record.text}
      </Link>
    </li>
  );
};

const NavbarLinkRecordAuth = () => {
  return (
    <li>
      <Link className={styles.record_auth} to={endpoints.login}>
        <GlobalIcon type="user" />
        <p>Sign In</p>
      </Link>
    </li>
  );
};

const NavbarLinkRecordSell = ({ type }) => {
  return (
    <li>
      <Link to={endpoints.dashboardSubmit}>
        <button
          className={
            type === "mobile"
              ? styles.sell_mobile_btn
              : type === "desktop"
              ? styles.sell_desktop_btn
              : null
          }
        >
          sell vehicle
        </button>
      </Link>
    </li>
  );
};
