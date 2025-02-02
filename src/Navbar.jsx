import logo from "../public/logo dark.png"
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              
            </ul>
          </div>
          <div><img src={logo} alt="" /></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base text-[#020043]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
          <a className="border border-[#020043] rounded-xl px-7 py-3 flex items-center gap-2 text-[#020043] font-semibold">Appointment <GoArrowUpRight /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
