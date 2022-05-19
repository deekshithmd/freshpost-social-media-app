import "./postcard.css";
import { FiHeart } from "react-icons/fi";
import { IoChatboxOutline } from "react-icons/io5";
import { GrShareOption } from "react-icons/gr";
import { BsBookmark } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
export const PostCard = () => {
  return (
    <div className="post-grid post-card-container">
      <div className="profile">
        <div className="avatar avatar-xs">
          <img
            className="img-responsive img-round"
            src="https://i.postimg.cc/pLbNN3QY/myPhoto.jpg"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="post-card-content post-content">
        <div className="profile-detail flex">
          <div className="user-names">
            <span className="text-md text-bold margin-r">Deekshith M D</span>
            <span className="text-md grey-text">@deekshithmd</span>
          </div>
          <div className="more text-md">
            <FiMoreHorizontal />
          </div>
        </div>
        <p className="post-content text-md text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          quis tellus semper, suscipit urna a, venenatis dui. Fusce in mi
          efficitur, cursus sem vitae, rhoncus ipsum. Praesent varius quam
          luctus justo commodo, eget hendrerit lorem blandit. Nunc turpis
          sapien, placerat vel tempor sit amet, tincidunt nec erat. Phasellus
          faucibus nec ante a euismod.
        </p>
        <div className="post-footer text-lg flex">
          <FiHeart />
          <IoChatboxOutline />
          <GrShareOption />
          <BsBookmark />
        </div>
      </div>
    </div>
  );
};
