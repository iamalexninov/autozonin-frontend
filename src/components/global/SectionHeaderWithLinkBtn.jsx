import { Link } from "react-router-dom";
import { GlobalIcon } from "./GlobalIcon";

export const SectionHeaderWithLinkBtn = ({
  color,
  header,
  linkText,
  linkPath,
}) => {
  return (
    <div
      className={`flex justify-between items-center mb-20 ${
        color === "light"
          ? "text-white"
          : color === "dark"
          ? "text-black"
          : null
      }`}
    >
      <h3 className="text-xl uppercase">{header}</h3>
      <Link to={linkPath} className="flex gap-1 hover:text-cape-green">
        <p>{linkText}</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
  );
};
