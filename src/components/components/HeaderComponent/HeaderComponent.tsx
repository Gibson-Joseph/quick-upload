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
    <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center transition-all duration-300">
        <div className="text-slate-600 text-xl font-medium font-[PublicSans]">
          Our Logo
        </div>
        <div className="flex items-center gap-x-4">
          <button
            type="button"
            className="text-white flex items-center font-[PublicSans] bg-slate-600 py-1 px-2 border-2 border-slate-600 rounded-md hover:bg-white hover:text-slate-600 transition-all duration-300"
            onClick={() => handleLogout()}
          >
            <FaSignOutAlt className="mr-2 w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(HeaderComponent);
