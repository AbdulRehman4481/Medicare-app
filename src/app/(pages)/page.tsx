
import dynamic from "next/dynamic";
const HomeComponent = dynamic(() => import('../../(components)/home/Home'), { ssr: false })
export default function Home() {
  return (
    <>
    <HomeComponent />
<<<<<<< HEAD
      {/* <div className="mainDiv">
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
      <ToastNotification /> */}
=======
>>>>>>> origin/master
    </>
  );
}
