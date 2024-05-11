import { AutoSeeker } from "./AutoSeeker";
import { AutoSeller } from "./AutoSeller";

export const AutoHubNavigator = ({ navigator }) => {
  return navigator === "seeker" ? (
    <AutoSeeker />
  ) : navigator === "seller" ? (
    <AutoSeller />
  ) : null;
};
