import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const [show, setShow] = useState(false);

  const {
    createUserWithEmailAndPasswordFunc,
    user,
    setUser,
    updateProfileFunc,
  } = useContext(AuthContext);

  const handelSignin = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;

    const email = e.target.email?.value;
    const password = e.target.password?.value;
    //
    // createUserWithEmailAndPassword(auth, email, password);
    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            toast.success("Signin successful");
          })
          .catch((e) => {
            toast.error(e.message);
          });
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
          <div className="card w-96 max-w-sm shrink-0 ">
            {user ? (
              <div className="">
                <div className="bg-white rounded-t-2xl">
                  <div className="text-center ">
                    <p className="font-semibold text-xl text-secondary py-2">
                      You Register
                    </p>
                  </div>
                  <div className="flex justify-center items-center py-4 ">
                    <img
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co.com/Qjf0cJSk/Dog-Grooming-Session.jpg"
                      }
                      className="max-w-sm  w-[150px] h-[150px] rounded-full shadow-2xl"
                    />
                  </div>
                </div>
                <div className=" bg-primary flex flex-col justify-center  items-center rounded-b-2xl space-y-2 p-4 ">
                  <div className="flex justify-center items-center gap-5 ">
                    <div>
                      <h1 className="font-semibold text-white py-2 text-right">
                        Name:
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
                </div>
              </div>
            ) : (
              <div
                className="card-body rounded w-[400px]"
                style={{
                  background:
                    "linear-gradient(90deg,rgba(42, 151, 155, 0.15) 0%, rgba(11, 148, 68, 0.25) 56%, rgba(83, 237, 198, 0.45) 100%)",
                }}
              >
                <div className="text-center ">
                  <h1 className="text-4xl font-bold text-[#0B9444]">
                    Create an Account{" "}
                  </h1>
                  <p className="font-semibold text-xl text-white py-2">
                    Register now!
                  </p>
                </div>
                <form onSubmit={handelSignin}>
                  <fieldset className="fieldset ">
                    <div>
                      <label className="label text-base-300">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="input text-base-300 w-full "
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="label text-base-300">Photo</label>
                      <input
                        name="photo"
                        type="text"
                        className="input text-base-300 w-full"
                        placeholder="Your Photo URL"
                      />
                    </div>
                    <div>
                      <label className="label text-base-300">Email</label>
                      <input
                        name="email"
                        type="email"
                        className="input text-base-300 w-full "
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="relative w-full">
                      <label className="label text-base-300">Password</label>
                      <input
                        name="password"
                        type={show ? "text " : "password"}
                        className="input text-base-300 w-full
                         "
                        placeholder="*******"
                      />
                      <span
                        onClick={() => setShow(!show)}
                        className="absolute right-[18px] top-[31px] cursor-pointer  z-50"
                      >
                        {show ? <FaEye /> : <IoEyeOff />}
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-neutral border-none bg-[#0B9444] mt-4"
                    >
                      Register
                    </button>
                  </fieldset>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Register;
