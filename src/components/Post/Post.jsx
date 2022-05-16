import "./post.css";
import { BiImage } from "react-icons/bi";
import { AiOutlineFileGif } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";

export const Post = () => {
  return (
    <div className="post-container">
      <div className="post-content">
        <div class="avatar avatar-xs margin-r">
          <img
            class="img-responsive img-round"
            src="https://i.postimg.cc/pLbNN3QY/myPhoto.jpg"
            alt="Avatar"
          />
        </div>
        <div className="post">
          <textarea name="" id="" cols="30" rows="6" placeholder="Write something here..."></textarea>
        </div>
      </div>
      <div className="post-footer">
        <div className="extra-data">
          <BiImage className="margin-r text-xl" />
          <AiOutlineFileGif className="margin-r text-lg" />
          <FaRegSmile className="margin-r text-lg" />
        </div>
        <button className="btn btn-solid-primary margin-t">Post</button>
      </div>
    </div>
  );
};
