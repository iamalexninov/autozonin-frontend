import { renderErrorMessage } from "../../../utils/errorMessages";

import { AutoSeeker } from "./AutoSeeker";
import { AutoSeller } from "./AutoSeller";

export const AutoMarket = ({ renderComp }) => {
  const listing = {
    seeker: AutoSeeker,
    seller: AutoSeller,
  };

  let RenderComponent = listing[renderComp];
  const errorMsg = renderErrorMessage('invalid_component')
  if (!RenderComponent) {
    alert(errorMsg());
    RenderComponent = null;
  }

  return <RenderComponent />;
};
