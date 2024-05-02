import instance from "@/utilites/Instance";
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: [],
  isLoading: false,
};
export const fetchUser = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    try {
      const res = await instance(`/api/register`);
      const result = await res.data;
      return result.user;
    } catch (error) {}
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
