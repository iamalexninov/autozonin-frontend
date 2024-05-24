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
  FaQuoteRight,
} from "react-icons/fa";
import {
  FaArrowRight,
  FaFacebook,
  FaSquareInstagram,
  FaCheck,
  FaBarsStaggered,
  FaUser,
} from "react-icons/fa6";
import {
  MdEmail,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineSearch,
} from "react-icons/md";
import { IoSettings, IoSpeedometer } from "react-icons/io5";
import {
  AiFillLike,
  AiFillTwitterCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";

export const GlobalIcon = ({ type, size }) => {
  return <RenderIconComponent type={type} size={size} />;
};

const RenderIconComponent = ({ type, size = 20 }) => {
  const iconComponents = {
    phone: FaPhoneAlt,
    email: MdEmail,
    address: FaAddressBook,
    bars: FaBarsStaggered,
    exit: AiOutlineClose,
    arrowUp: MdKeyboardArrowUp,
    arrowDown: MdKeyboardArrowDown,
    arrowRight: FaArrowRight,
    arrowRightInline: GoArrowUpRight,
    eye: FaEye,
    calendar: FaCalendarAlt,
    setting: IoSettings,
    car: FaCarAlt,
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
    search: MdOutlineSearch,
    speedometer: IoSpeedometer,
    petrol: BsFillFuelPumpFill,
    transmission: TbManualGearbox,
    check: FaCheck,
    user: FaUser,
    quote: FaQuoteRight,
  };

  let IconComponent = iconComponents[type];
  const errorMsg = renderErrorMessage("invalid_component");

  if (!IconComponent) {
    alert(errorMsg());
    IconComponent = null;
  }

  return <IconComponent size={size} />;
};
