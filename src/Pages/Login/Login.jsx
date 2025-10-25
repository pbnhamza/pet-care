import { useContext, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [show, setShow] = useState(false);

  const emailRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithEmailAndPasswordFunc, setUser, user } =
    useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handelLogin = (e) => {
    e.preventDefault();
    navigate(from, { replace: true });
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

    signInWithEmailAndPasswordFunc(email, password)
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

  const forgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password Rest Check your Email");
      })
      .catch((error) => {
        toast.error(error.message);
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
        console.log(e);
        toast.error(e.message);
      });
  };
  return (
    <MyContainer>
      {!user ? (
        <div
          className="hero"
          style={{
            background:
              "linear-gradient(90deg,rgba(42, 151, 155, 0.5) 0%, rgba(11, 148, 68, 0.25) 60%, rgba(83, 237, 198, 0.45) 100%)",
          }}
        >
          <div className="flex flex-col justify-center items-center py-5">
            <div className="text-center py-4 ">
              <h1 className="text-4xl font-bold text-[#0B9444]">
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
                      className="absolute right-[30px] top-28 cursor-pointer  z-50"
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
      ) : (
        <Navigate to={"/"}></Navigate>
      )}
    </MyContainer>
  );
};

export default Login;
