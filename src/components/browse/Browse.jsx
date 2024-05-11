import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { BrowseByType } from "./browse-by-identifier/BrowseByType";
import { BrowseByMake } from "./browse-by-identifier/BrowseByMake";

export const BrowseSection = () => {
  return (
    <section className={styles.browse}>
      <Wrapper>
        <div className={styles.browse_container}>
          <BrowseByMake />
          <BrowseByType />
        </div>
      </Wrapper>
    </section>
  );
};
