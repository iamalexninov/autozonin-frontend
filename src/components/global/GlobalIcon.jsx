import { renderErrorMessage } from "../../utils/errorMessages";

import {
  FaPhoneAlt,
  FaEye,
  FaCalendarAlt,
  FaCarAlt,
  FaComment,
  FaFolderOpen,
  FaPinterest,
  FaLinkedin,
  FaPlus,
  FaMinus,
  FaAddressBook,
  FaFlag,
  FaBullhorn,
} from "react-icons/fa";
import {
  FaArrowRight,
  FaBars,
  FaFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import {
  MdEmail,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { IoClose, IoSettings, IoSpeedometer } from "react-icons/io5";
import { AiFillLike, AiFillTwitterCircle } from "react-icons/ai";

export const GlobalIcon = ({ type, size }) => {
  return <RenderIconComponent type={type} size={size} />;
};

const RenderIconComponent = ({ type, size = 20 }) => {
  const iconComponents = {
    phone: FaPhoneAlt,
    email: MdEmail,
    address: FaAddressBook,
    bars: FaBars,
    exit: IoClose,
    arrowUp: MdKeyboardArrowUp,
    arrowDown: MdKeyboardArrowDown,
    arrowRight: FaArrowRight,
    eye: FaEye,
    calendar: FaCalendarAlt,
    setting: IoSettings,
    car: FaCarAlt,
    speedometer: IoSpeedometer,
    comment: FaComment,
    like: AiFillLike,
    folder: FaFolderOpen,
    facebook: FaFacebook,
    twitter: AiFillTwitterCircle,
    pinterest: FaPinterest,
    linkedin: FaLinkedin,
    instagram: FaSquareInstagram,
    plus: FaPlus,
    minus: FaMinus,
    flag: FaFlag,
    promote: FaBullhorn,
  };

  let IconComponent = iconComponents[type];
  const errorMsg = renderErrorMessage("invalid_component");

  if (!IconComponent) {
    alert(errorMsg());
    IconComponent = null;
  }

  return <IconComponent size={size} />;
};
