import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../servies/api";
import { data } from "react-router-dom";

const INITIAL_STATE = {
  users: [],
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data)
)

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
