import { FaPhoneAlt } from "react-icons/fa";

export const GlobalIcon = ({ type, size }) => {
  return <RenderIconComponent type={type} size={size} />;
};

const RenderIconComponent = ({ type, size = 20 }) => {
  const iconComponents = {
    phone: FaPhoneAlt,
  };

  const IconComponent = iconComponents[type] || null;

  return <IconComponent size={size} />;
};
