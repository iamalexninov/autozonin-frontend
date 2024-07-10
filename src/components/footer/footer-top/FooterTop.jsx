import { ConnectUs } from "./ConnectUs";
import { RenderLinks } from "./RenderLinks";

export const FooterTop = () => {
  const companymockdata = {
    title: "Company",
    links: [
      { path: "/", text: "Home" },
      { path: "/about", text: "About Us" },
      { path: "/blog", text: "Blog" },
      { path: "/catalogue", text: "Listing" },
      { path: "/about", text: "Services" },
      { path: "/contact", text: "Contact Us" },
    ],
  };

  const quickLinksmockdata = {
    title: "Quick Links",
    links: [
      { path: "/contact", text: "Get In Touch" },
      { path: "/", text: "Help Center" },
      { path: "/", text: "Live Chat" },
      { path: "/", text: "How it works" },
    ],
  };

  const brandsmockdata = {
    title: "Our Brands",
    links: [
      { path: "/catalogue", text: "Toyota" },
      { path: "/catalogue", text: "Porsche" },
      { path: "/catalogue", text: "Audi" },
      { path: "/catalogue", text: "BMW" },
      { path: "/catalogue", text: "Ford" },
      { path: "/catalogue", text: "Nissan" },
      { path: "/catalogue", text: "Peugeot" },
      { path: "/catalogue", text: "Volkswagen" },
    ],
  };

  const typesmockdata = {
    title: "Vehicles Type",
    links: [
      { path: "/catalogue", text: "Sedan" },
      { path: "/catalogue", text: "Hatchback" },
      { path: "/catalogue", text: "SUV" },
      { path: "/catalogue", text: "Hybrid" },
      { path: "/catalogue", text: "Electric" },
      { path: "/catalogue", text: "Coupe" },
      { path: "/catalogue", text: "Truck" },
      { path: "/catalogue", text: "Convertible" },
    ],
  };

  return (
    <div className="flex flex-wrap justify-between py-12 gap-12">
      <RenderLinks record={companymockdata} />
      <RenderLinks record={quickLinksmockdata} />
      <RenderLinks record={brandsmockdata} />
      <RenderLinks record={typesmockdata} />
      <ConnectUs />
    </div>
  );
};
