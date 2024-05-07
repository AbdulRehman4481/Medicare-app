"use client";
import Images from "@/constant/Image";
import Image from "next/image";
import React from "react";
import "./ScheduleStyle.css";
import CalenderChart from "@/(components)/calenderChart/CalenderChart";
import AppointmentModal from "@/(components)/appointmentModal/appointmentModal";
import useSchedule from "@/hooks/useSchedule";

export default function Schedule() {
  const { openModal,closeModal,isModalOpen }= useSchedule()
  return (
    <div className="scheduleMain">
      <h1 className="mainHeading">Schedule</h1>
      <div className="scheduleDiv">
        <div>
          <h1 className="scheduleHeading">
            Weekly schedule from 25th to 1st November 2022
          </h1>
        </div>
        <div className="iconsDiv">
          <div className="iconDiv" onClick={openModal}>
            <Image
              src={Images.pluseBlackIcon}
              width={17.54}
              height={17.54}
              alt="threeDotIcon"
              
            />
          </div>
          <div className="iconDiv">
            <Image
              src={Images.searchIcon}
              width={17.54}
              height={17.54}
              alt="threeDotIcon"
            />
          </div>
          <div className="iconDiv">
            <Image
              src={Images.filterIcon}
              width={17.54}
              height={17.54}
              alt="threeDotIcon"
            />
          </div>
          <div className="iconDiv">
            <Image
              src={Images.clarityIcon}
              width={17.54}
              height={17.54}
              alt="threeDotIcon"
            />
          </div>
        </div>
      </div>
      <div>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
        <CalenderChart />
      </div>
    </div>
  );
}
