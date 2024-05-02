"use client";
import React from "react";
import Input from "../input/input";
import useForgatPassword from "@/hooks/useForgatPassword";
import Link from "next/link";

export default function ForgatPasswordFrom() {
  const { email, setEmail, sendEmail, getOtp } = useForgatPassword();
  return (
    <div>
      <form>
        {getOtp ? (
          <>
            <label htmlFor="">OTP</label>
            <Input type="email" place="Email" name="opt" />
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
            I Do't Have An Account <u>Sign Up</u>{" "}
          </Link>
        </div>
        <button className="finishBtn" onClick={sendEmail}>
          Submit
        </button>
      </form>
    </div>
  );
}
