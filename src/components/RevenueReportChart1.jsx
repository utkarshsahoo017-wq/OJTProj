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

function RevenueReportChart1({ monthlyData }) {
  if (!monthlyData || Object.keys(monthlyData).length === 0) {
    return (
      <div className="w-full bg-[#0f172a] p-6 rounded-xl text-white">
        <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
        <p className="text-gray-400 text-sm">Not enough data to generate chart.</p>
      </div>
    );
  }

  const formatLabel = (key) => {
    const [year, month] = key.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
  };

  const sortedKeys = Object.keys(monthlyData).sort((a, b) => new Date(a) - new Date(b));

  const labels = sortedKeys.map((key) => formatLabel(key));
  const incomeValues = sortedKeys.map((key) => monthlyData[key].income);

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: incomeValues,
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

export default RevenueReportChart1;
