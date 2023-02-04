import React from "react";
import { Navbar } from "@components";
import "./Frame.css"

export default function Frame({ children }) {
  return (
    <div className="blaster-frame">
      <Navbar />
      {children}
    </div>
  )
}