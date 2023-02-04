import React from "react";
import Blast from "./Blast";
import "./BlastList.css";

export default function BlastList({ blasts }) {
  return (
    <div className="blast-list">
      {blasts.map(blast =>
        <Blast key={blast.id} blast={blast} />
      )}
    </div>
  )
}