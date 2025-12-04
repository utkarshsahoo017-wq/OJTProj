import React from "react";

function SearchBox({ filters, setFilters, applyFilters }) {
    return (
        <div className="bg-[#0a0a0a] px-3 py-3 rounded border border-gray-700 flex w-full mt-5 flex-col">
            <div className="h text-white mb-3">Filters</div>

            <div className="searchCont flex gap-3 justify-between mb-3">

                <div className="Search flex flex-col">
                    <div className="S text-white mb-1">Search</div>
                    <input
                        type="text"
                        className="bg-[#1e1e1e] rounded border border-gray-600 placeholder:text-gray-600 px-2 text-white"
                        placeholder="Search description..."
                        value={filters.search}
                        onChange={(e) =>
                            setFilters(prev => ({ ...prev, search: e.target.value }))
                        }
                    />
                </div>

                <div className="Start-date flex flex-col">
                    <div className="S text-white mb-1">Start Date</div>
                    <input
                        type="date"
                        className="bg-[#1e1e1e] rounded border border-gray-600 text-white px-2"
                        value={filters.startDate}
                        onChange={(e) =>
                            setFilters(prev => ({ ...prev, startDate: e.target.value }))
                        }
                    />
                </div>

                <div className="End-date flex flex-col">
                    <div className="S text-white mb-1">End Date</div>
                    <input
                        type="date"
                        className="bg-[#1e1e1e] rounded border border-gray-600 text-white px-2"
                        value={filters.endDate}
                        onChange={(e) =>
                            setFilters(prev => ({ ...prev, endDate: e.target.value }))
                        }
                    />
                </div>

                <div className="Type flex flex-col">
                    <div className="S text-white mb-1">Type</div>
                    <select
                        className="bg-[#1e1e1e] text-white rounded border border-gray-600 px-1"
                        value={filters.type}
                        onChange={(e) =>
                            setFilters(prev => ({ ...prev, type: e.target.value }))
                        }
                    >
                        <option value="">All types</option>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>
                </div>

                <div className="Category flex flex-col">
                    <div className="S text-white mb-1">Category</div>
                    <select
                        className="bg-[#1e1e1e] text-white rounded border border-gray-600 px-1"
                        value={filters.category}
                        onChange={(e) =>
                            setFilters(prev => ({ ...prev, category: e.target.value }))
                        }
                    >
                        <option>Salary</option>
                        <option>Food and dining</option>
                        <option>Transportation</option>
                        <option>Freelance</option>
                        <option>Bills and utilities</option>
                        <option>Shopping</option>
                        <option>Entertainment</option>
                        <option>Investment</option>
                        <option>Healthcare</option>
                        <option>Others</option>
                    </select>
                </div>
            </div>

            <button
                onClick={applyFilters}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
            >
                Apply Filters
            </button>
        </div>
    );
}

export default SearchBox;