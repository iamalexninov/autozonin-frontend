import styles from "./style.module.css";

import { Login } from "./Login";
import { Register } from "./Register";
import { Link, useLocation } from "react-router-dom";

export const Auth = () => {
  const url = useLocation();

  const mockdata = [
    { path: "/login", text: "Sign In" },
    { path: "/register", text: "Sign Up" },
  ];

  return (
    <section className={styles.auth}>
      <div className={styles.auth_wrapper}>
        <div className={styles.auth_nav}>
          {mockdata.map((record) => (
            <Link
              key={record.path}
              to={record.path}
              className={styles.auth_nav_link}
            >
              {record.text}
            </Link>
          ))}
        </div>
        <div>{url.pathname === "/login" ? <Login /> : <Register />}</div>
      </div>
    </section>
  );
};
