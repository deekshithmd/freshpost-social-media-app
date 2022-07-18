import "./postcard.css";
import { AiOutlineHeart, AiOutlineFileGif } from "react-icons/ai";
import { IoChatboxOutline } from "react-icons/io5";
import { BiImage } from "react-icons/bi";
import { FaRegSmile, FaEdit } from "react-icons/fa";
// import { GrShareOption } from "react-icons/gr";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FiMoreVertical } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
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
  updateComments,
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
  const [editId, setEditId] = useState("");
  const [updateComment, setUpdateComment] = useState("");
  const [postText, setPostText] = useState(data?.content);
  const dispatch = useDispatch();
  // console.log("bookmark post",bookmarks)
  // console.log("user", user);

  const profile = allUsers?.find((u) =>
    u?.username === data?.username ? u : ""
  );

  const handleLike = () =>
    dispatch(likePosts({ postId: data?._id, encodedToken: token }));

  const handleUnlike = () =>
    dispatch(dislikePosts({ postId: data?._id, encodedToken: token }));

  const handleAddBookmark = () =>
    dispatch(addBookmarks({ postId: data?._id, encodedToken: token }));

  const handleRemoveBookmark = () =>
    dispatch(removeBookmarks({ postId: data?._id, encodedToken: token }));

  const addComm = () => {
    dispatch(
      addComments({
        commentData: { comment: commentText },
        postId: data?._id,
        encodedToken: token,
      })
    );
    dispatch(getAllPosts());
  };

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
    // console.log("clicked delete");
    dispatch(
      deleteComments({ postId: data?._id, commentId: id, encodedToken: token })
    );
    dispatch(getAllPosts());
  };

  const commentUpdate = (id) => {
    dispatch(
      updateComments({
        commentData: { comment: updateComment },
        postId: data?._id,
        commentId: id,
        encodedToken: token,
      })
    );
    dispatch(getAllPosts());
    setEditId("");
    setUpdateComment("");
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
              <FiMoreVertical
                className="more-icon"
                onClick={() => setShow((s) => !s)}
              />
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
          <div className="comment-container margin-t">
            <input
              type="text"
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Type your comment here..."
            />
            <button className="btn btn-solid-primary" onClick={addComm}>
              Add
            </button>
            {data?.comments?.length > 0 && (
              <div className="comments">
                {data?.comments.map((c) =>
                  c._id === editId ? (
                    <div className="comment margin-b" key={c._id}>
                      <div className="comment-header flex">
                        <span>@{c?.username}</span>
                      </div>
                      <input
                        type="text"
                        defaultValue={c?.comment}
                        onChange={(e) => setUpdateComment(e.target.value)}
                      />
                      <button
                        className="btn btn-solid-primary"
                        onClick={() => commentUpdate(c._id)}
                      >
                        Update
                      </button>
                    </div>
                  ) : (
                    <div className="comment margin-b" key={c._id}>
                      <div className="comment-header flex">
                        <span>@{c?.username}</span>
                        <span className="comment-actions text-md">
                          {(data?.username === currentUser?.username ||
                            currentUser?.username === c?.username) && (
                            <>
                              <MdDelete
                                className="hover"
                                onClick={() => commentDelete(c?._id)}
                              />
                              <FaEdit
                                className="hover margin-l"
                                onClick={() => {
                                  setEditId(c?._id);
                                  setUpdateComment(c?.comment);
                                }}
                              />
                            </>
                          )}
                        </span>
                      </div>
                      <div className="comment-data text-md">{c?.comment}</div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
