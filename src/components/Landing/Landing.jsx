import "./landing.scss";
import { NavLink, Outlet } from "react-router-dom";
import image from "assets/svg1.svg";
export const Landing = () => {
  const activeStyle = {
    backgroundColor: "var(--primary-color)",
    width: "50%",
  };
  return (
    <div className="landing-container">
      <div className="home-image flex">
        <img src={image} alt="" />
      </div>
      <div className="authentication-section">
        <div className="options">
          <NavLink
            className="item-1 flex link-style-none text-lg text-bold"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="login"
          >
            Login
          </NavLink>
          <NavLink
            className="item-2 flex link-style-none text-lg text-bold"
            to="signup"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
