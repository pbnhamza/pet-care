import { NavLink } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import logo from "../../assets/logo.jpeg";
import login from "../../assets/login.png";
import MyLink from "../MyLink/MyLink";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutFunc, setUser } = useContext(AuthContext);
  console.log(user);
  const handelSignout = () => {
    signOutFunc()
      .then(() => {
        toast.success("SignOut successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <header className="fixed top-0  z-50 w-full bg-base-200 shadow-sm ">
      <nav className="navbar bg-base-200 shadow-sm px-8">
        <div className="navbar-start">
          <div className="dropdown text-secondary z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu  font-semibold menu-sm dropdown-content bg-secondary text-white z-1 mt-3 w-[100px] p-2 shadow"
            >
              <MyLink to={"/"}>Home</MyLink>
              <MyLink to={"/all-services"}>All Services</MyLink>
              {user ? (
                <>
                  <MyLink to={"/services/:id"}>Services</MyLink>
                  <MyLink to={"/profile"}>My Profile</MyLink>
                </>
              ) : (
                ""
              )}

              <MyLink to={"/about"}>About us</MyLink>
            </ul>
          </div>
          <NavLink to={"/"} className="flex justify-between items-center gap-1">
            <img className="w-12 h-12 rounded-full" src={logo} alt="logo" />
            <p className="font-bold text-primary  text-xl">Pet Care</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-4 menu-horizontal px-1 text-secondary font-semibold">
            <MyLink to={"/"}>Home</MyLink>
            <MyLink to={"/all-services"}>All Services</MyLink>
            {user ? (
              <>
                <MyLink to={"/services/:id"}>Services</MyLink>
                <MyLink to={"/profile"}>My Profile</MyLink>
              </>
            ) : (
              ""
            )}
            <MyLink to={"/about"}>About us</MyLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-2 items-center ">
          {user ? (
            <div className="flex justify-center items-center gap-5">
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt="#"
                />
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
          ) : (
            <div className="flex justify-center items-center gap-5">
              <img className="w-12 h-12 rounded-full" src={login} alt="" />
              <NavLink to={"/login"} className="btn bg-secondary text-white">
                Login
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
