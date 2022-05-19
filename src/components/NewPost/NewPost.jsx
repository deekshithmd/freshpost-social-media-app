import "./newpost.css";
import { BiImage } from "react-icons/bi";
import { AiOutlineFileGif } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
export const NewPost = () => {
  return (
    <div className="post-grid new-post-container">
      <div className="profile">
        <div className="avatar avatar-xs">
          <img
            className="img-responsive img-round"
            src="https://i.postimg.cc/pLbNN3QY/myPhoto.jpg"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="post-content">
        <div className="new-post">
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Write something here..."
          ></textarea>
        </div>
        <div className="new-post-footer">
          <div className="extra-data">
            <BiImage className="margin-r text-lg" />
            <AiOutlineFileGif className="margin-r text-lg" />
            <FaRegSmile className="margin-r text-lg" />
          </div>
          <button className="btn btn-solid-primary">Post</button>
        </div>
      </div>
    </div>
  );
};
