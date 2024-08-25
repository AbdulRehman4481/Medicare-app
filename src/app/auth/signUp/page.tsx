"use client";
import React from "react";
import Image from "next/image";
import Input from "../../../(components)/input/input";
import "./SignUpStyle.css";
import Images from "../../../constant/Image";
import Link from "next/link";
import useSignUp from "@/hooks/useSignUp";

export default function SignUp() {
    const { handleSubmit, handleChange ,isLoading} = useSignUp();

  return (
    <>
      <div className="signUpDiv">
        <div className="fromDiv">
        <h1 className="Heading">Welcome to Medicare</h1>
          <p className="para">Tell us about your company</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <Input
              type="text"
              place="Name"
              name="fullName"
              onChange={handleChange}
            />

            <label htmlFor="">Email</label>
            <Input
              type="email"
              place="Email"
              name="email"
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <Input
              type="text"
              place="Password"
              name="password"
              onChange={handleChange}
            />
            <label htmlFor="">Company Name</label>
            <Input
              type="text"
              place="Company Name"
              name="companyName"
              onChange={handleChange}
            />
            <label htmlFor="">How many employees do you have?</label>
            <Input
              type="number"
              place="Employees"
              name="employees"
              onChange={handleChange}
            />

            <Link href={"signIn"} className="signInLink">
              I Already Have An Account <u>Sign In</u>{" "}
            </Link>
            <button type="submit" className="finishBtn">
              {
                isLoading? "Loading...":"Finish"
              }
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
