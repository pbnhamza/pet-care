import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <MyContainer>
      <div
        className="hero min-h-screen "
        style={{
          background:
            "linear-gradient(90deg,rgba(42, 151, 155, 0.5) 0%, rgba(11, 148, 68, 0.25) 60%, rgba(83, 237, 198, 0.45) 100%)",
        }}
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="text-center py-10 ">
            <h1 className="text-5xl font-bold text-[#0B9444]">
              Welcome to website
            </h1>
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
                  placeholder="YourEmail"
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral border-none bg-[#0B9444] mt-4">
                  Login
                </button>
              </fieldset>
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-base-300/30"></div>
                <span className="text-sm text-base-300/70">or</span>
                <div className="h-px w-16  bg-base-300/30"></div>
              </div>
              <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <div>
                <h1 className="py-2">
                  You have Login Please{" "}
                  <Link
                    to={"/register"}
                    className="text-base-300 font-semibold cursor-pointer "
                  >
                    register...
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Login;
