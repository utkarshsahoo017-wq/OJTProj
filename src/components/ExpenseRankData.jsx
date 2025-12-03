import React from "react";

function ExpenseRankData({ labels, rawdata }) {

    if (!labels || !rawdata) return null;

    const total = rawdata.reduce((a, b) => a + b, 0);
    const ranked = labels
        .map((label, index) => ({
            category: label,
            amount: rawdata[index] ?? 0,
            percentage: total > 0 ? ((rawdata[index] / total) * 100).toFixed(1) : 0
        }))
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 5);

    return (
        <div className="bg-[#111727] p-6 rounded-2xl text-white">
            <h2 className="text-sm mb-4">Top 5 Expense Categories</h2>

            <div className="flex flex-col gap-4">
                {ranked.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-[#1a2236] p-4 rounded-xl border border-gray-700"
                    >
                        <div>
                            <div className="text-xs text-gray-400">#{index + 1}</div>
                            <div className="font-semibold text-base">{item.category}</div>
                            <div className="text-gray-400 text-xs">
                                {item.percentage}% of total
                            </div>
                        </div>

                        <div className="text-red-400 font-semibold">₹{item.amount.toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExpenseRankData;