import React from "react";
import "./Blast.css";
import BlastActions from "./BlastActions";
import BlastAvatar from "./BlastAvatar";
import BlastText from "./BlastText";

export default function Blast({ blast }) {
  return (
    <div className="blast">
      <BlastAvatar blaster={blast.blaster} />
      <BlastText text={blast.text} />
      <BlastActions />
    </div>
  )
}