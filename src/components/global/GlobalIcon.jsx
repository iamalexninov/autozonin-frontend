import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
  };

  const IconComponent = iconComponents[type] || null;

  return <IconComponent size={size} />;
};
