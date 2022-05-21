import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username: username,
        password: password,
      });
      console.log("data",response.data);
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e))
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        token: null,
        user: null,
      };
    },
    extraReducers: {
      [loginUser.pending]: (state) => {
        state.authStatus = "pending";
      },
      [loginUser.fulfilled]: (state,action) => {
        state.authStatus = "fulfilled",
        state.token = action.payload.encodedToken,
        state.user = action.payload.foundUser,
        localStorage.setItem("token", state.token),
        localStorage.setItem("user", JSON.stringify(state.user));
      },
      [loginUser.rejected]:(state,action)=>{
        state.authStatus="Error",
        state.error=action.payload
      }
    },
  },
});

export default authSlice.reducer;
