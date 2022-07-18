import "./newpost.css";
import { BiImage } from "react-icons/bi";
import { AiOutlineFileGif } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addPosts } from "app/Slices/postSlice";
import { useState } from "react";

export const NewPost = () => {
  const [postText, setPostText] = useState();
  //const { currentUser } = useSelector((state) => state.user);
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const add = () => {
    // console.log("add click");
    dispatch(
      addPosts({ postData: { content: postText }, encodedToken: token })
    );
    setPostText("");
  };
  return (
    <div className="post-grid new-post-container">
      <div className="profile">
        <div className="avatar avatar-xs">
          <img
            className="img-responsive img-round"
            src={user?.profileUrl}
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
            value={postText}
            placeholder="Write something here..."
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <div className="new-post-footer">
          <div className="extra-data hover">
            <BiImage className="margin-r text-lg" />
            <AiOutlineFileGif className="margin-r text-lg" />
            <FaRegSmile className="margin-r text-lg" />
          </div>
          <button className="btn btn-solid-primary" onClick={add}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
