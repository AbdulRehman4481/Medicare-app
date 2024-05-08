import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { fetchPatient } from "@/store/reducer/patientFetchReducer";
import { RootState } from "@/store/store";
import { AppointmentDataType, PatientDataType } from "../constant/Types";

export default function useHome() {
  const patientsData: PatientDataType[] = useAppSelector(
    (state: RootState) => state.patient.patientData
  );
  const appointmentData: AppointmentDataType[] = useAppSelector(
    (state: RootState) => state.appointment.appointmentData
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPatient());
  }, []);
  const filteredAppointmentsNo = appointmentData?.filter(
    (appointment) => appointment.consultation === "No"
  );
  const filteredAppointments = appointmentData?.filter(
    (appointment) => appointment.consultation === "Yes"
  );
  const totalAppointmentsCount = appointmentData?.length;
  const trueAppointmentsPercentage = (
    (filteredAppointments?.length / totalAppointmentsCount) *
    100
  ).toFixed(0);
  const falseAppointmentsPercentage = (
    (filteredAppointmentsNo?.length / totalAppointmentsCount) *
    100
  ).toFixed(0);

  return {
    patientsData,
    falseAppointmentsPercentage,
    trueAppointmentsPercentage,
    appointmentData,
    filteredAppointmentsNo,
    filteredAppointments,
  };
}
