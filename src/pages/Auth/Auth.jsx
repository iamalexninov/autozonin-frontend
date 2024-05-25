import styles from "./style.module.css";

import { useLocation } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";
import { AuthNav } from "./auth-nav/AuthNav";

export const Auth = () => {
  const url = useLocation();

  return (
    <section className={styles.auth}>
      <div className={styles.auth_wrapper}>
        <AuthNav />
        <div>{url.pathname === "/login" ? <Login /> : <Register />}</div>
      </div>
    </section>
  );
};
