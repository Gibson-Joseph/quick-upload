import { memo } from "react";
import { toast } from "react-toastify";
import { logOut } from "../../../services/authService";
import { useNavigate } from "react-router-dom";
//Icons
import { FaSignOutAlt } from "react-icons/fa";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then((res) => {
        toast.success("Successfully logged out!");
        localStorage.removeItem("access_token");
        navigate("/login");
      })
      .catch((err: Error) => {
        console.log("logOut error", err);
      });
  };

  return (
    <header className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold font-[PublicSans]">
          Our Logo
        </div>
        <div className="flex items-center gap-x-4">
          <button
            type="button"
            className="text-white flex items-center font-[PublicSans]"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(HeaderComponent);
