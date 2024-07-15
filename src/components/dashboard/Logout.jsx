import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/auth";

export const Logout = () => {
  const navigate = useNavigate();
  const handleOnLogout = () => {
    authApi.logout();
    navigate("/");
    window.location.reload(true);
  };

  return (
    <div className="px-10 py-10 w-full min-h-screen">
      <h2 className="text-2xl font-600 mb-5">Do you want to logout?</h2>
      <button
        className="bg-cape-green w-full max-w-48 p-3 uppercase text-white font-600"
        onClick={handleOnLogout}
      >
        Logout
      </button>
    </div>
  );
};
