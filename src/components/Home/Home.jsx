import "./home.css";
import { LeftSidebar, RightSidebar } from "components";
import { getPosts } from "services";
import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState();
useEffect(()=>{
  (async()=>{
    const o= await getPosts()
    console.log(o.data)
  })()
})
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
