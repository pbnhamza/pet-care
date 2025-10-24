import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password should be 6 digit ");
      return;
    }

    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Invalid password! Please enter Password must have at least 6 characters, including uppercase, lowercase, and a number."
      );
      return;
    }
    console.log(!regExp.test(password));

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successful");
      })
      .catch((e) => {
        if (e.code == "auth/email-already-in-use") {
          toast.error("User Already exits in Database");
        } else if (e.code == "auth/invalid-credential") {
          toast.error("Please Registration your Account. click register... ");
        } else {
          toast.error(e.message);
        }
      });
  };

  const forgetPassword = (e) => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        toast.success("Password Rest Check your Email");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
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
              <form onSubmit={handelLogin}>
                <fieldset className="fieldset relative">
                  <label className="label text-base-300">Email</label>
                  <input
                    name="email"
                    type="email"
                    ref={emailRef}
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
                  <div>
                    <button
                      type="button"
                      onClick={forgetPassword}
                      className="link link-hover"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-neutral border-none bg-[#0B9444] mt-4"
                  >
                    Login
                  </button>
                </fieldset>
              </form>

              <div>
                <h1 className="py-2">
                  You have Login Please.
                  <span className="px-1">
                    <Link
                      to={"/register"}
                      className="text-red-600 font-semibold cursor-pointer "
                    >
                      register...
                    </Link>
                  </span>
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
