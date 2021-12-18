import React from "react";
import "../styles/test-card.scss";

function TestCard({ title, description }) {
  return (
    <div className="test-card">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TestCard;
