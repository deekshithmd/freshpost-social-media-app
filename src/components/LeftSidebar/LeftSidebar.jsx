import "./leftsidebar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export const LeftSidebar = () => {
  const activeStyle = {
    border: "2px solid var(--primary-color)",
  };
  return (
    <section className="left-sidebar-container link-style-none text-md">
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
        <NavLink
          to="notification"
          className="list-item link-style-none"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <IoNotificationsOutline className="margin-r text-xl" />
          Notifications
        </NavLink>
        <NavLink
          to="profile"
          className="list-item link-style-none"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <CgProfile className="margin-r text-xl" />
          Profile
        </NavLink>
        <button className="btn btn-solid-primary margin-t">
          Create New Post
        </button>
      </div>
      <div className="user-data"></div>
    </section>
  );
};
