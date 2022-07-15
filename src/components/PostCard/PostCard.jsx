import "./postcard.css";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatboxOutline } from "react-icons/io5";
import { GrShareOption } from "react-icons/gr";
import { BsBookmark,BsBookmarkFill} from "react-icons/bs";
import {FcLike} from "react-icons/fc"
import { FiMoreHorizontal } from "react-icons/fi";
export const PostCard = ({data}) => {
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
            <span className="text-md grey-text">@{data.username}</span>
          </div>
          <div className="more text-md">
            <FiMoreHorizontal />
          </div>
        </div>
        <p className="post-content text-md text-justify">
          {data.content}
        </p>
        <div className="post-footer text-lg flex">
        <AiOutlineHeart/>
          <FcLike/>
          <IoChatboxOutline />
          <GrShareOption />
          <BsBookmark />
          <BsBookmarkFill/>
        </div>
      </div>
    </div>
  );
};
