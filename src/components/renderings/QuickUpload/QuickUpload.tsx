import { memo, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { toast } from "react-toastify";
import { uploadFile } from "../../../services/uploadService";
import { useDropzone } from "react-dropzone";
//Iocns
import { FaFilePdf } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const QuickUpload = () => {
  const [isError, setIsError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState<null | string>(null);
  const [isUploadInProgress, setIsUploadInProgress] = useState(false);
  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        handleFileChange(acceptedFiles);
      },
      onError(err) {
        console.log("file upload error", err);
      },
      multiple: false,
      maxSize: 10e6,
      accept: {
        "application/pdf": [],
      },
    });

  const downloadPDF = () => {
    const pdfUrl = "https://www.africau.edu/images/default/sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    // link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileChange = (e: any) => {
    if (e[0]) {
      setSelectedFileName(e[0].name);
      setSelectedFile(e[0]);
      setIsError(false);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setIsError(false);
      setIsUploadInProgress(true);
      const formData = new FormData();
      formData.append("file", selectedFile);
      uploadFile(formData)
        .then((res) => {
          console.log("file upload response", res);
          toast.success("File uploaded successfully!");
          downloadPDF();
        })
        .catch((error: Error) => {
          console.error("Error uploading file: ", error);
          toast.error("Failed to upload the file. Please try again.");
          // downloadPDF();
        })
        .finally(() => {
          setIsUploadInProgress(false);
        });
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="w-full h-full relative flex flex-col">
      <HeaderComponent />
      <div className="w-full h-full flex flex-col justify-center items-center bg-[#f7f7ff] px-5 lg:px-3">
        <div className="max-w-[640px] w-full text-center flex flex-col gap-y-5">
          <div
            className={`bg-[#fff] p-4 sm:p-5 rounded-[10px] shadow-lg transition-all duration-300`}
          >
            <h1 className="text-[#130f40] pb-3 text-xl font-medium font-[PublicSans]">
              Upload a file
            </h1>
            <div className="bg-[rgb(239, 239, 239)] rounded-md p-2 md:p-3 transition-all duration-300">
              <div
                {...getRootProps()}
                className={`${
                  isDragActive && "bg-[#cac7c7ad]"
                } border-[5px] border-dashed p-5 w-full h-full cursor-pointer`}
              >
                <div>
                  <div className="w-full flex justify-center">
                    <div className="text-[#95afc0] opacity-[0.55] flex w-fit gap-x-8">
                      <FaFileImage className="-rotate-45 w-10 h-10 sm:w-14 sm:h-14 duration-300 transition-all" />
                      <FaFilePdf className="w-10 h-10 sm:w-14 sm:h-14 duration-300 transition-all" />
                      <IoDocumentText className="rotate-45 w-10 h-10 sm:w-14 sm:h-14 duration-300 transition-all" />
                    </div>
                  </div>
                  <input {...getInputProps()} />
                  <p className="text-[#130f40] mt-7 opacity-[0.65] font-[PublicSans] text-sm sm:text-base transition-all duration-300">
                    Drag and drop files here, or browse your computer.
                  </p>
                </div>
                {selectedFileName && (
                  <span className="text-blue-600 text-sm font-[PublicSans]">
                    {selectedFileName}
                  </span>
                )}
                {isError && (
                  <span className="text-red-600 text-sm font-[PublicSans]">
                    Please select a PDF file.
                  </span>
                )}
                <div className="flex flex-col">
                  {fileRejections[0]?.errors.map(
                    (errItem: any, index: number) => {
                      if (errItem.code === "file-too-large") {
                        return (
                          <span
                            key={index}
                            className="text-red-600 text-sm font-[PublicSans]"
                          >
                            Yours file is larger than 5mb.
                          </span>
                        );
                      } else if (errItem.code === "file-invalid-type") {
                        return (
                          <span
                            key={index}
                            className="text-red-600 text-sm font-[PublicSans]"
                          >
                            File type must be application/pdf.
                          </span>
                        );
                      }
                      return null;
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              className="py-2 px-2 w-full text-[#f1f1f1] font-[PublicSans] rounded-sm bg-[#333333c0] hover:bg-[#333333] transition-all duration-200 shadow-md"
              type="button"
              onClick={() => handleUpload()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Loader */}
      {isUploadInProgress && (
        <div className="bg-slate-900/40 absolute h-full w-full top-0 flex justify-center items-center">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-[6px] border-t-slate-900" />
        </div>
      )}
    </div>
  );
};

export default memo(QuickUpload);
