import React from "react";
import TinyAreaChartTest from "../Charts/TinyAreaChartTest";

const HomeTestsCard = () => {
  return (
    <div className="home-container">
      <h2 className="title">Total tests</h2>
      <p className="desc">11,050</p>
      <TinyAreaChartTest />
    </div>
  );
};

export default HomeTestsCard;
