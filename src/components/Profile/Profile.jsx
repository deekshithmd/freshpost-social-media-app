import "./profile.css";
import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserPost } from "app/Slices/postSlice";
import { getCurrentUser } from "app/Slices/userSlice";
import { logoutUser } from "app/Slices/authSlice";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const navigate = useNavigate();
  const { userPost } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.user);
  console.log("profile", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPost({ username: user?.username }));
    // dispatch(getCurrentUser({ userId: currentUser._id }));
  }, []);

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <div className="profile-container flex">
        <div className="avatar avatar-sm">
          <img
            className="img-responsive img-round"
            src="https://i.postimg.cc/pLbNN3QY/myPhoto.jpg"
            alt="Avatar"
          />
        </div>
        <span className="text-lg text-bold margin-t">
          {currentUser?.firstName} {currentUser?.lastName}
        </span>
        <span className="text-md grey-text">@{currentUser?.username}</span>
        <button className="edit-btn text-sm text-bold">Edit Profile</button>
        <button className="edit-btn text-sm text-bold" onClick={logout}>
          Logout
        </button>
        <p className=" person-details text-md text-center">
          Learning FullStack web development in NeogCamp | Completed 5 FrontEnd
          Projects | HTML5, CSS, Javascript, ReactJS
        </p>
        <a
          href="https://github.com/deekshithmd"
          target="_blank"
          rel="noreferrer"
          className="nav-icon-link link-style-none text-md"
        >
          deekshithmd.com
        </a>
        <div className="content-data flex text-md">
          <div className="profile-activity flex">
            <span className="text-bold">
              {currentUser?.followers?.length || 0}
            </span>
            <span>Followers</span>
          </div>
          <div className="profile-activity flex">
            <span className="text-bold">1.5k</span>
            <span>Posts</span>
          </div>
          <div className="profile-activity flex">
            <span className="text-bold">
              {currentUser?.following?.length || 0}
            </span>
            <span>Following</span>
          </div>
        </div>
      </div>
      <div className="post-tag">
        <h3>Your Posts</h3>
      </div>
      <div className="posts-container flex">
        {userPost?.map((post) => (
          <PostCard key={post._id} data={post} />
        ))}
      </div>
    </>
  );
};
