"use client";
import { configureStore } from "@reduxjs/toolkit";
import patientFetchReducer from "./reducer/patientFetchReducer";
import appointmentReducer from "./reducer/appointmentReducer";
const store = configureStore({
  reducer: {
    patient: patientFetchReducer,
    appointment: appointmentReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
