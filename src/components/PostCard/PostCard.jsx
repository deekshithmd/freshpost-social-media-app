import "./postcard.css";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatboxOutline } from "react-icons/io5";
import { GrShareOption } from "react-icons/gr";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  likePosts,
  dislikePosts,
  addBookmarks,
  removeBookmarks,
  addComments,
  getAllPosts,
} from "app/Slices/postSlice";
import { useState } from "react";

export const PostCard = ({ data }) => {
  // console.log("Postcard Data", data);
  const { token, user } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.post);
  const { allUsers } = useSelector((state) => state.user);
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  // console.log("bookmark post",bookmarks)
  // console.log("user", user);

  const handleLike = () => {
    dispatch(likePosts({ postId: data?._id, encodedToken: token }));
  };

  const handleUnlike = () => {
    // console.log("unlike");
    dispatch(dislikePosts({ postId: data?._id, encodedToken: token }));
  };

  const handleAddBookmark = () => {
    // console.log("bookmark");
    dispatch(addBookmarks({ postId: data?._id, encodedToken: token }));
  };

  const handleRemoveBookmark = () => {
    // console.log("bookmark");
    dispatch(removeBookmarks({ postId: data?._id, encodedToken: token }));
  };

  const addComm = () => {
    // console.log("addcom");
    dispatch(
      addComments({
        commentData: { comment: commentText },
        postId: data?._id,
        encodedToken: token,
      })
    );
    dispatch(getAllPosts());
  };

  const profile = allUsers?.find((u) =>
    u?.username === data?.username ? u : ""
  );
  // console.log("image", profile);

  return (
    // <div className="post-card-container">
    <div className="post-grid post-card-container">
      <div className="profile">
        <div className="avatar avatar-xs">
          <img
            className="img-responsive img-round"
            src={profile?.profileUrl}
            alt="Avatar"
          />
        </div>
      </div>
      <div className="post-card-content post-content">
        <div className="profile-detail flex">
          <div className="user-names">
            <span className="text-md text-bold margin-r">
              {data?.firstName}
              {data?.lastName}
            </span>
            <span className="text-md grey-text">@{data?.username}</span>
          </div>
          <div className="more text-md">
            <FiMoreHorizontal />
          </div>
        </div>
        <p className="post-content text-md text-justify">{data?.content}</p>
        <div className="post-footer text-lg flex">
          <span>
            {data?.likes?.likedBy?.find(
              (like) => like?.username == user?.username
            ) ? (
              <FcLike className="hover" onClick={handleUnlike} />
            ) : (
              <AiOutlineHeart className="hover" onClick={handleLike} />
            )}
            {data?.likes?.likeCount}
          </span>
          <span>
            <IoChatboxOutline
              className="hover"
              onClick={() => setComment((c) => !c)}
            />
            {data?.comments?.length || 0}
          </span>
          {/* <GrShareOption className="hover" /> */}
          {bookmarks.find((post) => post?._id == data?._id) ? (
            <BsBookmarkFill className="hover" onClick={handleRemoveBookmark} />
          ) : (
            <BsBookmark className="hover" onClick={handleAddBookmark} />
          )}
        </div>
        {comment && (
          <div className="comment">
            <input
              type="text"
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={addComm}>Add</button>
            <div className="comments">
              {data?.comments.map((c) => (
                <div className="commentt" key={c._id}>
                  {c.comment}
                  {(data?.username === user?.username ||
                    user?.username === c?.username) && <button>Delete</button>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};
