import { Link } from "react-router-dom";
import { GlobalIcon } from "../../global/GlobalIcon";
import styles from "./style.module.css";

export const DashboardAside = () => {
  const paths = [
    {
      icon: "dashboard",
      path: "/dashboard",
      text: "Dashboard",
    },
    {
      icon: "profile",
      path: "/dashboard/profile",
      text: "My Profile",
    },
    {
      icon: "listing",
      path: "/dashboard/listings",
      text: "My Listings",
    },
    {
      icon: "favorite",
      path: "/dashboard/favorite",
      text: "My favorite",
    },
    {
      icon: "submitListing",
      path: "/dashboard/submit-listing",
      text: "Submit Listing",
    },
    {
      icon: "password",
      path: "/dashboard/change-password",
      text: " Change Password",
    },
    {
      icon: "logout",
      path: "/dashboard/logout",
      text: "Logout",
    },
  ];

  return (
    <aside className={styles.aside}>
      <LinkRecords records={paths} />
    </aside>
  );
};

const LinkRecords = ({ records }) => {
  return (
    <ul className={styles.aside_records}>
      {records.map((record) => (
        <LinkRecord key={record.link} record={record} />
      ))}
    </ul>
  );
};

const LinkRecord = ({ record }) => {
  return (
    <li className={styles.aside_record}>
      <Link to={record.path} className={styles.aside_link}>
        <GlobalIcon type={record.icon} size={21} />
        <p>{record.text}</p>
      </Link>
    </li>
  );
};
