import { Link } from "react-router-dom";
import { GlobalIcon } from "../global/GlobalIcon";
import { ServicesList } from "./ServicesList";

export const ServicesContent = () => {
  return (
    <div>
      <h3 className="text-3xl mb-3">
        Your One Stop Destination for Vehicles Sales and Rentals.
      </h3>
      <p className="text-gray-500 mb-10">
        Explore our diverse selection of vehicles for sale and discover
        hassle-free car shopping. Whether you`re buying, selling, or browsing,
        find the perfect ride with us today.  
      </p>
      <ServicesList />
      <Link
        to="/catalog"
        className="flex items-center justify-center bg-cape-green p-5 rounded max-w-52 uppercase text-white hover:bg-cape-light"
      >
        <p>Get Started</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
  );
};
