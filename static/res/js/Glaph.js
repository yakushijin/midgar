import React from "react";
import { Bar } from "react-chartjs-2";

export const Glaph = ({data}) => {
    const graphData = {
        labels: [
          // 軸ラベル
          // 各ラベルを配列にすることで軸ラベルが改行されて表示される
          ["2019年", "1月"],
          ["2019年", "2月"],
          ["2019年", "3月"],
          ["2019年", "4月"],
          ["2019年", "5月"],
          ["2019年", "6月"],
          ["2019年", "7月"],
          ["2019年", "8月"],
          ["2019年", "9月"],
          ["2019年", "10月"],
          ["2019年", "11月"],
          ["2019年", "12月"],
        ],
        datasets: [
          // 表示するデータセット
          {
            data: data["test"],
            label: "月別合計降水量(mm)",
          },
        ],
      };
      return (
        <div>
          <Bar data={graphData} />
        </div>
      );
}


