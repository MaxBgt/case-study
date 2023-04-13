import React from "react";
import TinyAreaChartTest from "../TinyAreaChartTest";

const HomeTestsCard = () => {
  return (
    <div className="home-container">
      <div className="tests card">
        <h2 className="title">Total tests</h2>
        <p className="desc">11,050</p>
        <TinyAreaChartTest />
      </div>
    </div>
  );
};

export default HomeTestsCard;
