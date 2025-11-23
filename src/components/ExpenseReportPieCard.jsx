import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpensesBreakdown() {
  const data = {
    labels: [
      "Bills & Utilities",
      "Shopping",
      "Healthcare",
      "Food & Dining",
      "Transportation",
      "Entertainment",
    ],
    datasets: [
      {
        data: [150, 120, 75, 74.25, 60, 35],
        backgroundColor: [
          "#e11d48",
          "#f97316",
          "#facc15",
          "#fb923c",
          "#22c55e",
          "#10b981",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
  };

  const categories = [
    { label: "Bills & Utilities", amount: 150, percent: "29.2%", color: "bg-red-500" },
    { label: "Shopping", amount: 120, percent: "23.3%", color: "bg-orange-500" },
    { label: "Healthcare", amount: 75, percent: "14.6%", color: "bg-yellow-400" },
    { label: "Food & Dining", amount: 74.25, percent: "14.4%", color: "bg-orange-300" },
    { label: "Transportation", amount: 60, percent: "11.7%", color: "bg-green-500" },
    { label: "Entertainment", amount: 35, percent: "6.8%", color: "bg-emerald-500" },
  ];

  return (
    <div className="bg-[#0e1424] text-white p-6 rounded-xl border border-gray-700 w-full mx-auto">

      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Total Expenses: <span className="text-white">₹514.25</span>
        </h2>
        <p className="text-gray-400 text-sm">Period: 22/10/2025 - 22/11/2025</p>
      </div>

      <div className="flex gap-10">
        
        <div className="w-1/2 flex flex-col items-center">

          <div className="w-48 h-48"> 
            <Pie data={data} options={options} />
          </div>

          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded"></span> Bills & Utilities
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded"></span> Shopping
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-400 rounded"></span> Healthcare
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-300 rounded"></span> Food & Dining
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded"></span> Transportation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-500 rounded"></span> Entertainment
            </span>
          </div>

        </div>

        <div className="w-1/2 space-y-6">
          {categories.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded ${item.color}`}></span>
                  {item.label}
                </span>
                <span className="text-gray-300">
                  ₹{item.amount.toFixed(2)} ({item.percent})
                </span>
              </div>

              <div className="w-full bg-gray-700 h-2 rounded">
                <div
                  className={`${item.color} h-2 rounded`}
                  style={{ width: item.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ExpensesBreakdown;
