import Images from "@/constant/Image";
import { fetchAppointment } from "@/store/reducer/appointmentReducer";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./AppoinemntStyle.css";
import { showToast } from "../toast/Toast";
import AppointmentModal from "../appointmentModal/appointmentModal";

interface AppointmentDataType {
  patientName: string;
  dateTime: string;
  duration: string;
  purpose: string;
  id: string;
}

export default function Appointments(props: { value: string }) {
  const { value } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAppointmentData, setEditAppointmentData] =
    useState<AppointmentDataType | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const patientData: AppointmentDataType[] = useAppSelector(
    (state) => state.appointment.appointmentData
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAppointment());
  }, []);
  const today = new Date();
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const todayAppointment = patientData?.filter((appointment) => {
    const appointmentDate = new Date(appointment.dateTime);
    const appointmentTime = appointmentDate.getHours();
    const comparisonTime = parseInt(value, 10);
    return (
      appointmentDate.getFullYear() === today.getFullYear() &&
      appointmentDate.getMonth() === today.getMonth() &&
      appointmentDate.getDate() === today.getDate() &&
      appointmentTime <= comparisonTime &&
      appointmentTime === comparisonTime &&
      appointmentTime >= comparisonTime
    );
  });

  const handleDelete = async (id: string) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        id: id,
      });

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
      };

      await fetch("http://localhost:3000/api/appointment", requestOptions);
      showToast("success", "Appointment SuccessFully Deleted");
    } catch (error) {}
  };
  const handleEdit = async (id: string) => {
    console.log("id", id);
    const appointment = todayAppointment.find(
      (appointment) => appointment.id === id
    );
    console.log("appointment", appointment);
    setIsModalOpen(true);
    setEditAppointmentData(appointment ?? null);
  };

  return (
    <>
      <div>
        {todayAppointment?.map((appointment, index) => (
          <div key={index}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "272px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={Images.blackDot}
                  width={6.81}
                  height={6.81}
                  alt="Black Dot"
                  style={{ marginLeft: 15.4 }}
                />
                <h6 className="timeValue">
                  {new Date(appointment.dateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </h6>
                <h6 className="patientName">{appointment.patientName}</h6>
              </div>
              <div
                className="dorpDownIcon"
                onClick={() => toggleDropdown(index)}
              >
                <Image
                  src={Images.dorpDown}
                  width={10.39}
                  height={5.7}
                  alt="dorpDown"
                  id="dorpDown"
                />
              </div>
            </div>
            {openDropdownIndex === index && (
              <div className="dropDownDiv">
                <div className="apData">
                  <div className="labelsDiv">
                    <span className="labels">Patient Name </span>
                    <span className="labels">Time </span>
                    <span className="labels">Purpose</span>
                  </div>
                  <div className="ansDiv">
                    <span className="ans">{appointment.patientName} </span>
                    <span className="ans">{appointment.duration}mins</span>
                    <span className="ans"> {appointment.purpose}</span>
                  </div>
                </div>
                <hr />
                <div className="dropMain">
                  <div className="dropIcon">
                    <div>
                      <button
                        onClick={() => {
                          handleDelete(appointment.id);
                        }}
                      >
                        <Image
                          src={Images.delete}
                          height={8.79}
                          width={7.35}
                          alt="delete"
                        />
                      </button>
                    </div>
                    <div>
                      <Image
                        src={Images.blueUser}
                        height={8.79}
                        width={7.35}
                        alt="delete"
                      />
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          handleEdit(appointment.id);
                        }}
                      >
                        <Image
                          src={Images.edit}
                          height={8.79}
                          width={7.35}
                          alt="delete"
                        />
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="beginBtn">Begin appointment</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        editAppointmentData={editAppointmentData}
      />
    </>
  );
}
