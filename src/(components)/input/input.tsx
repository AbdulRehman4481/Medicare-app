import React from "react";
import "./InputStyle.css";

export default function Input({ type, place, name, onChange }: any) {
  return (
    <>
      <input
        type={type}
        placeholder={place}
        name={name}
        onChange={onChange}
        required
      />
    </>
  );
}