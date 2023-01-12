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

const ChartForStats = ({ pokemonStats }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = ["HP", "Atk", "Def", "SpA", "SpD", "Spe"];

  const options = {
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
        text: "Stats",
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
        max: 300,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: pokemonStats.map((stat) => stat),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default ChartForStats;
// every 4 evs give plus one to the stat
