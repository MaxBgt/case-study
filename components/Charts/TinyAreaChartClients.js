import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const TinyAreaChartClients = () => {
  const data = [
    { value: 0 },
    { value: 10 },
    { value: 20 },
    { value: 100 },
    { value: 130 },
    { value: 140 },
    { value: 135 },
    { value: 200 },
    { value: 250 },
    { value: 350 },
    { value: 200 },
    { value: 450 },
    { value: 550 },
    { value: 625 },
  ];

  return (
    <ResponsiveContainer width="80%" height={100}>
      <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
        <Area
          type="monotone"
          dataKey="value"
          stroke=" #75fbaa"
          strokeWidth={2}
          fill="#2A4C38"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TinyAreaChartClients;
