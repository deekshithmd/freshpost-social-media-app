import "./leftsidebar.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export const LeftSidebar = () => {
  const navigate=useNavigate()
  const activeStyle = {
    border: "2px solid var(--primary-color)",
  };
  return (
    <aside className="left-sidebar-container link-style-none text-md">
      <div className="sidebar-items flex">
        <NavLink
          to="post"
          className="list-item link-style-none"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <AiOutlineHome className="margin-r text-xl" />
          Home
        </NavLink>
        <NavLink
          to="explore"
          className="list-item link-style-none"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <MdOutlineExplore className="margin-r text-xl " />
          Explore
        </NavLink>
        <NavLink
          to="bookmark"
          className="list-item link-style-none"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <BsBookmarks className="margin-r text-xl" />
          Bookmarks
        </NavLink>
        {/* <NavLink
          to="notification"
          className="list-item link-style-none"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <IoNotificationsOutline className="margin-r text-xl" />
          Notifications
        </NavLink> */}
        <NavLink
          to="profile"
          className="list-item link-style-none"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <CgProfile className="margin-r text-xl" />
          Profile
        </NavLink>
        <button className="btn btn-solid-primary margin-t" onClick={()=>navigate("/home/post")}>
          Create New Post
        </button>
      </div>
      <div className="user-data"></div>
    </aside>
  );
};
