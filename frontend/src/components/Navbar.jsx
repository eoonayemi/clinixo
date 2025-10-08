import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { X } from "lucide-react";
import useScrollPosition from "../hooks/useScrollPosition";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const scrollY = useScrollPosition();
  // const pathname = window.location.pathname;
  const isScrolled = scrollY > 1;

  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  return (
    <div>
      <div
        className={`flex items-center justify-between text-sm p-4 sshadow-md rounded-full fixed top-4 left-0 right-0 z-10 shadow-around bg-clip-padding backdrop-filter backdrop-blur-sm bg-white/80 mx-4 ${
          isScrolled ? "sm:mx-[15%] mx-[5%]" : "sm:mx-[10%]"
        } transistion-all duration-100`}
      >
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate("/")}
            className="w-7 cursor-pointer"
            src="/images/logo1.png"
            alt=""
          />
          <span className="text-2xl font-bold text-[#480707]">Clinixo</span>
        </div>
        <ul className="md:flex items-center gap-5 font-medium hidden">
          <NavLink to="/">
            <li className="py-1">Home</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1">All Doctors</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1">About</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">Contact</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>

          <a
            href={import.meta.env.VITE_ADMIN_URL}
            className="border border-gray-300 py-2 px-4 rounded-full text-sm font-medium cursor-pointer hover:scale-105 transition-shadow duration-300 block text-center no-underline text-current"
          >
            Admin Panel
          </a>
        </ul>

        <div className="flex items-center gap-4">
          {token && userData ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img className="w-8 rounded-full" src={userData.image} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={logout}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            >
              Create account
            </button>
          )}

          <Menu
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden"
            alt=""
          />
        </div>
      </div>

      {/* ---- Mobile Menu ---- */}
      <div
        className={`md:hidden ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 h-screen z-20 bg-white transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <div className="flex items-center gap-2">
            <img
              onClick={() => navigate("/")}
              className="w-7 cursor-pointer"
              src="/images/logo1.png"
              alt=""
            />
            <span className="text-2xl font-bold text-[#480707]">Clinixo</span>
          </div>
          <X
            strokeWidth={2.5}
            onClick={() => setShowMenu(false)}
            className="text-xl text-[#480707] cursor-pointer"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            <p className="px-4 py-2 rounded-full inline-block">Home</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/doctors">
            <p className="px-4 py-2 rounded-full inline-block">All Doctors</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            <p className="px-4 py-2 rounded-full inline-block">About</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            <p className="px-4 py-2 rounded-full inline-block">Contact</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
