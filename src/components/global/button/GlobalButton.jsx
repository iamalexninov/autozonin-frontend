import styles from "./style.module.css";

import { renderErrorMessage } from "../../../utils/errorMessages";

import { Link } from "react-router-dom";

export const GlobalButton = ({ btnVariant, btnType, path, text }) => {
  return (
    <RenderButton variant={btnVariant} type={btnType} path={path} text={text} />
  );
};

const RenderButton = ({ type, variant, path, text }) => {
  // Before
  // switch (type) {
  //   case "primary_btn":
  //     return <Button variant={variant} path={path} text={text} useClass="primary_btn" />
  //   case "primary_light_btn":
  //     return <Button variant={variant} path={path} text={text} useClass="primary_light_btn" />
  //   case "primary_dark_btn":
  //     return <Button variant={variant} path={path} text={text} useClass="primary_dark_btn" />
  //   default:
  //     return null;
  // }

  // After
  const buttons = {
    primary: (
      <Button
        variant={variant}
        path={path}
        text={text}
        useClass="primary_btn"
      />
    ),
    primaryLight: (
      <Button
        variant={variant}
        path={path}
        text={text}
        useClass="primary_light_btn"
      />
    ),
    primaryDark: (
      <Button
        variant={variant}
        path={path}
        text={text}
        useClass="primary_dark_btn"
      />
    ),
  };

  const buttonComponent = buttons[type];
  if (!buttonComponent) renderErrorMessage("invalid_component");

  return buttonComponent;
};

const Button = ({ variant, path, useClass, text }) => {
  return variant === "link" ? (
    <Link to={path} className={styles.link}>
      <button className={styles[useClass]}>{text}</button>
    </Link>
  ) : variant === "generic" ? (
    <button className={styles[useClass]}>{text}</button>
  ) : null;
};
