import Image from "next/image";
import "./ForgatPasswordStyle.css";
import Images from "../../../constant/Image";

import ForgatPasswordFrom from "@/(components)/forgatPasswordFrom/ForgatPasswordFrom";
export default function ForgatPassword() {
  return (
    <>
      <div className="forgatDiv">
        <div className="fromDiv">
          <h1 className="mainHeading">Forgat Password</h1>
          <ForgatPasswordFrom />
        </div>
        <div className="secondDiv">
          <h1 className="secondHeading"> ALL IN ONE DASHBOARD</h1>
          <Image
            src={Images.loginImage}
            height={475.73}
            width={669}
            alt="loginImage"
          />
          <p className="para2">
            Keep track of all patient information in this section.
          </p>
          <button className="learnBtn">Learn More</button>
        </div>
      </div>
    </>
  );
}
