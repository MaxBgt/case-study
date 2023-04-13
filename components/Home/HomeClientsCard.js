import React from "react";
import TinyAreaChartClients from "../TinyAreaChartClients";

const HomeClientsCard = () => {
  return (
    <div className="home-container">
      <div className="clients card">
        <h2 className="title">Clients</h2>
        <p className="desc">2,150</p>
        <TinyAreaChartClients />
      </div>
    </div>
  );
};

export default HomeClientsCard;
