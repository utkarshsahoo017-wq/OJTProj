import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { getCategoryData } from "../utils/getCategoryData";
import fetchUserData from "../utils/datafetch";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
function ExpensesBreakdown() {
  const [categoryData, setCategoryData] = useState({
    labels: [],
    rawdata: [],
  });
  const [normalData, setNormalData] = useState([])
  const [bgColor, setBgColor] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetchUserData()
      setNormalData(response)
    }
    getData()
  }, [])
  const COLOR_PALETTE = [
    "#e11d48", "#f97316", "#facc15", "#fb923c", "#22c55e",
    "#10b981", "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7",
    "#ec4899", "#f87171", "#34d399", "#4ade80", "#fbbf24",
    "#fde047", "#67e8f9", "#38bdf8", "#818cf8", "#c084fc"
  ];

  useEffect(() => {
    async function fetchCategory() {
      const response = await getCategoryData(normalData, 'debit')
      setCategoryData(response)
    }
    fetchCategory()
  }, [normalData])

  useEffect(() => {
    if (!categoryData?.rawdata) return;

    const backgroundColors = COLOR_PALETTE.slice(0, categoryData.rawdata.length);
    setBgColor(backgroundColors);
  }, [categoryData]);

  const data = {
    labels: categoryData.labels,
    datasets: [
      {
        data: categoryData.rawdata,
        backgroundColor: bgColor,
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
          Total Expenses: <span className="text-white">{`₹${categoryData.rawdata.reduce((curr, x) => curr + x, 0)}`}</span>
        </h2>
        <p className="text-gray-400 text-sm">Period: 22/10/2025 - 22/11/2025</p>
      </div>

      <div className="flex gap-10">

        <div className="w-1/2 flex flex-col items-center">

          <div className="w-48 h-48">
            <Pie data={data} options={options} />
          </div>

          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            {categoryData.labels.map((x, index) => (
              <span className="flex items-center gap-2" key={index}>
                <span
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: bgColor[index] }}
                ></span>
                {x}
              </span>
            ))}
          </div>

        </div>

        <div className="w-1/2 space-y-6">
          {categoryData.labels.map((label, index) => {
            const amount = categoryData.rawdata[index] ?? 0;
            const total = (categoryData.rawdata || []).reduce((a, b) => a + b, 0);
            const percentNumber = total > 0 ? (amount / total) * 100 : 0;
            const percentStr = `${percentNumber.toFixed(1)}%`;

            return (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: bgColor[index] || "#6b7280" }}
                    ></span>
                    {label}
                  </span>
                  <span className="text-gray-300">
                    ₹{amount.toFixed(2)} ({percentStr})
                  </span>
                </div>

                <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
                  <div
                    className="h-2 rounded"
                    style={{
                      width: `${percentNumber}%`,
                      backgroundColor: bgColor[index] || "#6b7280",
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

export default ExpensesBreakdown;