import styles from "./style.module.css";
import { mockdata } from "./Text";

import { Link } from "react-router-dom";

import { GlobalIcon } from "../../global/GlobalIcon";

export const FooterTop = () => {
  return (
    <div className="flex flex-wrap justify-between py-12 gap-12">
      <RenderFooterSection section={mockdata.company} />
      <RenderFooterSection section={mockdata.quickLinks} />
      <RenderFooterSection section={mockdata.brands} />
      <RenderFooterSection section={mockdata.types} />
      <ConnectWithUs />
    </div>
  );
};

const RenderFooterSection = ({ section }) => {
  return (
    <div>
      <h4 className="text-lg mb-8 font-600 text-white">{section.header}</h4>
      <ul className="mb-4">
        <RenderFooterSectionLinks links={section.links} />
      </ul>
    </div>
  );
};

const RenderFooterSectionLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <li className="mb-4 hover:border-b border-gray-400" key={link.text}>
          <Link to={link.path} className="text-base text-gray-300">
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
};

const ConnectWithUs = () => {
  return (
    <div>
      <h4 className="text-lg mb-8 font-600 text-white">Connect With Us</h4>
      <div className="flex gap-4">
        <div className="bg-cape-light text-white flex p-4 rounded-md">
          <GlobalIcon type="facebook" />
        </div>
        <div className="bg-cape-light text-white flex p-4 rounded-md">
          <GlobalIcon type="twitter" />
        </div>
        <div className="bg-cape-light text-white flex p-4 rounded-md">
          <GlobalIcon type="pinterest" />
        </div>
        <div className="bg-cape-light text-white flex p-4 rounded-md">
          <GlobalIcon type="linkedin" />
        </div>
      </div>
    </div>
  );
};
