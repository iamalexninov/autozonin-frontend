import { Wrapper } from "../global/Wrapper";

export const FooterBottom = () => {
  return (
    <div className="bg-white w-full p-5">
      <Wrapper>
        <div className="flex justify-between flex-wrap items-center gap-5">
          <p>&copy; zonincars.com. All right reserved.</p>
          <div className="flex justify-between items-center gap-3">
            <p>Terms & Conditions</p>
            <p>Privacy Notice</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
