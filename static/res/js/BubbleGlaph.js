import React from "react";
import { Bubble } from "react-chartjs-2";

export const BubbleGlaph = ({inputData}) => {
  Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
        var meta = chart.getDatasetMeta(i);
        if (meta.type == "bubble") {
          //exclude scatter
          meta.data.forEach(function (element, index) {
            // Draw the text in black, with the specified font
            ctx.fillStyle = "rgb(0, 0, 0)";
            var fontSize = 13;
            var fontStyle = "normal";
            var fontFamily = "Helvetica Neue";
            ctx.font = Chart.helpers.fontString(
              fontSize,
              fontStyle,
              fontFamily
            );

            // Just naively convert to string for now
            var dataString = dataset.data[index].toString();
            // Make sure alignment settings are correct
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            var padding = 15;
            var position = element.tooltipPosition();
            ctx.fillText(
              dataset.title,
              position.x,
              position.y - fontSize / 2 - padding
            );
          });
        } //if
      });
    },
  });
  
  var datasetsArray=[]
  inputData["data"].forEach(value => {

    datasetsArray.push(
      {
        label: [value["techName"]],
        backgroundColor: value["dispColor"],
        borderColor: value["dispColor"],
        title: value["techName"],
        data: [
          {
            x: value["experiencePeriod"],
            y: value["techPoint"],
            r: (value["experiencePeriod"] * value["techPoint"]),
          },
        ],
      }
    )
  })

  const data = {
    labels: "Africa",
    datasets: datasetsArray
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            // min: 0, 
            // max: 10, 
          },
        },
      ],
    },
  };

  return <Bubble data={data} options={options}/>;
};
