import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, getUser } from "services";

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
      console.log("single", response.data);
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
  },
});

export default userSlice.reducer;
