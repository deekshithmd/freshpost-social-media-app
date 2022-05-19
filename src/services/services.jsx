import axios from "axios";

const getUsers = () => axios.get("/api/users");

const getUser = ({ userId }) => axios.get(`/api/users/${userId}`);

const getPosts = () => axios.get("/api/posts");

const updateUser = ({ userData, encodedToken }) =>
  axios.post(
    `/api/users/edit`,
    { userData },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const getPost = ({ postId }) => axios.get(`/api/posts/${postId}`);

const getUserPosts = ({ username }) => axios.get(`/api/posts/user/${username}`);

const addPost = ({ post, encodedToken }) =>
  axios.post(
    `/api/posts/`,
    { post },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const deletePost = ({ postId, encodedToken }) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

const updatePost = ({ postData, postId, encodedToken }) =>
  axios.post(
    `/api/posts/edit/${postId}`,
    {
      postData,
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const getComments = ({ postId }) => axios.get(`/api/comments/${postId}`);

const addComment = ({ commentData, postId, encodedToken }) =>
  axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const updateComment = ({ commentData, postId, commentId, encodedToken }) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const deleteComment = ({ postId, commentId, encodedToken }) =>
  axios.delete(`api/comments/delete/${postId}/${commentId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

const likePost = ({ postId, encodedToken }) =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const dislikePost = ({ postId, encodedToken }) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const addBookmark = ({ postId, encodedToken }) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const removeBookmark = ({ postId, encodedToken }) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const followUser = ({ followUserId, encodedToken }) =>
  axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const unfollowUser = ({ followUserId, encodedToken }) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export {
  getPosts,
  getUsers,
  getUser,
  updateUser,
  getPost,
  getUserPosts,
  addPost,
  deletePost,
  updatePost,
  getComments,
  addComment,
  updateComment,
  deleteComment,
  likePost,
  dislikePost,
  addBookmark,
  removeBookmark,
  followUser,
  unfollowUser,
};
