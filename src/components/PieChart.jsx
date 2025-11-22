import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

function PieChart({ labels, rawdata, colors }) {
    ChartJS.register(ArcElement, Tooltip, Legend)

    const rawData = rawdata

    const total = rawData.reduce((a, b) => a + b, 0)

    const percentData = rawData.map(value => ((value / total) * 100).toFixed(2))

    const PieData = {
        labels: labels,
        datasets: [
            {
                label: "Income Breakdown",
                data: percentData,
                backgroundColor: colors,
                borderWidth: 1
            }
        ]
    }

    const option = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    color: "white",
                    usePointStyle: true,
                    pointStyle: "rect"
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        let label = context.label || "";
                        let value = context.raw;   // the % value
                        return `${label}: ${value}%`;
                    }
                }
            },
        }
    }

    return (
        <div>
            <div className="h-50">
                <Pie data={PieData} options={option} />
            </div>
        </div>
    )
}

export default PieChart

