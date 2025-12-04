import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import fetchUserData, { deleteTransaction, updateTransaction } from "../utils/datafetch";

function Transactions() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [editing, setEditing] = useState(null);

    const [filters, setFilters] = useState({
        search: "",
        startDate: "",
        endDate: "",
        type: "",
        category: "",
    });

    useEffect(() => {
        async function getData() {
            const response = await fetchUserData();
            setData(response);
            setFilteredData(response);
        }
        getData();
    }, []);

    function applyFilters() {
        let filtered = [...data];

        if (filters.search.trim() !== "") {
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        if (filters.startDate) {
            filtered = filtered.filter(item => item.date >= filters.startDate);
        }

        if (filters.endDate) {
            filtered = filtered.filter(item => item.date <= filters.endDate);
        }

        if (filters.type) {
            filtered = filtered.filter(item => item.type === filters.type);
        }

        if (filters.category) {
            filtered = filtered.filter(item => item.category === filters.category);
        }

        setFilteredData(filtered);
    }

    async function handleDelete(id) {
        const confirmDelete = window.confirm("Delete this transaction?");
        if (!confirmDelete) return;

        await deleteTransaction(id);

        const updated = data.filter(item => item.id !== id);
        setData(updated);
        setFilteredData(updated);
    }

    function startEdit(item) {
        setEditing({ ...item });
    }

    async function saveEdit() {
        const updated = await updateTransaction(editing.id, editing);

        const newData = data.map(item =>
            item.id === editing.id ? updated : item
        );

        setData(newData);
        setFilteredData(newData);
        setEditing(null);
    }

    return (
        <div className="mt-15 flex flex-col w-3/4">
            <div className="head text-white text-3xl">
                <span>Transactions</span>
                <div className="subhead text-slate-500 text-xs">
                    Manage your income and expense records
                </div>
            </div>

            <SearchBox
                filters={filters}
                setFilters={setFilters}
                applyFilters={applyFilters}
            />

            <div className="transHistory mt-6 w-full">
                <div className="subhead text-slate-500 text-xs">
                    Showing {filteredData.length} of {data.length} transactions
                </div>

                <div className="table text-white w-full mt-3">
                    <table className="w-full text-sm text-left text-gray-300">
                        <thead className="text-xs uppercase bg-[#111827] text-gray-400">
                            <tr>
                                <th className="px-4 py-3 w-[15%]">Date</th>
                                <th className="px-4 py-3 w-[25%]">Description</th>
                                <th className="px-4 py-3 w-[15%]">Category</th>
                                <th className="px-4 py-3 w-[10%]">Type</th>
                                <th className="px-4 py-3 w-[15%] text-right">Amount</th>
                                <th className="px-4 py-3 w-[10%] text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-800">

                            {filteredData.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-5 text-gray-400"
                                    >
                                        No results to display
                                    </td>
                                </tr>
                            ) : (
                                filteredData.map(element => (
                                    <tr key={element.id} className="bg-[#0f1624]">
                                        <td className="px-4 py-3">{element.date}</td>
                                        <td className="px-4 py-3">{element.title}</td>

                                        <td className="px-4 py-3">
                                            <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">
                                                {element.category}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-3 py-0.5 rounded-full ${element.type === "Credit"
                                                    ? "bg-green-900 text-green-300"
                                                    : "bg-red-900 text-red-300"
                                                    }`}
                                            >
                                                {element.type === "Credit" ? "income" : "expense"}
                                            </span>
                                        </td>

                                        <td
                                            className={`px-4 py-3 font-semibold text-right ${element.type === "Credit"
                                                ? "text-green-400"
                                                : "text-red-400"
                                                }`}
                                        >
                                            {`${element.type === "Credit" ? "+" : "-"} ₹${element.amount}`}
                                        </td>

                                        <td className="px-4 py-3 flex justify-end gap-3">
                                            <button
                                                className="hover:text-blue-400"
                                                onClick={() => startEdit(element)}
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className="hover:text-red-400"
                                                onClick={() => handleDelete(element.id)}
                                            >
                                                🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}

                        </tbody>
                    </table>
                </div>
            </div>

            {editing && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-[#0f1624] p-6 rounded-xl w-96 text-white">
                        <h2 className="text-xl mb-4">Edit Transaction</h2>

                        <input
                            className="w-full p-2 mb-3 bg-gray-800 rounded"
                            value={editing.title}
                            onChange={e =>
                                setEditing(prev => ({ ...prev, title: e.target.value }))
                            }
                        />

                        <input
                            className="w-full p-2 mb-3 bg-gray-800 rounded"
                            value={editing.amount}
                            onChange={e =>
                                setEditing(prev => ({ ...prev, amount: e.target.value }))
                            }
                        />

                        <select
                            className="w-full p-2 mb-3 bg-gray-800 rounded"
                            value={editing.type}
                            onChange={e =>
                                setEditing(prev => ({ ...prev, type: e.target.value }))
                            }
                        >
                            <option value="Credit">Credit</option>
                            <option value="Debit">Debit</option>
                        </select>

                        <select
                            className="w-full p-2 mb-3 bg-gray-800 rounded"
                            value={editing.category}
                            onChange={e =>
                                setEditing(prev => ({ ...prev, category: e.target.value }))
                            }
                        >
                            <option value="Salary">Salary</option>
                            <option value="Food and dining">Food and dining</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Bills and utilities">Bills and utilities</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Investment">Investment</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Other">Others</option>
                        </select>

                        <div className="mt-4 flex justify-end gap-3">
                            <button
                                className="px-4 py-1 bg-red-600 rounded"
                                onClick={() => setEditing(null)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-1 bg-green-600 rounded"
                                onClick={saveEdit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Transactions;