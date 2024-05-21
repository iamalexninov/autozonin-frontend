import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { GlobalIcon } from "../GlobalIcon";

export const SectionHeaderWithLinkBtn = ({
  color,
  header,
  linkText,
  linkPath,
}) => {
  const lightStyles = {
    color: "var(--light-gray)",
  };

  const darkStyles = {
    color: "var(--black)",
  };

  const renderStyles = color === "light" ? lightStyles : darkStyles;

  return (
    <div className={styles.header} style={renderStyles}>
      <h3>{header}</h3>
      <Link to={linkPath} className={styles.header_link} style={renderStyles}>
        <p>{linkText}</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
  );
};
