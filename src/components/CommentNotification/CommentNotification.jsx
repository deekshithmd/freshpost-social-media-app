import { ReplyCard } from "components";
import { FiMoreHorizontal } from "react-icons/fi";
import { FcComments } from "react-icons/fc";

export const CommentNotification = () => {
  return (
    <div className="comment-notification-container post-grid post-card-container">
      <div className="profile text-2xl">
        <FcComments />
      </div>
      <div className="post-card-content post-content">
        <div className="profile-detail flex">
          <div>
            <div className="user-names">
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
            <div className="notification-message text-md">
              Commented on your post
            </div>
          </div>
          <div className="more text-md">
            <FiMoreHorizontal />
          </div>
        </div>
        <div className="notification">
          <ReplyCard />
        </div>
      </div>
    </div>
  );
};
