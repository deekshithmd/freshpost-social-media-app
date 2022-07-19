import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUsers,
  getUser,
  updateUser,
} from "services";

const initialState = {
  currentUser: null,
  allUsers: JSON.parse(localStorage.getItem("users")) || [],
};

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await getUsers();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async ({ userId }, thunkAPI) => {
    try {
      const response = await getUser({ userId });
      // console.log("single", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async ({ userData, encodedToken }, thunkAPI) => {
    try {
      const response = await updateUser({ userData, encodedToken });
      // console.log("user", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.userStatus = "pending";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.userSatus = "fulfilled";
      state.allUsers = action.payload.users;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.userSatus = "rejected";
      state.allUsers = action.payload;
    },
    [getCurrentUser.pending]: (state) => {
      state.currentUserStatus = "pending";
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.currentUserStatus = "fulfilled";
      state.currentUser = action.payload.user;
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.currentUserStatus = "rejected";
    },
    [updateUserData.pending]: (state) => {
      state.updateUserDataStatus = "pending";
    },
    [updateUserData.fulfilled]: (state, action) => {
      state.updateUserDataStatus = "fulfilled";
      state.currentUser = action.payload.user;
    },
    [updateUserData.rejected]: (state, action) => {
      state.updateUserDataStatus = "rejected";
    },
    // [addBookmarks.pending]: (state) => {
    //   state.bookmarkStatus = "pending";
    // },
    // [addBookmarks.fulfilled]: (state, action) => {
    //   state.bookmarkStatus = "fulfilled";
    //   state.currentUser = {
    //     ...state.currentUser,
    //     bookmarks: action.payload.bookmarks,
    //   };
    // },
    // [addBookmarks.rejected]: (state) => {
    //   state.bookmarkStatus = "pending";
    // },
    // [removeBookmarks.pending]: (state) => {
    //   state.bookmarkStatus = "pending";
    // },
    // [removeBookmarks.fulfilled]: (state, action) => {
    //   state.bookmarkStatus = "fulfilled";
    //   state.currentUSer.bookmarks = action.payload.bookmarks;
    // },
    // [removeBookmarks.rejected]: (state) => {
    //   state.bookmarkStatus = "pending";
    // },
  },
});

export default userSlice.reducer;
