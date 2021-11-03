import React from "react";
import { Pie } from "react-chartjs-2";

export const PieGlaph = ({ inputData }) => {
  const data = {
    labels: inputData["label"],
    datasets: [{
      backgroundColor: inputData["color"],
      data: inputData["data"]
  }]
  };
  return <Pie data={data} />;
};
