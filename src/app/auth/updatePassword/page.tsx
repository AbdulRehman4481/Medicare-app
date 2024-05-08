"use client";
import Image from "next/image";
import "./RestPasswordStyle.css";
import Input from "@/(components)/input/input";
import Images from "../../../constant/Image";
import useUpdatePassword from "@/hooks/useUpdatePassword";
export default function UpdatePassword() {
  const { setNewPassword, setConfirmPassword, handleSubmit }=useUpdatePassword()

  return (
    <>
      <div className="restDiv">
        <div className="fromDiv">
          <h1 className="mainHeading">Update Password</h1>
          <form>
            <label htmlFor="">New Password</label>
            <Input
              type="password"
              place="New Password"
              name="newPassword"
              onChange={(e: any) => setNewPassword(e.target.value)}
            />
            <label htmlFor="">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              place="Confirm Password"
              onChange={(e: any) => setConfirmPassword(e.target.value)}
            />
            <button className="finishBtn"
            onClick={handleSubmit}
            >Change Password</button>
          </form>
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
