import React from "react";
import "../styles/test-card.scss";

function TestCard({ data }) {
  const { name, description } = data;

  return (
    <div className="test-card">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TestCard;
