"use client";
import { signOut } from "next-auth/react";
import React from "react";
export default function Logout() {
  return (
    <button className="text-white m-5 p-2" onClick={()=>{signOut()}}>
      logout
    </button>
  )};