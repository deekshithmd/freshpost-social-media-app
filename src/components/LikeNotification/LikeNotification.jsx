import { PostCard } from "components";
import { FiMoreHorizontal } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
export const LikeNotification = () => {
  return (
    <div className="like-notification-container post-grid post-card-container">
      <div className="profile text-2xl">
        <FcLike />
      </div>
      <div className="post-card-content post-content">
        <div className="profile-detail flex">
          <div className="user-names">
            <div>
              <div className="avatar avatar-xs margin-r">
                <img
                  className="img-responsive img-round"
                  src="https://i.postimg.cc/pLbNN3QY/myPhoto.jpg"
                  alt="Avatar"
                />
              </div>
              <span className="text-md text-bold margin-r">Deekshith M D</span>
              <span className="text-md grey-text">@deekshithmd</span>
            </div>
            <div className="notification-message text-md">Liked your post</div>
          </div>
          <div className="more text-md">
            <FiMoreHorizontal />
          </div>
        </div>
        <div className="notification">
          <PostCard />
        </div>
      </div>
    </div>
  );
};
