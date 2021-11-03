import React from "react";
import { Line } from "react-chartjs-2";

export const LineGlaph = ({ inputData }) => {
  var datasetsArray = [];
  inputData["data"].forEach((value) => {
    datasetsArray.push({
      label: value["engineerCategoryName"],
      fill: false,
      pointRadius: 0,
      borderColor: value["dispColor"],
      data: value["value"],
      lineTension: 0,
    });
  });

  const data = {
    labels: inputData["year"],
    datasets: datasetsArray,
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0, 
            max: 12, 
          },
        },
      ],
    },
  };
  return <Line data={data} options={options} />;
};
