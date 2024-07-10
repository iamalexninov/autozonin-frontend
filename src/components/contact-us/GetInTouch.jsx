import { RenderField } from "../global/fields/RenderField";

export const GetInTouch = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-4xl py-10">
      <form onClick={handleOnClick}>
        <h2 className="text-2xl mb-5">Get In Touch</h2>
        <p className="text-base mb-10 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ab,
          sunt illo voluptatibus vitae fuga in soluta aperiam maiores et
          suscipit laudantium atque aut laboriosam possimus accusantium minus.
          Ducimus, doloremque?
        </p>
        <div className="flex flex-col gap-4 mb-5 sm:flex-row">
          <RenderField
            attributes={{
              type: "text",
              name: "firstName",
              label: "First Name",
              placeholder: "Iordan",
            }}
          />
          <RenderField
            attributes={{
              type: "text",
              name: "lastName",
              label: "Last Name",
              placeholder: "Bochev",
            }}
          />
        </div>
        <div className="flex flex-col gap-4 mb-5 sm:flex-row">
          <RenderField
            attributes={{
              type: "text",
              label: "Email",
              name: "email",
              placeholder: "iordan@gmail.com",
            }}
          />
          <RenderField
            attributes={{
              type: "text",
              label: "Phone Number",
              name: "phone",
              placeholder: "+359 896 35 9812",
            }}
          />
        </div>
        <RenderField
          attributes={{
            type: "textarea",
            name: "message",
            label: "Share with us",
            placeholder: "Message",
          }}
        />
        <button className="mt-10 p-4 text-white font-600 w-full max-w-80 bg-cape-green rounded-sm uppercase hover:bg-cape-light">
          Send Message
        </button>
      </form>
    </div>
  );
};
