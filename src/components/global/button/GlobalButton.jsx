import { Link } from "react-router-dom";

export const GlobalButton = ({ btnType }) => {
  return btnType === "generic" ? <GenericButton /> : <LinkButton />;
};

const GenericButton = () => {
  return <button>Submit</button>;
};

const LinkButton = () => {
  return (
    <Link to="">
      <button>Submit</button>
    </Link>
  );
};
