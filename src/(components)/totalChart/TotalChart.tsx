"use client";
import { PatientDataType } from "../../constant/Types";
import { fetchPatient } from "@/store/reducer/patientFetchReducer";
import { RootState } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Loader from "../loader/Loader";
import Image from "next/image";
import Images from "../../constant/Image";

interface Props {}

const TotalChart: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const patientsData: PatientDataType[] = useAppSelector(
    (state: RootState) => state.patient.patientData
  );

  const [femaleNumber, setFemaleNumber] = useState<number>(0);
  const [maleNumber, setMaleNumber] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchPatient())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching appointment data:", error);
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    const femalePatientsData: PatientDataType[] = patientsData?.filter(
      (patient) => patient.gender === "Female"
    );
    const malePatientsData: PatientDataType[] = patientsData?.filter(
      (patient) => patient.gender === "Male"
    );
    setFemaleNumber(femalePatientsData?.length);
    setMaleNumber(malePatientsData?.length);
  }, [patientsData]);

  const series = [femaleNumber, maleNumber];

  const options: ApexOptions = {
    chart: {
      type: "donut",
      sparkline: {
        enabled: true,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      horizontalAlign: "left",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
            },
            total: {
              show: true,
              label: "Total",
            },
          },
        },
      },
    },
    colors: ["#EB5757", "#2F80ED"],
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val: number) {
          return val.toFixed(0);
        },
      },
      custom: function ({ seriesIndex }) {
        return seriesIndex === 0 ? "Female" : "Male";
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
      <div className="totalFirst">
              <h1>Total Patients</h1>
              <Image
                src={Images.threeDotIcon}
                width={23.54}
                height={23.54}
                alt="threeDotIcon"
              />
            </div>
            <div className="chartDiv">
              <h1 className="amount">{patientsData?.length}</h1>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={119}
          width={119}
        />
      </div>
      </div>

    </div>
  );
};

export default TotalChart;
