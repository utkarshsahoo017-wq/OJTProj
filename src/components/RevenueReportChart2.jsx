import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function RevenueByCategory() {
  const categories = ["Salary", "Freelance", "Investment"];
  const values = [10000, 800, 200];

  const total = values.reduce((a, b) => a + b, 0);

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Revenue",
        data: values,
        backgroundColor: "#22c55e",
        borderRadius: 10,

        barPercentage: 1.0,       
        categoryPercentage: 0.75, 
        barThickness: 270,        
        maxBarThickness: 300,     
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        borderColor: "#334155",
        borderWidth: 1,
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
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
          color: "#334155",
          borderDash: [4, 4],
        },
      },
    },
  };

  const formatCurrency = (n) =>
    `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  return (
    <div className="w-full bg-[#0f172a] p-6 rounded-xl text-white space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Revenue by Category</h2>
        <p className="text-sm text-gray-400">
          Period: 23/05/2025 – 23/11/2025
        </p>
      </div>

      <div className="w-full h-80">
        <Bar data={data} options={options} />
      </div>

      <div className="space-y-6 mt-4">
        {categories.map((cat, i) => {
          const percent = ((values[i] / total) * 100).toFixed(1);

          return (
            <div key={cat} className="space-y-1">
              <div className="flex justify-between text-sm text-gray-300">
                <span>{cat}</span>
                <span>
                  {formatCurrency(values[i])} ({percent}%)
                </span>
              </div>

              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-[#22c55e] rounded-full"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
