import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../servies/api";

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

// const authSlice = createSlice({
//     name: "auth",
//     initialState: INITIAL_STATE,
//     reducers:{},
//     extraReducers: (builder) => {
//         builder
//             .addCase
//     }
// })

export default authSlice.reducer;

