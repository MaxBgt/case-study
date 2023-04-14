import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const TinyAreaChartTest = () => {
  const data = [
    { value: 0 },
    { value: 517 },
    { value: 1430 },
    { value: 2356 },
    { value: 3527 },
    { value: 4391 },
    { value: 5152 },
    { value: 6038 },
    { value: 6940 },
    { value: 7561 },
    { value: 8229 },
    { value: 8910 },
    { value: 9517 },
    { value: 10235 },
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

export default TinyAreaChartTest;
