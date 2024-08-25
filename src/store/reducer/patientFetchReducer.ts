import instance from "@/utilites/Instance";
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  patientData: [],
  isLoading: false,
};
export const fetchPatient = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    try {
      const res = await instance(`/api/patient`);
      const result = await res.data;
      return result.patients;
    } catch (error) {}
  }
);

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.patientData = action.payload;
      })
      .addCase(fetchPatient.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default patientSlice.reducer;
