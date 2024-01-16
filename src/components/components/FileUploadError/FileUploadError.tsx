import { memo } from "react";
//Icons
import { BiError } from "react-icons/bi";

const FileUploadError = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="max-w-lg w-full p-5 bg-white flex flex-col justify-center items-center shadow-lg rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full border-white text-red-600 w-24 h-24">
          <BiError className=" w-full h-full" />
        </div>
        <h3 className="text-2xl font-[PublicSans] text-red-600 font-semibold mb-5">
          ERROR!
        </h3>
        <div className="text-center space-y-1">
          <p className="text-base font-medium font-[PublicSans]">
            We are unable to continue the process.
          </p>
          <p className="text-[#818181] font-medium font-[PublicSans] text-sm sm:text-base transition-all duration-300">
            Please try again to complete the process.
          </p>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center mt-2">
        <button
          type="button"
          title="Try Again"
          className="bg-red-600 hover:bg-red-700 py-2 px-14 mt-2 font-[PublicSans] font-medium text-[#fff] transition-all duration-300"
          onClick={() => handleClick()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default memo(FileUploadError);
