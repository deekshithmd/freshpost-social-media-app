import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "services";

const initialState = {
  allUsers: [],
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
      [getAllUsers.pending]:(state)=>{
          state.userStatus="pending"
      },
      [getAllUsers.fulfilled]:(state,action)=>{
          state.userSatus="fulfilled",
          state.allUsers=action.payload.users
      },
      [getAllUsers.rejected]:(state,action)=>{
          state.userSatus="rejected",
          state.allUsers=action.payload
      }
  },
});

export default userSlice.reducer
