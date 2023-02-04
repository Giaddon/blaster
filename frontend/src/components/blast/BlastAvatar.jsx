import React from "react";
import "./BlastAvatar.css";

export default function BlastAvatar({ blaster }) {
  return (
    <div className="blast-avatar">
      <div className="blast-avatar__image"></div>
      <p className="blast-avatar__signature">{blaster}</p>
    </div>
  )
}