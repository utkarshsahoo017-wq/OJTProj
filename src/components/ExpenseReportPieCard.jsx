import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLOR_PALETTE = [
  "#e11d48", "#f97316", "#facc15", "#fb923c", "#22c55e",
  "#10b981", "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7",
  "#ec4899", "#f87171", "#34d399", "#4ade80", "#fbbf24",
  "#fde047", "#67e8f9", "#38bdf8", "#818cf8", "#c084fc"
];

function ExpenseReportPieCard({ categoryData }) {
  const [bgColor, setBgColor] = useState([]);

  useEffect(() => {
    if (!Array.isArray(categoryData.rawdata)) {
      setBgColor([]);
      return;
    }
    setBgColor(COLOR_PALETTE.slice(0, categoryData.rawdata.length));
  }, [categoryData]);

  const data = {
    labels: categoryData.labels || [],
    datasets: [
      {
        data: categoryData.rawdata || [],
        backgroundColor: bgColor,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    maintainAspectRatio: false,
  };

  const total = (categoryData.rawdata || []).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-[#0e1424] text-white p-6 rounded-xl border border-gray-700 w-full mx-auto">

      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Total Expenses: <span className="text-white">₹{total}</span>
        </h2>
      </div>

      <div className="flex gap-10">

        <div className="w-1/2 flex flex-col items-center">

          <div className="w-48 h-48">
            <Pie data={data} options={options} />
          </div>

          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            {(categoryData.labels || []).map((x, i) => (
              <span className="flex items-center gap-2" key={i}>
                <span
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: bgColor[i] }}
                ></span>
                {x}
              </span>
            ))}
          </div>

        </div>

        <div className="w-1/2 space-y-6">
          {(categoryData.labels || []).map((label, i) => {
            const amount = categoryData.rawdata?.[i] || 0;
            const percent = total > 0 ? ((amount / total) * 100).toFixed(1) : 0;

            return (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: bgColor[i] }}
                    ></span>
                    {label}
                  </span>
                  <span className="text-gray-300">
                    ₹{amount.toFixed(2)} ({percent}%)
                  </span>
                </div>

                <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
                  <div
                    className="h-2 rounded"
                    style={{
                      width: `${percent}%`,
                      backgroundColor: bgColor[i],
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default ExpenseReportPieCard;
