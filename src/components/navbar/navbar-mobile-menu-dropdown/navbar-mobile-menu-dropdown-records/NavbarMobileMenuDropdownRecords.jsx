import styles from "./style.module.css";

import { Link, useLocation } from "react-router-dom";

export const RenderRecords = ({ records }) => {
  return (
    <ul className={styles.records}>
      {records.map((record) => (
        <RenderRecord key={record.path} record={record} />
      ))}
    </ul>
  );
};

const RenderRecord = ({ record }) => {
  const url = useLocation();

  return (
    <>
      {record.path === "/profile" ? (
        <li>
          <Link to={record.path}>
            <button className={styles.record_btn}>{record.text}</button>
          </Link>
        </li>
      ) : (
        <li
          className={
            record.path === url.pathname
              ? [styles.record, styles.active].join(" ")
              : styles.record
          }
        >
          <Link to={record.path}>{record.text}</Link>
        </li>
      )}
    </>
  );
};
