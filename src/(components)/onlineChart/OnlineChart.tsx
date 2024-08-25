"use client";
import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { fetchAppointment } from "@/store/reducer/appointmentReducer";
import { RootState } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import Loader from "../loader/Loader";
import Image from "next/image";
import Images from "../../constant/Image";
import useHome from "../../hooks/useHome";

export interface AppointmentDataType {
  consultation: string;
  dateTime: string;
}

interface State {
  series: { name: string; data: { x: Date; y: number }[] }[];
  options: ApexOptions;
}

const OnlineChart: React.FC<{}> = () => {
  const { trueAppointmentsPercentage } = useHome();
  const [loading, setLoading] = useState(true);

  const appointmentData: AppointmentDataType[] = useAppSelector(
    (state: RootState) => state.appointment.appointmentData
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAppointment())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching appointment data:", error);
        setLoading(false);
      });
  }, [dispatch]);

  const filteredAppointments = appointmentData.filter(
    (appointment) => appointment.consultation === "Yes"
  );

  const countAppointmentsByDay = (appointments: AppointmentDataType[]) => {
    const appointmentCounts: { [key: string]: number } = appointments.reduce(
      (acc: { [key: string]: number }, appointment) => {
        const date = new Date(appointment.dateTime);
        const timestamp = date.getDate().toString();
        acc[timestamp] = (acc[timestamp] || 0) + 1;
        return acc;
      },
      {}
    );
    return Object.entries(appointmentCounts).map(([timestamp, count]) => ({
      x: parseInt(timestamp),
      y: count,
    }));
  };

  const OnlineChartData: any = countAppointmentsByDay(filteredAppointments);
  const initialState: State = {
    series: [
      {
        name: "Online Consultations",
        data: OnlineChartData,
      },
    ],
    options: {
      chart: {
        type: "area",
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        colors: ["#EB5757"],
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
      fill: {
        colors: ["#EB5757"],
        opacity: 0.5,
      },
    },
  };
  if (loading) {
    return (
      <div
        style={{
          width: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Online Consultations</h1>
        <Image
          src={Images.threeDotIcon}
          width={23.54}
          height={23.54}
          alt="threeDotIcon"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}>
          <h4 className="amount">{filteredAppointments?.length}</h4>
        <h1 className="decrease">
          <Image
            src={Images.decrease}
            width={21.5}
            height={21.5}
            alt="decrease"
          />{" "}
          {trueAppointmentsPercentage}%
        </h1>
        </div>
        <div id="chart">
          <ReactApexChart
            options={initialState.options}
            series={initialState.series}
            type="area"
            height={112}
            width={164}
          />
        </div>
      </div>
    </div>
  );
};

export default OnlineChart;
