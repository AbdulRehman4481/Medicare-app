import React from "react";
import "./InputStyle.css";

export default function Input({ type, place, name, onChange,value }: any) {
  return (
    <>
      <input
        type={type}
        placeholder={place}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
}