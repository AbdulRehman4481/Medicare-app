"use client";
import Image from "next/image";
import "./page.css";
import Images from "../../constant/Image";
// import OnlineChart  from "../../(components)/onlineChart/OnlineChart";
import OfflineChart from "@/(components)/offlineChart/OfflineChart";
import Logout from "@/(components)/logout/Logout";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { RootState } from "@/store/store";
import TotalChart from "@/(components)/totalChart/TotalChart";
import { useEffect, useState } from "react";
import { fetchPatient } from "@/store/reducer/patientFetchReducer";
import OnlineChart from "@/(components)/onlineChart/OnlineChart";
import UpcomingTask from "@/(components)/upcomingTask/UpcomingTask";
import AppointmentModal from "@/(components)/appointmentModal/appointmentModal";
import useHome from "@/hooks/useHome";

export default function Home() {
  const {
    patientsData,
    appointmentData,
    filteredAppointmentsNo,
    filteredAppointments,
    trueAppointmentsPercentage,
    falseAppointmentsPercentage
  } = useHome();
  return (
    <>
      <div className="mainDiv">
        <div className="locationDiv">
          <span className="location">Dashboard &gt; summary </span>
        </div>
        <div className="chartMain">
          <div className="offline">
            <div className="offlineFirst">
              <h1>Offline Consultations</h1>
              <Image
                src={Images.threeDotIcon}
                width={23.54}
                height={23.54}
                alt="threeDotIcon"
              />
            </div>
            <div className="chartDiv">
              <div>
                <h4 className="amount">{filteredAppointmentsNo?.length}</h4>
                <h1 className="increase">
                  <Image
                    src={Images.increase}
                    width={21.5}
                    height={21.5}
                    alt="decrease"

                  />{" "}
                  {falseAppointmentsPercentage}%
                </h1>
              </div>
              <OfflineChart />
            </div>
          </div>
          <div className="online">
            <div className="onlineFirst">
              <h1>Online Consultations</h1>
              <Image
                src={Images.threeDotIcon}
                width={23.54}
                height={23.54}
                alt="threeDotIcon"
              />
            </div>
            <div className="chartDiv">
              <div>
                <h4 className="amount">{filteredAppointments?.length}</h4>
                <h1 className="decrease">
                  <Image
                    src={Images.decrease}
                    width={21.5}
                    height={21.5}
                    
                    alt="decrease"
                  />
                  {trueAppointmentsPercentage}%
                </h1>
              </div>

              <OnlineChart />
            </div>
          </div>
          <div className="total">
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
              <TotalChart />{" "}
            </div>
          </div>
        </div>
        <div className="workDiv">
          <div className="tasks">
            <div className="tasksDiv">
              <h1 className="taskHeading">Tasks</h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h5 className="newTask">New Task</h5>
                <div className="pluseIcon">
                  <Image
                    src={Images.pluseIcon}
                    width={9.32}
                    height={9.32}
                    alt="pluseIcon"
                  />
                </div>
              </div>
            </div>
            <div className="mainTask">
              <div className="checkDiv">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="dataDiv">
                  <p className="para">Task Completed successfully</p>
                  <p className="para1">
                    Sign up for Covid - 19 training course for medicine
                  </p>
                </div>
              </div>
              <div>
                <div className="dateDiv">
                  <Image
                    src={Images.threeDotIcon}
                    width={23.54}
                    height={23.54}
                    alt="threeDotIcon"
                  />
                </div>
                <div>
                  <span>24 Oct 2024</span>
                </div>
              </div>
            </div>
            <div className="mainTask">
              <div className="checkDiv">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="dataDiv">
                  <p className="para">Task Completed successfully</p>
                  <p className="para1">
                    Sign up for Covid - 19 training course for medicine
                  </p>
                </div>
              </div>
              <div>
                <div className="dateDiv">
                  <Image
                    src={Images.threeDotIcon}
                    width={23.54}
                    height={23.54}
                    alt="threeDotIcon"
                  />
                </div>
                <div>
                  <span>24 Oct 2024</span>
                </div>
              </div>
            </div>
            <div className="mainTask">
              <div className="checkDiv">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="dataDiv">
                  <p className="para">Task Completed successfully</p>
                  <p className="para1">
                    Sign up for Covid - 19 training course for medicine
                  </p>
                </div>
              </div>
              <div>
                <div className="dateDiv">
                  <Image
                    src={Images.threeDotIcon}
                    width={23.54}
                    height={23.54}
                    alt="threeDotIcon"
                  />
                </div>
                <div>
                  <span>24 Oct 2024</span>
                </div>
              </div>
            </div>
            <div className="mainTask">
              <div className="checkDiv">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="dataDiv">
                  <p className="para">Task Completed successfully</p>
                  <p className="para1">
                    Sign up for Covid - 19 training course for medicine
                  </p>
                </div>
              </div>
              <div>
                <div className="dateDiv">
                  <Image
                    src={Images.threeDotIcon}
                    width={23.54}
                    height={23.54}
                    alt="threeDotIcon"
                  />
                </div>
                <div>
                  <span>24 Oct 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="upcoming">
            <UpcomingTask />
          </div>
        </div>
      </div>
    </>
  );
}
