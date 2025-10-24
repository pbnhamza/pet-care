import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { toast } from "react-toastify";

import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const handelSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        updateProfile(res.user, {
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        });
        setUser(res.user);
        toast.success("Signin successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const handelSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("SignOut successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handelGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Signin successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
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
          <div className="card w-96 max-w-sm shrink-0 ">
            {user ? (
              <div className="">
                <div className="flex justify-center items-center py-4 ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co.com/Qjf0cJSk/Dog-Grooming-Session.jpg"
                    }
                    className="max-w-sm  w-[150px] h-[150px] rounded-full shadow-2xl"
                  />
                </div>
                <div className=" bg-primary rounded space-y-2 p-4 w-[450px] ">
                  <div className="flex justify-center items-center gap-5 text-xl">
                    <div>
                      <h1 className="font-semibold text-white py-2 text-right">
                        User Name:
                      </h1>
                      <h1 className="font-semibold text-white py-2 text-right">
                        Email:
                      </h1>
                    </div>
                    <div>
                      <h1 className="font-semibold text-white py-2">
                        {user?.displayName}
                      </h1>
                      <h1 className="font-semibold text-white py-2">
                        {user?.email}
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-center py-4">
                    <button
                      onClick={handelSignout}
                      className="btn btn-primary bg-secondary"
                    >
                      SignOut
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="card-body rounded "
                style={{
                  background:
                    "linear-gradient(90deg,rgba(42, 151, 155, 0.15) 0%, rgba(11, 148, 68, 0.25) 56%, rgba(83, 237, 198, 0.45) 100%)",
                }}
              >
                <form onSubmit={handelSignin}>
                  <fieldset className="fieldset relative">
                    <label className="label text-base-300">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input text-base-300 "
                      placeholder="Your Email"
                    />
                    <label className="label text-base-300">Password</label>
                    <input
                      name="password"
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

                    <button
                      type="submit"
                      className="btn btn-neutral border-none bg-[#0B9444] mt-4"
                    >
                      Register
                    </button>
                  </fieldset>
                </form>
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-base-300/30"></div>
                  <span className="text-sm text-base-300/70">or</span>
                  <div className="h-px w-16  bg-base-300/30"></div>
                </div>
                <button
                  onClick={handelGoogle}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
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
              </div>
            )}
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Register;
