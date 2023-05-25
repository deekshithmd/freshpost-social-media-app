import "./landing.scss";
import { NavLink, Outlet } from "react-router-dom";
import image from "assets/svg1.svg";

export const Landing = () => {
  return (
    <div className="landing-container">
      <div className="home-image flex">
        <img src={image} alt="" />
      </div>
      <div className="authentication-section">
        <div className="options">
          <NavLink
            className={`${({ isActive }) =>
              isActive
                ? "selected"
                : ""} item-1 flex link-style-none text-lg text-bold`}
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={`${({ isActive }) =>
              isActive
                ? "selected"
                : ""} item-2 flex link-style-none text-lg text-bold`}
            to="signup"
          >
            Register
          </NavLink>
        </div>
        <div className="forms flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
