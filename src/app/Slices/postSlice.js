import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getPosts,
  likePost,
  dislikePost,
  getUserPosts,
  addPost,
  addComment,
  updatePost,
  deletePost,
  updateComment,
  deleteComment,
  addBookmark,
  removeBookmark,
} from "services";

const initialState = {
  allPosts: [],
  userPost: [],
};

export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await getPosts();
      //console.log("posts",response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getUserPost = createAsyncThunk(
  "post/getUserPosts",
  async ({ username }, thunkAPI) => {
    try {
      const response = await getUserPosts({ username });
      // console.log("userPost", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const likePosts = createAsyncThunk(
  "post/likePosts",
  async ({ postId, encodedToken }, thunkAPI) => {
    try {
      const response = await likePost({ postId, encodedToken });
      // console.log("like",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const dislikePosts = createAsyncThunk(
  "post/dislikePosts",
  async ({ postId, encodedToken }, thunkAPI) => {
    try {
      const response = await dislikePost({ postId, encodedToken });
      // console.log("dislike", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addPosts = createAsyncThunk(
  "post/addPosts",
  async ({ postData, encodedToken }, thunkAPI) => {
    try {
      const response = await addPost({ postData, encodedToken });
      // console.log("add", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComments = createAsyncThunk(
  "post/addComments",
  async ({ commentData, postId, encodedToken }, thunkAPI) => {
    try {
      const response = await addComment({ commentData, postId, encodedToken });
      // console.log("add", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePosts = createAsyncThunk(
  "post/deletePosts",
  async ({ postId, encodedToken }) => {
    try {
      const response = await deletePost({ postId, encodedToken });
      // console.log("delete", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updatePosts = createAsyncThunk(
  "post/updatePosts",
  async ({ postData, postId, encodedToken }) => {
    try {
      const response = await updatePost({ postData, postId, encodedToken });
      // console.log("update", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComments = createAsyncThunk(
  "post/deleteComments",
  async ({ postId, commentId, encodedToken }) => {
    try {
      console.log("deleting post", { postId, commentId, encodedToken });
      const response = await deleteComment({ postId, commentId, encodedToken });
      console.log("delete", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateComments = createAsyncThunk(
  "post/updateComments",
  async ({ commentData, postId, commentId, encodedToken }) => {
    try {
      const response = await updateComment({
        commentData,
        postId,
        commentId,
        encodedToken,
      });
      // console.log("update", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addBookmarks = createAsyncThunk(
  "user/addBookmarks",
  async ({ postId, encodedToken }, thunkAPI) => {
    try {
      const response = await addBookmark({ postId, encodedToken });
      // console.log("bookmark", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeBookmarks = createAsyncThunk(
  "user/addBookmarks",
  async ({ postId, encodedToken }, thunkAPI) => {
    try {
      const response = await removeBookmark({ postId, encodedToken });
      console.log("bookmark", response.data.bookmarks);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [getAllPosts.rejected]: (state) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [likePosts.pending]: (state) => {
      state.likeStatus = "pending";
    },
    [likePosts.fulfilled]: (state, action) => {
      state.likeStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [likePosts.rejected]: (state, action) => {
      state.likeStatus = "rejected";
      state.allPosts = action.payload;
    },
    [dislikePosts.pending]: (state) => {
      state.likeStatus = "pending";
    },
    [dislikePosts.fulfilled]: (state, action) => {
      state.likeStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [dislikePosts.rejected]: (state, action) => {
      state.likeStatus = "rejected";
      state.allPosts = action.payload;
    },
    [getUserPost.pending]: (state) => {
      state.userPostStatus = "pending";
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.userPostStatus = "fulfilled";
      state.userPost = action.payload.posts;
    },
    [getUserPost.rejected]: (state) => {
      state.userPostStatus = "pending";
    },
    [addPosts.pending]: (state) => {
      state.addPostStatus = "pending";
    },
    [addPosts.fulfilled]: (state, action) => {
      state.addPostStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [addPosts.rejected]: (state) => {
      state.addPostStatus = "pending";
    },
    [deletePosts.pending]: (state) => {
      state.deletePostStatus = "pending";
    },
    [deletePosts.fulfilled]: (state, action) => {
      state.deletePostStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [deletePosts.rejected]: (state) => {
      state.deletePostStatus = "pending";
    },
    [updatePosts.pending]: (state) => {
      state.updatePostStatus = "pending";
    },
    [updatePosts.fulfilled]: (state, action) => {
      state.updatePostStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [updatePosts.rejected]: (state) => {
      state.updatePostStatus = "pending";
    },
    // [deleteComments.pending]: (state) => {
    //   state.deleteCommentStatus = "pending";
    // },
    // [deleteComments.fulfilled]: (state, action) => {
    //   state.deleteCommentStatus = "fulfilled";
    //   state.allPosts = action.payload.posts;
    // },
    // [deleteComments.rejected]: (state) => {
    //   state.deleteCommentStatus = "pending";
    // },
  },
});

export default postSlice.reducer;
