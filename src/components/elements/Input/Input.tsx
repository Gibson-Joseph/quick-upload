import { IconType } from "react-icons";

const Input = ({
  name,
  errors,
  register,
  labelName,
  Icon,
}: {
  name: string;
  errors: any;
  register: any;
  labelName: string;
  Icon: IconType;
}) => {
  return (
    <div className="">
      <label htmlFor={name} className="flex flex-col">
        <span className="font-[PublicSans] text-[#495057] text-base mb-2">
          {labelName}
        </span>
        <div className="flex border rounded-sm cursor-text">
          <span className="bg-[#f8f9fa] flex justify-center items-center px-3 border-r">
            <Icon className="w-5 h-5 text-[#7a7f9a]" />
          </span>
          <input
            className=" w-full text-sm text-[#495057] font-[PublicSans] outline-none py-2 indent-2"
            id={name}
            {...register(name, {
              required: "Please enter your name.",
            })}
          />
        </div>
      </label>
      {errors[name]?.message && (
        <span className="text-red-500 py-2 font-[PublicSans] text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default Input;
