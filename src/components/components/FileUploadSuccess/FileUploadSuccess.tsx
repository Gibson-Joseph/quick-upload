import { memo } from "react";
//Icons
import { MdCancel } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

const FileUploadSuccess = ({
  handleClick,
  handleCancelPopUp,
}: {
  handleClick: () => void;
  handleCancelPopUp: () => void;
}) => {
  return (
    <div className="max-w-lg w-full p-5 bg-white flex flex-col justify-center items-center shadow-lg rounded-lg">
      <div className="w-full flex justify-end">
        <MdCancel
          className="w-7 h-7 text-[#ddd] cursor-pointer hover:text-[#acacac] transition-all duration-300"
          title="cancel"
          onClick={() => handleCancelPopUp()}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full border-white text-green-600 w-24 h-24">
          <FiCheckCircle className=" w-full h-full" />
        </div>
        <h3 className="text-2xl font-[PublicSans] text-green-600 font-semibold mb-5">
          SUCCESS!
        </h3>
        <div className="text-center space-y-1">
          <p className="text-base font-medium font-[PublicSans]">
            Your file have been uploaded successfully.
          </p>
          <p className="text-[#818181] font-medium font-[PublicSans] text-sm sm:text-base transition-all duration-300">
            Your file is now available.
          </p>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center mt-2">
        <button
          type="button"
          title="open pdf"
          className="bg-green-600 hover:bg-green-700 py-2 px-14 mt-2 font-[PublicSans] font-medium text-[#fff] transition-all duration-300"
          onClick={() => handleClick()}
        >
          Click to open
        </button>
      </div>
    </div>
  );
};

export default memo(FileUploadSuccess);
