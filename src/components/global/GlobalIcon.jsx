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
  FaHouseDamage,
  FaUnlockAlt,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import {
  FaArrowRight,
  FaSquareInstagram,
  FaCheck,
  FaBarsStaggered,
  FaUser,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa6";
import {
  MdEmail,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineContacts,
  MdOutlineSaveAlt,
  MdOutlineSearch,
} from "react-icons/md";
import {
  IoCarSport,
  IoLocationSharp,
  IoLogOut,
  IoOptionsSharp,
  IoSettings,
  IoSpeedometer,
} from "react-icons/io5";
import {
  AiFillLike,
  AiFillTwitterCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiArticleFill, RiSendPlaneFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosListBox } from "react-icons/io";

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
    facebook: FaFacebookF,
    twitter: AiFillTwitterCircle,
    pinterest: FaPinterest,
    linkedin: FaLinkedin,
    instagram: FaSquareInstagram,
    google: FaGoogle,
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
    filter: IoOptionsSharp,
    location: IoLocationSharp,
    dashboard: FaHouseDamage,
    profile: CgProfile,
    listing: IoCarSport,
    favorite: MdOutlineSaveAlt,
    submitListing: RiSendPlaneFill,
    password: FaUnlockAlt,
    logout: IoLogOut,
    home: FaHome,
    about: FaInfoCircle,
    catalog: IoIosListBox,
    blog: RiArticleFill,
    contact: MdOutlineContacts,
  };

  let IconComponent = iconComponents[type];

  if (!IconComponent) {
    IconComponent = null;
  }

  return <IconComponent size={size} />;
};
