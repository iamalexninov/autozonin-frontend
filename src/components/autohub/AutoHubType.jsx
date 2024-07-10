import { Link } from "react-router-dom";

export const AutoHubType = ({ title, path, type }) => {
  return (
    <div
      className={`p-10 lg:p-20 rounded ${
        type === "selling"
          ? "bg-midnight-cian"
          : type === "buying"
          ? "bg-midnight-yellow"
          : null
      }`}
    >
      <h3 className="text-xl uppercase mb-3">{title}</h3>
      <p className="mb-14">
        We are committed to providing our customers with exceptional service.
      </p>
      <Link
        to={path}
        className="bg-black p-5 px-10 text-white rounded uppercase"
      >
        {type === "selling" ? "selling" : type === "buying" ? "buying" : null}
      </Link>
    </div>
  );
};
