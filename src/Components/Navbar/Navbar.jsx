import { NavLink } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import logo from "../../assets/logo.jpeg";
import login from "../../assets/login.png";
import MyLink from "../MyLink/MyLink";

const Navbar = () => {
  return (
    <MyContainer>
      <div className="navbar bg-base-200 shadow-sm sticky py-5 ">
        <div className="navbar-start">
          <div className="dropdown text-secondary">
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
              <MyLink to={"/services/:id"}>Services</MyLink>
              <MyLink to={"/profile"}>My Profile</MyLink>
            </ul>
          </div>
          <NavLink to={"/"} className="flex justify-between items-center gap-2">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={logo}
              alt="logo"
            />
            <p className="font-bold text-primary  text-xl">Pet Care</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-4 menu-horizontal px-1 text-secondary font-semibold">
            <MyLink to={"/"}>Home</MyLink>
            <MyLink to={"/services/:id"}>Services</MyLink>
            <MyLink to={"/profile"}>My Profile</MyLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-2 items-center ">
          <img className="w-[40px] h-[40px]" src={login} alt="" />
          <NavLink to={"/login"} className="btn bg-secondary text-white">
            Login
          </NavLink>
        </div>
      </div>
    </MyContainer>
  );
};

export default Navbar;
