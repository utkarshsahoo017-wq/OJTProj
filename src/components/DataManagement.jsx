import { Download, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import fetchUserData from "../utils/datafetch";
import exportToCSV from "../utils/exportCSV";

function DataManagement() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetchUserData();
      setTransactions(res);
    }
    loadData();
  }, []);

  const handleExport = () => {
    exportToCSV(transactions, "my_transactions.csv");
  };

  return (
    <div className="bg-[#0d0d0d] border border-gray-700 rounded-2xl p-6 text-white w-full">
      <div className="mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Download size={20} />
          Data Management
        </h2>
        <p className="text-sm text-gray-400">Export or delete your data</p>
      </div>

      <div className="flex items-center justify-between py-4 border-b border-gray-700">
        <div>
          <p className="font-medium">Export Data</p>
          <p className="text-sm text-gray-400">
            Download all your transaction data as CSV
          </p>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] border border-gray-600 rounded-lg hover:bg-[#2a2a2a] hover:cursor-pointer"
        >
          <Download size={15} />
          Export
        </button>
      </div>

      <div className="flex items-center justify-between py-4">
        <div>
          <p className="font-medium text-red-500">Delete Account</p>
          <p className="text-sm text-gray-400">
            Permanently delete your account and all data
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg">
          <Trash2 size={15} />
          Delete
        </button>
      </div>
    </div>
  );
}

export default DataManagement;
