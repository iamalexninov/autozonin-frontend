import styles from "./style.module.css";
import { Wrapper } from "../global/wrapper/Wrapper";
import { Link } from "react-router-dom";

export const AutoHub = () => {
  return (
    <section className={styles.autohub}>
      <Wrapper>
        <div className={styles.autohub_items}>
          <RenderAutohubSection
            header="Are You Looking For a Car?"
            path="/catalogue"
            className="autohub_buying"
          />
          <RenderAutohubSection
            header="Do You Want to Sell a Car?"
            path="/profile"
            className="autohub_selling"
          />
        </div>
      </Wrapper>
    </section>
  );
};

const RenderAutohubSection = ({ header, desc, path, className }) => {
  return (
    <div className={[styles[className], styles.autohub_section].join(" ")}>
      <h3 className={styles.autohub_section_header}>{header}</h3>
      <p className={styles.autohub_section_desc}>
        We are committed to providing our customers with exceptional service.
      </p>
      <Link to={path} className={styles.autohub_btn}>
        Get Started
      </Link>
    </div>
  );
};
