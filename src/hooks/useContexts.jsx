import { useContext } from "react";

import { MenuContext } from "../contexts/MenuContext";
import { AuthContext } from "../contexts/AuthContext";
import { VehiclesContext } from "../contexts/VehiclesContext";

export const useMenuContext = () => useContext(MenuContext);
export const useAuthContext = () => useContext(AuthContext);
export const useVehiclesContext = () => useContext(VehiclesContext);
