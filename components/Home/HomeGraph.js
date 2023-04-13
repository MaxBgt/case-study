import React from "react";
import ChartTestPassedVsFailed from "../ChartTestPassedVsFailed";

const HomeGraph = () => {
  return (
    <div className="home-container">
      <div className="grah card">
        <h2 className="title">Passed / failed</h2>
        <ChartTestPassedVsFailed />
      </div>
    </div>
  );
};

export default HomeGraph;
