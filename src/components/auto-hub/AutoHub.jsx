import styles from './style.module.css'

import { AutoHubNavigator } from "./auto-hub-navigators/AutoHubNavigator";

export const AutoHub = () => {
  return (
    <section className={styles.hub}>
      <AutoHubNavigator navigator="seeker" />
      <AutoHubNavigator navigator="seller" />
    </section>
  );
};
