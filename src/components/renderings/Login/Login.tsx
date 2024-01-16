import Input from "../../elements/Input/Input";
import Loader from "../../elements/Loader/Loader";
import { toast } from "react-toastify";
import { logIn } from "../../../services/authService";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { memo, useState } from "react";
//Icons
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoadingSpinner, setIsLoadingSpinner] = useState(false);

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors } = methods.formState;

  const onSubmit = async (data: any) => {
    setIsLoadingSpinner(true);
    logIn(data)
      .then((res) => {
        console.log("Res", res);
        toast.success("Successfully logged in!");
        navigate("/");
      })
      .catch((err: Error) => {
        console.log("err", err);
      })
      .finally(() => {
        setIsLoadingSpinner(false);
      });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#f7f7ff] p-3 md:p-6">
      {/* Login header */}
      <div className="space-y-1 mb-5 sm:mb-9 flex flex-col justify-center items-center transition-all duration-300">
        <h1 className="font-[PublicSans] text-2xl text-[#343a40]">Sign In</h1>
        <p className="font-[PublicSans] text-[#7a7f9a]">
          Sign in to proceed with file upload
        </p>
      </div>

      {/* Login Form */}
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full max-w-md md:max-w-lg p-3 sm:p-8 md:p-12 rounded-md shadow-md bg-white transition-all duration-300"
      >
        <div className="flex flex-col gap-y-3">
          <Input
            message="Email is required for account access."
            inputType="text"
            Icon={AiOutlineUser}
            errors={errors}
            labelName="Email"
            name="email"
            register={methods.register}
          />
          <Input
            message="Please enter your password."
            inputType={showPassword ? "text" : "password"}
            Icon={AiOutlineLock}
            errors={errors}
            labelName="Password"
            name="password"
            register={methods.register}
          />
          <button
            type="button"
            className="flex items-center gap-x-1 w-fit"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <MdCheckBox className="w-4 h-4 text-[#7a7f9a]" />
            ) : (
              <MdCheckBoxOutlineBlank className="w-4 h-4 text-[#7a7f9a]" />
            )}
            <span className="font-[PublicSans] text-[#495057] text-sm">
              Show password
            </span>
          </button>
        </div>
        <div className="mt-3 md:mt-5 transition-all duration-300">
          <button
            type="submit"
            className="flex justify-center gap-x-3 bg-[#7269ef] cursor-pointer py-1.5 sm:py-2 w-full rounded-sm text-lg font-medium hover:bg-indigo-500 transition-all duration-300"
          >
            <span className="font-[PublicSans] text-white">Login </span>
            {isLoadingSpinner && <Loader />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(Login);
