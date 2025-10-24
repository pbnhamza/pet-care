import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";
const Register = () => {
  const [show, setShow] = useState(false);
  const handleOnRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <MyContainer>
      <div
        className="hero min-h-screen "
        style={{
          background:
            "linear-gradient(90deg,rgba(52, 151, 160, 0.25) 0%, rgba(11, 148, 80, 0.50) 60%, rgba(83, 237, 198, 0.50) 100%)",
        }}
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="text-center py-10 ">
            <h1 className="text-4xl font-bold text-[#0B9444]">
              Create an Account{" "}
            </h1>
            <p className="font-semibold text-xl text-white py-2">
              Register now!
            </p>
          </div>
          <div className="card bg-white w-96 max-w-sm shrink-0 shadow-2xl">
            <div
              className="card-body rounded "
              style={{
                background:
                  "linear-gradient(90deg,rgba(42, 151, 155, 0.15) 0%, rgba(11, 148, 68, 0.25) 56%, rgba(83, 237, 198, 0.45) 100%)",
              }}
            >
              <fieldset className="fieldset relative">
                <label className="label text-base-300">Email</label>
                <input
                  type="email"
                  className="input text-base-300 "
                  placeholder="Your Email"
                />
                <label className="label text-base-300">Password</label>
                <input
                  type={show ? "text " : "password"}
                  className="input text-base-300 "
                  placeholder="*******"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[30px] top-[112px] cursor-pointer  z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>

                <button className="btn btn-neutral border-none bg-[#0B9444] mt-4">
                  Register
                </button>
              </fieldset>
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-base-300/30"></div>
                <span className="text-sm text-base-300/70">or</span>
                <div className="h-px w-16  bg-base-300/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Register;
