import { useContext } from "react";

import { MenuContext } from "../contexts/MenuContext";
import { VehiclesContext } from "../contexts/VehiclesContext";

export const useMenuContext = () => useContext(MenuContext);
export const useVehiclesContext = () => useContext(VehiclesContext);
