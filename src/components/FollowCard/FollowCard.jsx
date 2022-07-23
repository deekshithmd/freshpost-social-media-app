import "./followcard.scss";
import { useSelector, useDispatch } from "react-redux";
import { followUsers, unfollowUsers } from "app/Slices/authSlice";
import { getCurrentUser } from "app/Slices/userSlice";

export const FollowCard = ({ userData }) => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUsers({ followUserId: userData._id, encodedToken: token }));
    dispatch(getCurrentUser({ userId: user._id }));
  };

  const handleUnFollow = () => {
    dispatch(
      unfollowUsers({ followUserId: userData._id, encodedToken: token })
    );
    dispatch(getCurrentUser({ userId: user._id }));
  };
  return (
    <div className="person-data flex hover">
      <div className="profile-info flex">
        <div className="avatar avatar-xs">
          <img
            className="img-responsive img-round"
            src={userData.profileUrl}
            alt="Avatar"
          />
        </div>
        <div className="user-names flex text-md margin-l">
          {userData?.firstName} {userData?.lastName}
          <span className="grey-text">@{userData?.username}</span>
        </div>
      </div>
      <div className="follow-status">
        {user?.following?.some((u) => u.id === userData?.id) ? (
          <span
            className="text-md text-bold text-primary hover"
            onClick={handleUnFollow}
          >
            Unfollow
          </span>
        ) : (
          <span
            className="text-md text-bold text-primary"
            onClick={handleFollow}
          >
            Follow +
          </span>
        )}
      </div>
    </div>
  );
};
