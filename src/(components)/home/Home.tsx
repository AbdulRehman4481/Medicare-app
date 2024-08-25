import "../../app/(pages)/page.css";
import OfflineChart from "@/(components)/offlineChart/OfflineChart";
import TotalChart from "@/(components)/totalChart/TotalChart";
import OnlineChart from "@/(components)/onlineChart/OnlineChart";
import UpcomingTask from "@/(components)/upcomingTask/UpcomingTask";
import ToastNotification from "@/(components)/appoinmentNotification/AppointmentNotification";

export default function Home() {
  return (
    <>
      <div className="mainDiv">
        <div className="locationDiv">
          <span className="location">Dashboard &gt; summary </span>
        </div>
        <div className="chartMain">
          <div className="offline">
            <OfflineChart />
          </div>
          <div className="online">
            <OnlineChart />
          </div>
          <div className="total">
            <TotalChart />{" "}
          </div>
        </div>
        <div className="workDiv">
          <div className="upcoming">
            <UpcomingTask />
          </div>
        </div>
      </div>
      <ToastNotification />
    </>
  );
}
