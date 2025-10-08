import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const { logo1 } = assets;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img
              onClick={() => navigate("/")}
              className="w-7 cursor-pointer"
              src="/images/logo1.png"
              alt=""
            />
            <span className="text-2xl font-bold text-[#480707]">Clinixo</span>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Welcome to our convenient and easy-to-use doctor appointment
            application. Our platform allows you to effortlessly schedule
            appointments with a wide range of trusted medical professionals. Say
            goodbye to long waiting times and phone calls – with just a few
            clicks, you can book your next consultation and take control of your
            health journey. Your well-being is our priority.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-primary cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <NavLink to="/about">About us</NavLink>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <NavLink to="/">Delivery</NavLink>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <NavLink to="/">Privacy policy</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>(+1) 234 567 8901</li>
            <li>info@clinixo.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © copyright {new Date().getFullYear()} | clinixo.com - All Right
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
