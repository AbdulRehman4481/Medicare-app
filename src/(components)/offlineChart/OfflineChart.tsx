import React, { useEffect } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { fetchAppointment } from "@/store/reducer/appointmentReducer";
import { RootState } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";

export interface AppointmentDataType {
  consultation: string;
  dateTime: string;
}

interface State {
  series: { name: string; data: { x: Date; y: number }[] }[];
  options: ApexOptions;
}

const OfflineChart: React.FC<{}> = () => {
  const appointmentData: AppointmentDataType[] = useAppSelector(
    (state: RootState) => state.appointment.appointmentData
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAppointment());
  }, [dispatch]);

  

  const filteredAppointments = appointmentData?.filter(
    (appointment) => appointment.consultation === "No"
  );
  const chartDataMap = filteredAppointments?.reduce((acc, appointment) => {
    const date = new Date(appointment.dateTime);
    const timestamp = date.getTime();
    acc.set(timestamp, (acc.get(timestamp) || 0) + 1);
    return acc;
  }, new Map<number, number>());

  const chartData = Array.from(chartDataMap).map(([timestamp, count]) => ({
    x: new Date(timestamp),
    y: count,
  }));


  const initialState: State = {
    series: [
      {
        name: "Offline Consultations",
        data: chartData,
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
    },
  };

  return (
    <div>
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
  );
};

export default OfflineChart;
