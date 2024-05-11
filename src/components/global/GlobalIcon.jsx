import { renderErrorMessage } from "../../utils/errorMessages";

import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import {
  MdEmail,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { IoClose } from "react-icons/io5";

export const GlobalIcon = ({ type, size }) => {
  return <RenderIconComponent type={type} size={size} />;
};

const RenderIconComponent = ({ type, size = 20 }) => {
  const iconComponents = {
    phone: FaPhoneAlt,
    email: MdEmail,
    bars: FaBars,
    exit: IoClose,
    arrowUp: MdKeyboardArrowUp,
    arrowDown: MdKeyboardArrowDown,
    arrowRight: FaArrowRight,
  };

  let IconComponent = iconComponents[type];
  const errorMsg = renderErrorMessage("invalid_component");

  if (!IconComponent) {
    alert(errorMsg());
    IconComponent = null;
  }

  return <IconComponent size={size} />;
};
