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
  async (data, thunkAPI) => {
    try {
      const response = await api.post("/auth/login", data);
      thunkAPI.dispatch(getCurrentUser());
      return response.data;
    } catch (error) {
      console.log("API Error Response:", error.response?.data);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/auth/current-user");
      thunkAPI.dispatch(getUserDetails(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getUserDetails",
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.get(`/auth/user/${email}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
