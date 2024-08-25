"use client";
import React from "react";
import Input from "../input/input";
import useForgatPassword from "@/hooks/useForgatPassword";
import Link from "next/link";

export default function ForgatPasswordFrom() {
  const {
    email,
    setEmail,
    getOtp,
    setOtpValue,
    handleSubmit,
    isLoading,
    handleOtpSubmit,
  } = useForgatPassword();
  return (
    <div>
      <form>
        {getOtp ? (
          <>
            <label htmlFor="">OTP</label>
            <input
              type="email"
              placeholder="Enter your OTP"
              name="verifyOtp"
              onChange={(e: any) => setOtpValue(e.target.value)}
            />
          </>
        ) : (
          <>
            <label htmlFor="">Email</label>
            <Input
              type="email"
              place="Email"
              name="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </>
        )}
        <div className="linkDiv">
          <Link href={"signUp"} className="signUpLink">
            I Do&apos;t Have An Account <u>Sign Up</u>{" "}
          </Link>
        </div>
        {getOtp ? (
          <button className="finishBtn" onClick={handleOtpSubmit}>
            {isLoading ? "loading..." : "Verify"}
          </button>
        ) : (
          <button className="finishBtn" onClick={handleSubmit}>
            {isLoading ? "loading..." : "Submit"}
          </button>
        )}
      </form>
    </div>
  );
}
