import { Link } from "react-router-dom";

export const BrandsListRecord = ({ record }) => {
  return (
    <li className="rounded-lg border-cape-green border w-full max-w-48 p-8">
      <Link to="/catalogue" className="flex flex-col text-center items-center">
        <img src={record.banner} alt={record.brand} className="mb-4 w-24" />
        <p className="uppercase">{record.brand}</p>
      </Link>
    </li>
  );
};
