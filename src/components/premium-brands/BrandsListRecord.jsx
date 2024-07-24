import { useNavigate } from "react-router-dom";

export const BrandsListRecord = ({ record }) => {
  const navigate = useNavigate();

  const handleMakeClick = (e) => {
    e.preventDefault();

    const params = new URLSearchParams({ make: record.brand }).toString();
    navigate(`/catalog?${params}`);
  };

  return (
    <li
      className="flex flex-col items-center rounded-lg border-cape-green border w-full max-w-48 p-8"
      onClick={handleMakeClick}
    >
      <img src={record.banner} alt={record.brand} className="mb-4 w-24" />
      <p className="uppercase">{record.brand}</p>
    </li>
  );
};
