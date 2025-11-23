import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

function RevenueReportChart1() {
  const data = {
    labels: ["Oct 2025", "Nov 2025"],
    datasets: [
      {
        label: "Revenue",
        data: [4800, 6000],
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        pointBackgroundColor: "#22c55e",
        pointBorderColor: "#22c55e",
        borderWidth: 3,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        borderColor: "#334155",
        borderWidth: 1,
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        ticks: { color: "#94a3b8" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#94a3b8" },
        grid: {
          borderDash: [4, 4],
          color: "#334155",
        },
      },
    },
  };

  return (
    <div className="w-full bg-[#0f172a] p-6 rounded-xl text-white">
      <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
      <Line data={data} options={options} height={100} />
    </div>
  );
}
export default RevenueReportChart1