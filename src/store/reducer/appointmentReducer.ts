import instance from "@/utilites/Instance";
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  appointmentData: [],
  isLoading: false,
};
export const fetchAppointment = createAsyncThunk(
  "appointment/fetchAppointment",
  async () => {
    try {
      const res = await instance(`/api/appointment`);
      const result = await res.data;
      return result.appointment;
    } catch (error) {}
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointmentData = action.payload;
      })
      .addCase(fetchAppointment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default appointmentSlice.reducer;
