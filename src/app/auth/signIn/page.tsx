"use client";
import Input from "../../../(components)/input/input";
import "./SignInStyle.css";
import Link from "next/link";
import Image from "next/image";
import Images from "../../../constant/Image";
import { signIn } from "next-auth/react";
import useSignIn from "@/hooks/useSignIn";

export default function SignIn() {
  const { handleSubmit, isLoading, handleChange } = useSignIn();

  return (
    <>
      <div className="signInDiv">
        <div className="fromDiv">
          <h1 className="mainHeading">Welcome to Medicare</h1>
          <p className="para">Tell us about your company</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <Input
              type="email"
              place="Email"
              name="email"
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <Input
              type="password"
              place="Password"
              name="password"
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
            <button type="submit" className="finishBtn">
              {isLoading ? "Loading..." : "Finish"}
            </button>
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="googleBtn"
            >
              <Image
                src={Images.googleIcon}
                style={{ marginRight: 10 }}
                width={24}
                height={24}
                alt="googleIcon"
              />
              Google SignIn
            </button>
          </form>
        </div>
        <div className="secondDiv">
          <h1 className="secondHeading"> ALL IN ONE DASHBOARD</h1>
          <Image
            src={Images.loginImage}
            height={475.73}
            width={669}
            loading="lazy"
            style={{ width: "auto", height: "auto" }}
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
