import { Wrapper } from "../global/Wrapper";
import { AutoHubType } from "./AutoHubType";

export const AutoHub = () => {
  return (
    <section className="py-24">
      <Wrapper>
        <div className="flex flex-col gap-5 lg:flex-row">
          <AutoHubType
            title="Are You Looking For a Car?"
            path="/catalog"
            type="buying"
          />
          <AutoHubType
            title="Do You Want to Sell a Car?"
            path="/dashboard/submit-listing"
            type="selling"
          />
        </div>
      </Wrapper>
    </section>
  );
};
