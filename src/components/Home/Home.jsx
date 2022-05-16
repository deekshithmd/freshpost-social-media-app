import "./home.css";
import { Sidebar } from "components";
import { Outlet } from "react-router-dom";
export const Home = () => {
  return (
    <div className="page-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="right-sidebar">Right</div>
    </div>
  );
};
