import axios from "axios";
import React, { memo, useState } from "react";
import { FaFileImage } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const QuickUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileChange = (e: any) => {
    console.log("e.target.files[0]", e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post("", formData);
        if (response.status === 200) {
          setIsFileUploaded(true);
        }
      } catch (error) {
        console.error("Error uploading file: ", error);
      }
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-[640px] w-full text-center flex flex-col gap-y-5">
        <div className="bg-[#f9f9f9] p-5 rounded-[10px]">
          <h1 className="text-[#130f40] pb-3">Upload a file</h1>
          <div className="bg-[rgb(239, 239, 239)] rounded-md p-3">
            <div className="border-[5px] border-dashed p-5 w-full h-full">
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="w-full flex justify-center">
                  <div className="text-[#95afc0] opacity-[0.55] flex w-fit gap-x-8">
                    <FaFileImage className="-rotate-45 w-14 h-14" />
                    <FaFilePdf className="w-14 h-14" />
                    <IoDocumentText className="rotate-45 w-14 h-14" />
                  </div>
                </div>
                <input
                  title="file upload"
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                />
                <p className="text-[#130f40] mt-7 opacity-[0.65] -tracking-[1px]">
                  Drag and drop files here, or browse your computer.
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full">
          <button className="py-2 px-2 w-full text-[#f1f1f1]  rounded-sm bg-[#333333c0] hover:bg-[#333333] transition-all duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(QuickUpload);
