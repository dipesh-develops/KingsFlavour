import { BsEnvelope } from "react-icons/bs";
import { BiLockAlt, BiUser } from "react-icons/bi";

const Register = () => {
  const signUpItems = [
    {
      name: "Full Name",
      icon: <BiUser />,
      style: "top-5 ",
      type: "text",
    },
    {
      name: "Email Address",
      icon: <BsEnvelope />,
      style: "top-20 ",
      type: "text",
    },
    {
      name: "Password",
      icon: <BiLockAlt />,
      style: "top-[140px] ",
      type: "password",
    },
    {
      name: "Confirm Password",
      icon: <BiLockAlt />,
      style: "top-[200px] ",
      type: "password",
    },
  ];
  const buttons = [
    {
      name: "sign Up",
      style: "bg-[#3D8AFD] text-white mr-3",
    },
    {
      name: "Sign in instead",
      style: "bg-white text-[#8A8C9E] hover:text-white",
    },
  ];
  return (
    <>
      <h1 className="text-2xl text-center">Sign Up</h1>
      <p className="text-[12px] my-2 text-[#8A8C9E]  ">
        Please fill in this from to create an account!
      </p>
      <div className="mt-4 relative">
        {signUpItems.map((item) => (
          <div>
            <p
              className={`w-5 h-5 absolute left-4 ${item.style} text-[#BEC3CF] `}
            >
              {item.icon}
            </p>
            <input
              className="w-full h-11 bg-[#EEF2F5] pl-12 text-sm outline-none border-b-2 rounded focus:bg-white my-2"
              type={`${item.type}`}
              placeholder={`${item.name}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-8">
        {buttons.map((item) => (
          <button
            className={`${item.style} rounded-2xl h-9 w-32  text-xs hover:bg-[#277bf8]`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Register;
