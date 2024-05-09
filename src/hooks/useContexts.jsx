import { useContext } from "react";

import { MobileMenuContext } from "../contexts/MobileMenuContext";

export const useMobileMenuContext = () => useContext(MobileMenuContext);
