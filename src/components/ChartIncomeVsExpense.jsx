import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

function ChartIncomeVsExpense() {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
    const BarData = {
        labels:[
            "May",
            "June",
            "July",
            "August",
            "September",
        ],
        datasets: [
            {
                label: "Income",
                data: [10000, 12000, 11000, 10000, 15000, 25000],
                backgroundColor: "#2e994a"
            },
            {
                label: "Expenses",
                data: [7800, 11300, 9980, 8500, 14400, 21500],
                backgroundColor: "red"
            }
        ]
    }
    const option = {}
    return (
        <div className="bg-[#111727] px-5 py-5 rounded-2xl border border-gray-700 gap-5 w-full my-10">
            <div className="h text-white">
                Income Vs Expense Trend(Last 6 months)
            </div>
            <Bar options={option} data={BarData}/>
        </div>
    )
}

export default ChartIncomeVsExpense
