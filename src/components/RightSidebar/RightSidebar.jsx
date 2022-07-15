import "./rightsidebar.css";
import { FollowCard } from "components";
import { getAllUsers } from "app/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export const RightSidebar = () => {
  const { allUsers } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(getAllUsers());
    })();
  }, []);
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
          {allUsers?.map((users) =>
            users.id !== user.id ? (
              <FollowCard key={users._id} userData={users} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
