import React from "react";

function CashFlowTable() {
  return (
    <div className="bg-[#0e1424] text-white p-6 rounded-xl mx-auto border border-gray-700 w-full">

      <div className="flex justify-between mb-8">
        <h2 className="text-lg font-semibold">Cash Flow Statement</h2>
        <span className="text-gray-400 text-sm">
          Period: 22/10/2025 - 22/11/2025
        </span>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-md mb-3">
          Cash Flow from Operating Activities
        </h3>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-300">Cash inflows from operations</span>
          <span className="text-green-400">₹5,800.00</span>
        </div>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-300">Cash outflows from operations</span>
          <span className="text-red-400">(₹120.00)</span>
        </div>

        <div className="flex justify-between bg-[#15202e] py-2 px-2 rounded">
          <span className="font-semibold">Net Cash from Operating Activities</span>
          <span className="font-semibold text-green-400">₹5,680.00</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-md mb-3">
          Cash Flow from Investing Activities
        </h3>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-300">Cash inflows from investments</span>
          <span className="text-green-400">₹200.00</span>
        </div>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-300">Cash outflows for investments</span>
          <span className="text-red-400">(₹0.00)</span>
        </div>

        <div className="flex justify-between bg-[#15202e] py-2 px-2 rounded">
          <span className="font-semibold">Net Cash from Investing Activities</span>
          <span className="font-semibold text-green-400">₹200.00</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-md mb-3">
          Cash Flow from Financing Activities
        </h3>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-300">Cash inflows from financing</span>
          <span className="text-green-400">₹0.00</span>
        </div>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-300">Cash outflows for financing</span>
          <span className="text-red-400">(₹35.00)</span>
        </div>

        <div className="flex justify-between bg-[#2b1c1c] py-2 px-2 rounded">
          <span className="font-semibold">Net Cash from Financing Activities</span>
          <span className="font-semibold text-red-400">-₹35.00</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between py-2">
          <span className="font-semibold">Net Increase/Decrease in Cash</span>
          <span className="font-semibold text-green-400">₹5,845.00</span>
        </div>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-300">Cash at Beginning of Period</span>
          <span className="">₹4,750.00</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="font-semibold">Cash at End of Period</span>
          <span className="font-semibold text-green-400">₹10,595.00</span>
        </div>
      </div>
    </div>
  );
}

export default CashFlowTable;
