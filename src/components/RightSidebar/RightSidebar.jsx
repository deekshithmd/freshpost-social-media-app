import "./rightsidebar.css";
import { FollowCard } from "components";
import { getAllUsers, getCurrentUser } from "app/Slices/userSlice";
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
    <div className="right-sidebar-container">
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
      <div className="follow-list-container margin-t">
        <header className="text-md text-center text-bold margin-b">
          People you may know
        </header>
        <div className="suggested-list flex">
          {allUsers?.map((users) =>
            users?.id !== user?.id ? (
              <FollowCard key={users?._id} userData={users} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
