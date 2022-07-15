import "./home.css";
import { LeftSidebar, RightSidebar } from "components";
import { getPosts } from "services";
import { Outlet } from "react-router-dom";

export const Home = () => {

  return (
    <div className="page-container">
      <div className="left-sidebar">
        <LeftSidebar />
      </div>
      <div className="main-section">
        <Outlet />
      </div>
      <div className="right-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
};
