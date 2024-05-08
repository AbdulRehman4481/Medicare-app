"use client";
import Image from "next/image";
import "./RestPasswordStyle.css";
import Link from "next/link";
import Input from "@/(components)/input/input";
import Images from "../../../constant/Image";
import useChangePassword from "@/hooks/useChangePassword";

export default function ChangePassword() {
  const { handleChangePassword, handleChange }=useChangePassword()

  return (
    <>
      <div className="restDiv">
        <div className="fromDiv">
          <h1 className="mainHeading">Rest Password</h1>
          <form>
            <label htmlFor="">Old Password</label>
            <Input
              type="password"
              place="Old Password"
              name="oldPassword"
              onChange={handleChange}
            />
            <label htmlFor="">New Password</label>
            <Input
              type="password"
              place="New Password"
              name="newPassword"
              onChange={handleChange}
            />
            <label htmlFor="">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              place="Confirm Password"
              onChange={handleChange}
            />
            <div className="linkDiv">
              <Link href={"signUp"} className="signUpLink">
                I Do't Have An Account <u>Sign Up</u>{" "}
              </Link>
              <Link href={"forgatPassword"} className="signInLink">
                Forgat Password
              </Link>
            </div>
            <button className="finishBtn" onClick={handleChangePassword}>
              Change Password
            </button>
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
