import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "Apple", price: 104505, sales: 19400, amt: 2100 },
    { name: "Samsung", price: 1500, sales: 122500, amt: 2500 },
    { name: "Oppo", price: 63000, sales: 20000, amt: 2400 },
    { name: "Mi", price: 9000, sales: 68000, amt: 2700 },
  ];
  return (
    <div className="my-10 ">
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;
