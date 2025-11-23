import React from "react";

function ExpenseRankData({ data }) {
    return (
        <div className="bg-[#111727] p-6 rounded-2xl text-white">
            <h2 className="text-sm mb-4">Top 5 Expense Categories</h2>

            <div className="flex flex-col gap-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-[#1a2236] p-4 rounded-xl border border-gray-700"
                    >
                        
                        <div>
                            <div className="text-xs text-gray-400">#{index + 1}</div>
                            <div className="font-semibold text-base">{item.category}</div>
                            <div className="text-gray-400 text-xs">{item.percentage}% of total</div>
                        </div>

                        <div className="text-red-400 font-semibold">₹{item.amount}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExpenseRankData;
