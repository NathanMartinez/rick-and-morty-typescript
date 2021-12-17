import React from "react";
import TestCard from "../components/TestCard";
import "../styles/home.scss";

function Home() {
  return (
    <div className="home-container">
      <h1>Characters</h1>
      <hr />
      <section>
        <TestCard />
        <TestCard />
        <TestCard />
      </section>
      <h1>Episodes</h1>
      <hr />
      <section>
        <TestCard />
        <TestCard />
        <TestCard />
      </section>
      <h1>Locations</h1>
      <hr />
      <section>
        <TestCard />
        <TestCard />
        <TestCard />
      </section>
    </div>
  );
}

export default Home;
