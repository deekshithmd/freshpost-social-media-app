import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getPosts,
  likePost,
  dislikePost,
  addBookmark,
  removeBookmark,
  getUserPosts,
} from "services";

const initialState = {
  allPosts: [],
  userPost: [],
  bookmarks: [],
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

export const addBookmarks = createAsyncThunk(
  "post/addBookmarks",
  async ({ postId, encodedToken }, thunkAPI) => {
    try {
      const response = await addBookmark({ postId, encodedToken });
      // console.log("bookmark", response.data.bookmarks);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeBookmarks = createAsyncThunk(
  "post/addBookmarks",
  async ({ postId, encodedToken }, thunkAPI) => {
    try {
      const response = await removeBookmark({ postId, encodedToken });
      // console.log("bookmark", response.data.bookmarks);
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
    [addBookmarks.pending]: (state) => {
      state.bookmarkStatus = "pending";
    },
    [addBookmarks.fulfilled]: (state, action) => {
      state.bookmarkStatus = "fulfilled";
      state.bookmarks = action.payload.bookmarks;
    },
    [addBookmarks.rejected]: (state) => {
      state.bookmarkStatus = "pending";
    },
    [removeBookmarks.pending]: (state) => {
      state.bookmarkStatus = "pending";
    },
    [removeBookmarks.fulfilled]: (state, action) => {
      state.bookmarkStatus = "fulfilled";
      state.bookmarks = action.payload.bookmarks;
    },
    [removeBookmarks.rejected]: (state) => {
      state.bookmarkStatus = "pending";
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
  },
});

export default postSlice.reducer;
