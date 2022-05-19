import "./profile.css";
import { PostCard } from "components";
export const Profile = () => {
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
        <span className="text-lg text-bold margin-t">Deekshith M D</span>
        <span className="text-md grey-text">@deekshithmd</span>
        <button className="edit-btn text-sm text-bold">Edit Profile</button>
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
            <span className="text-bold">5k</span>
            <span>Followers</span>
          </div>
          <div className="profile-activity flex">
            <span className="text-bold">1.5k</span>
            <span>Posts</span>
          </div>
          <div className="profile-activity flex">
            <span className="text-bold">1k</span>
            <span>Following</span>
          </div>
        </div>
      </div>
      <div className="post-tag">
        <h3>Your Posts</h3>
      </div>
      <div className="posts-container flex">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};
