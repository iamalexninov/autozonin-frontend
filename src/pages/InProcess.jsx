import { Link } from "react-router-dom";

export const InProcess = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-5">
        <h1 className="text-5xl mb-5">
          The page is currently under construction. Stay tuned...
        </h1>
        <Link to="/" className="text-2xl text-cape-green font-600">
          Go To Home
        </Link>
    </div>
  );
};
