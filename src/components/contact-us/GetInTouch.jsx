export const GetInTouch = () => {
  return (
    <div className="w-full max-w-4xl py-10">
      <form>
        <h2 className="text-2xl mb-5">Get In Touch</h2>
        <p className="text-base mb-10 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ab,
          sunt illo voluptatibus vitae fuga in soluta aperiam maiores et
          suscipit laudantium atque aut laboriosam possimus accusantium minus.
          Ducimus, doloremque?
        </p>
        <div className="flex flex-col gap-4 mb-5">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="firstName" className="pl-1">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Alex"
                className="w-full py-3 px-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lastName" className="pl-1">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Stoev"
                className="w-full py-3 px-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="pl-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="stoev@gmail.com"
              className="w-full py-3 px-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="phone" className="pl-1">
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+359 896 35 9841"
              className="w-full py-3 px-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <textarea
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          placeholder="Message..."
          name="message"
        ></textarea>
        <button className="mt-10 p-4 text-white font-600 w-full max-w-80 bg-cape-green rounded-sm uppercase hover:bg-cape-light">
          Send Message
        </button>
      </form>
    </div>
  );
};
