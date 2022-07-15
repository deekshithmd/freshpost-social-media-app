import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "services";

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

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getAllPosts.fulfilled]: (state, action) => {
      (state.postStatus = "fulfilled"), (state.allPosts = action.payload.posts);
    },
    [getAllPosts.rejected]: (state) => {
      (state.postStatus = "rejected"), (state.allPosts = action.payload);
    },
  },
});

export default postSlice.reducer;
