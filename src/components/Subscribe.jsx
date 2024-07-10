import { Wrapper } from "./global/Wrapper";

export const Subscribe = () => {
  return (
    <section className="pt-24 bg-cape-green border-b border-gray-300">
      <Wrapper>
        <div className="pb-10">
          <div className="text-center">
            <h3 className="text-white uppercase text-2xl mb-5">Join Zonin Dealership</h3>
            <p className="text-white mb-10">Receive pricing updates, shopping tips & more!</p>
          </div>
          <div className="max-w-96 m-auto flex flex-col">
            <input type="text" placeholder="Your email address..." className="w-full bg-white rounded-2xl p-3 mb-5"/>
            <button className="bg-cape-light p-3 py-4 rounded w-full max-w-56 m-auto text-white uppercase">Join</button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
