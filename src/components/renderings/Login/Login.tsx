import Input from "../../elements/Input/Input";
import Loader from "../../elements/Loader/Loader";
import { useForm } from "react-hook-form";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
//Icons
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const { errors } = methods.formState;

  const onSubmit = (data: any) => {
    console.log("data", data);
    navigate("/");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#f7f7ff] p-3 md:p-6">
      {/* Login header */}
      <div className="space-y-3 mb-9 flex flex-col justify-center items-center">
        <h1 className="font-[PublicSans] text-2xl text-[#343a40]">Sign In</h1>
        <p className="font-[PublicSans] text-[#7a7f9a]">
          Sign in to continue to file upload
        </p>
      </div>

      {/* Login Form */}

      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full max-w-md md:max-w-lg p-8 md:p-12 rounded-md shadow-md bg-white"
      >
        <div className="flex flex-col gap-y-3">
          <Input
            Icon={AiOutlineUser}
            errors={errors}
            labelName="Username"
            name="name"
            register={methods.register}
          />
          <Input
            Icon={AiOutlineLock}
            errors={errors}
            labelName="Password"
            name="password"
            register={methods.register}
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="flex justify-center gap-x-3 bg-[#7269ef] cursor-pointer py-2 w-full rounded-sm text-lg font-medium hover:bg-indigo-500 transition-all duration-300"
          >
            <span className="fon-[PublicSans] text-white">Login </span>
            {isLoading && <Loader />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(Login);
