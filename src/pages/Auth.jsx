import { Wrapper } from "../components/global/Wrapper";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

export const Auth = () => {
  return (
    <section className="py-40">
      <Wrapper>
        <div className="flex flex-col gap-10 md:flex-row">
          <Login />
          <div className="w-1 bg-cape-green"></div>
          <Register />
        </div>
      </Wrapper>
    </section>
  );
};
