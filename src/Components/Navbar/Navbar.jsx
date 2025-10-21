import { NavLink } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const links = [
    <NavLink>Home</NavLink>,
    <NavLink> Services</NavLink>,
    <NavLink> My Profile</NavLink>,
  ];
  return (
    <MyContainer>
      <div className="navbar bg-[#000000] shadow-sm sticky ">
        <div className="navbar-start">
          <div className="dropdown text-white">
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
              className="menu text-white font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>
          <NavLink className="flex justify-between items-center gap-2">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={logo}
              alt="logo"
            />
            <p className="font-bold text-white text-xl">Pet Care</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-semibold">
            {links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink className="btn bg-[#37BC9B]">Login</NavLink>
        </div>
      </div>
    </MyContainer>
  );
};

export default Navbar;
