import React from "react";
import SectionContainer from "../components/SectionContainer";
import "../styles/home.scss";

const sections = [
  { id: 1, title: "Characters" },
  { id: 2, title: "Episodes" },
  { id: 3, title: "Locations" },
].map((section) => <SectionContainer key={section.id} title={section.title} />);

function Home() {
  return <div className="home-container">{sections}</div>;
}

export default Home;
