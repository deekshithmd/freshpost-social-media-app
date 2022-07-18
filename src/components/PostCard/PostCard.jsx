import "./postcard.css";
import { AiOutlineHeart, AiOutlineFileGif } from "react-icons/ai";
import { IoChatboxOutline } from "react-icons/io5";
import { BiImage } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
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
  deletePosts,
  updatePosts,
  deleteComments,
} from "app/Slices/postSlice";
import { useState } from "react";

export const PostCard = ({ data }) => {
  // console.log("Postcard Data", data);
  const { token } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.post);
  const { allUsers, currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [postText, setPostText] = useState("");
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

  const deletePost = () => {
    dispatch(deletePosts({ postId: data?._id, encodedToken: token }));
  };

  const editPost = () => {
    dispatch(
      updatePosts({
        postData: { content: postText },
        postId: data?._id,
        encodedToken: token,
      })
    );
    setEdit(false);
  };

  const commentDelete = (id) => {
    console.log("clicked delete");
    dispatch(
      deleteComments({ postId: data?._id, commentId: id, encodedToken: token })
    );
    dispatch(getAllPosts());
  };

  return (
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
          {data?.username === currentUser.username && (
            <div className="more text-md hover">
              <FiMoreHorizontal onClick={() => setShow((s) => !s)} />
              {show && (
                <div className="post-update">
                  <p className="update-item" onClick={() => deletePost()}>
                    Delete Post
                  </p>
                  <p
                    className="update-item border-top"
                    onClick={() => {
                      setEdit((e) => !e);
                      setShow(false);
                    }}
                  >
                    Edit Post
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        {edit && (
          <div className="modal-container">
            <div className="modal">
              <div className="post-grid new-post-container">
                <div className="profile">
                  <div className="avatar avatar-xs">
                    <img
                      className="img-responsive img-round"
                      src={currentUser?.profileUrl}
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
                      defaultValue={data?.content}
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
                    <button
                      className="btn btn-solid-primary"
                      onClick={() => editPost()}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <p className="post-content text-md text-justify">{data?.content}</p>
        <div className="post-footer text-lg flex">
          <span>
            {data?.likes?.likedBy?.find(
              (like) => like?.username == currentUser?.username
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
                <div className="commentt margin-b" key={c._id}>
                  <div className="comment-header flex">
                    <span>@{c?.username}</span>
                    <span className="comment-actions">
                      {(data?.username === currentUser?.username ||
                        currentUser?.username === c?.username) && (
                        <>
                          <button onClick={() => commentDelete(c?._id)}>
                            Delete
                          </button>
                          <button>Edit</button>
                        </>
                      )}
                    </span>
                  </div>
                  <div className="comment-data">{c?.comment}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
