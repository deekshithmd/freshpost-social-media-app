import "./rightsidebar.css";
import { FollowCard } from "components";
export const RightSidebar = () => {
  return (
    <div className="right-sidebar-container flex">
      <div className="input search-field outlined margin-t">
        <input
          type="text"
          name="username"
          placeholder="Search here for People, Posts..."
        />
        <button className="search-icon">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="follow-list-container">
        <header className="flex text-md text-bold margin-b">
          {" "}
          <span>Who To Follow</span> <span>See More</span>{" "}
        </header>
        <div className="suggested-list flex">
          <FollowCard />
          <FollowCard />
          <FollowCard />
          <FollowCard />
          <FollowCard />
        </div>
      </div>
    </div>
  );
};
