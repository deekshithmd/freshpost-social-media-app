import "./followcard.css";

export const FollowCard = ({ user }) => {
  return (
    <div className="person-data flex">
      <div className="profile-info flex">
        <div className="avatar avatar-xs">
          <img
            className="img-responsive img-round"
            src="https://i.postimg.cc/pLbNN3QY/myPhoto.jpg"
            alt="Avatar"
          />
        </div>
        <div className="user-names flex text-md margin-l">
          {user.firstName} {user.lastName}
          <span className="grey-text">@{user.username}</span>
        </div>
      </div>
      <div className="follow-status">
        <span className="text-md text-bold text-primary">Follow +</span>
      </div>
    </div>
  );
};
