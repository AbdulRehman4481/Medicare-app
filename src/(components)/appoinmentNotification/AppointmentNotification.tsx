"use client";
import { fetchAppointment } from '@/store/reducer/appointmentReducer';
import { RootState } from '@/store/store';
import { useAppDispatch, useAppSelector } from '@/store/storeHook';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 interface AppointmentDataType {
  consultation: string;
  dateTime: string;
  patientName: string;
  
}

export default function ToastNotification() {
  const appointments:AppointmentDataType[] = useAppSelector((s: RootState) => s.appointment.appointmentData);
const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAppointment());
  }, [dispatch]);
  useEffect(() => {
    const checkAppointmentTime = () => {
      const now = new Date() as any;
      appointments.forEach(appointment => {
        const appointmentTime = new Date(appointment.dateTime) as any;
        const timeDifference = appointmentTime - now;
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));

        if (minutesDifference === 30 || minutesDifference === 10 || minutesDifference === 5) {
          showToast(`Your appointment with${appointment.patientName} is in ${minutesDifference} minutes.`);
        }
      });
    };

    const interval = setInterval(checkAppointmentTime, 60000); 

    return () => clearInterval(interval);
  }, [appointments]);

  return <ToastContainer position="top-right" autoClose={9000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />;
}

function showToast(message:any) {
  toast.info(message);
}
