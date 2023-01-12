import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { StatData } from "../../Utils/DataForStatsChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
      color: "rgb(233, 233, 233)",
    },
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        color: "rgb(233, 233, 233)",
      },
    },
    x: {
      ticks: {
        color: "rgb(233, 233, 233)",
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.floor(Math.random() * 1001)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const ChartForStats = () => {
  return <Bar data={data} options={options} />;
};

export default ChartForStats;
