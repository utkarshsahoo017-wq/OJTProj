import React from "react";

function IncomeStatement() {
    return (
        <div className="bg-[#0e1424] text-white p-6 rounded-xl mx-auto border border-gray-700 w-full">
            <div className="flex justify-between mb-6">
                <h2 className="text-lg font-semibold">Income Statement</h2>
                <span className="text-gray-400 text-sm">
                    Period: 22/10/2025 - 22/11/2025
                </span>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold text-md mb-3">Revenue</h3>

                <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-300">Salary</span>
                    <span className="">₹5,000.00</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-300">Freelance</span>
                    <span className="">₹800.00</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-300">Investment</span>
                    <span className="">₹200.00</span>
                </div>

                <div className="flex justify-between py-3">
                    <span className="font-semibold">Total Revenue</span>
                    <span className="font-semibold text-green-400">₹6,000.00</span>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-md mb-3">Expenses</h3>

                <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-300">Food & Dining</span>
                    <span>₹74.25</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-300">Transportation</span>
                    <span>₹60.00</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-300">Shopping</span>
                    <span>₹120.00</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-300">Bills & Utilities</span>
                    <span>₹150.00</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-300">Entertainment</span>
                    <span>₹35.00</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-300">Healthcare</span>
                    <span>₹75.00</span>
                </div>

                <div className="flex justify-between py-3">
                    <span className="font-semibold">Total Expenses</span>
                    <span className="font-semibold text-red-400">₹514.25</span>
                </div>
            </div>
            <div className="total w-full bg-green-400/10 border border-green-400 p-2 rounded flex justify-between">
                <div className="text-green-300 font-semibold text-xl">
                    Net Profit
                    <div className="text-gray-500 text-sm">Profit margin: 91.43%</div>
                </div>
                <div className="text-green-400 font-semibold text-2xl">₹5,485.75</div>
            </div>
        </div>
    );
}

export default IncomeStatement;
