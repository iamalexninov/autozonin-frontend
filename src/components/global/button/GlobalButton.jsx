import styles from "./style.module.css";

import { Link } from "react-router-dom";

export const GlobalButton = ({ btnVariant, btnType, path, text }) => {
  return (
    <RenderButton variant={btnVariant} type={btnType} path={path} text={text} />
  );
};

const RenderButton = ({ type, variant, path, text }) => {
  switch (type) {
    case "primary_btn":
      return (
        <Button
          variant={variant}
          path={path}
          useClass="primary_btn"
          text={text}
        />
      );
    case "primary_light_btn":
      return (
        <Button
          variant={variant}
          path={path}
          useClass="primary_light_btn"
          text={text}
        />
      );
    case "primary_dark_btn":
      return (
        <Button
          variant={variant}
          path={path}
          useClass="primary_dark_btn"
          text={text}
        />
      );
    case "primary_orange_btn":
      return (
        <Button
          variant={variant}
          path={path}
          useClass="primary_orange_btn"
          text={text}
        />
      );
    default:
      return null;
  }
};

const Button = ({ variant, path, useClass, text }) => {
  return variant === "link" ? (
    <Link to={path}>
      <button className={styles[useClass]}>{text}</button>
    </Link>
  ) : variant === "generic" ? (
    <button className={styles[useClass]}>{text}</button>
  ) : null;
};
