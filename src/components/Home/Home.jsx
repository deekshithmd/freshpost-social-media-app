import "./home.scss";
import { LeftSidebar, RightSidebar } from "components";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "app/Slices/userSlice";

export const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser({ userId: user?._id }));
  }, []);

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
