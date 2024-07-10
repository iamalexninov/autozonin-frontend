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
  MdModeEdit,
  MdOutlineContacts,
  MdOutlineSaveAlt,
  MdOutlineSearch,
} from "react-icons/md";
import {
  IoCarSport,
  IoDocumentText,
  IoLocationSharp,
  IoLogOut,
  IoOptionsSharp,
  IoSettings,
  IoShareSocial,
  IoSpeedometer,
  IoTrashBin,
} from "react-icons/io5";
import {
  AiFillLike,
  AiFillTwitterCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbCylinderPlus, TbEngine, TbManualGearbox } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiArticleFill, RiSendPlaneFill } from "react-icons/ri";
import {
  IoIosArrowBack,
  IoIosColorPalette,
  IoIosListBox,
  IoIosPricetags,
} from "react-icons/io";
import { GiCarDoor, GiOverdrive } from "react-icons/gi";
import { PiIdentificationCardFill } from "react-icons/pi";

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
    chevronLeft: IoIosArrowBack,
    eye: FaEye,
    calendar: FaCalendarAlt,
    setting: IoSettings,
    car: FaCarAlt,
    comment: FaComment,
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
    submitListing: RiSendPlaneFill,
    password: FaUnlockAlt,
    logout: IoLogOut,
    home: FaHome,
    about: FaInfoCircle,
    catalog: IoIosListBox,
    blog: RiArticleFill,
    contact: MdOutlineContacts,
    drive: GiOverdrive,
    share: IoShareSocial,
    favorite: MdOutlineSaveAlt,
    like: AiFillLike,
    document: IoDocumentText,
    offer: IoIosPricetags,
    engine: TbEngine,
    doors: GiCarDoor,
    cylinders: TbCylinderPlus,
    color: IoIosColorPalette,
    vin: PiIdentificationCardFill,
    edit: MdModeEdit,
    bin: IoTrashBin,
  };

  let IconComponent = iconComponents[type];

  if (!IconComponent) {
    IconComponent = null;
  }

  return <IconComponent size={size} />;
};
