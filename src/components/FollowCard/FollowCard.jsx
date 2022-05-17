import "./followcard.css";

export const FollowCard = () => {
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
          <span>Deekshith M D</span>
          <span className="grey-text">@deekshithmd</span>
        </div>
      </div>
      <div className="follow-status">
        <span className="text-md text-bold text-primary">Follow +</span>
      </div>
    </div>
  );
};
