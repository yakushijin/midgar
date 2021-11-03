import React from "react";
import { Radar } from "react-chartjs-2";

export const RadarGlaph = ({ inputData }) => {
  const data = {
    labels: inputData["label"],
    datasets: [
      {
        label: "技術",
        data: inputData["data"]["tech"],
        backgroundColor: "#96bbe9",
        pointRadius: 0,
        borderWidth: 1,
        // pointBackgroundColor: "RGB(46,106,177)",
      },
      {
        label: "マネジメント",
        data: inputData["data"]["manage"],
        backgroundColor: "#ebb8d3",
        pointRadius: 0,
        borderWidth: 1,
        // pointBackgroundColor: "RGB(46,106,177)",
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        min: -1,
        // max: 10, 
      }
    },
  };

  return <Radar data={data} options={options}/>;
};
