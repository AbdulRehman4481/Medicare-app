import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { fetchAppointment } from "@/store/reducer/appointmentReducer";
import { RootState } from "@/store/store";

const localizer = momentLocalizer(moment);

interface AppointmentDataType {
  patientName: string;
  dateTime: string;
  duration: string;
  
}

const CalendarChart = () => {
  const dispatch = useAppDispatch();
  const appointment:AppointmentDataType[] = useAppSelector((s: RootState) => s.appointment.appointmentData);

  useEffect(() => {
    dispatch(fetchAppointment());
  }, [dispatch]);
  const events = appointment.map((appointmentItem) => {
    const durationMinutes = parseInt(appointmentItem.duration);
    const endDateTime = moment(appointmentItem.dateTime)
      .add(durationMinutes, "minutes")
      .toDate();

    return {
      title: appointmentItem.patientName,
      start: new Date(appointmentItem.dateTime),
      end: endDateTime,
    };
  });
  const today = moment().toDate();
  
  const CustomToolbar = () => {
    return null;
  };
  return (
    <div style={{ height: "700px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        defaultDate={today}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default CalendarChart;
