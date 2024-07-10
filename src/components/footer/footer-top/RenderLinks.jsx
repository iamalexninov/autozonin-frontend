import { Link } from "react-router-dom";

export const RenderLinks = ({ record }) => {
  return (
    <div>
      <h4 className="text-lg mb-8 font-600 text-white">{record.title}</h4>
      <ul className="mb-4">
        {record.links.map((link) => (
          <li className="mb-4 hover:border-b border-gray-400" key={link.text}>
            <Link to={link.path} className="text-base text-gray-300">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
