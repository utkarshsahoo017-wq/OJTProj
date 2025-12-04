import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

function FilterBox({ onFilter }) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    function format(date) {
        return date.toISOString().split("T")[0];
    }

    function applyPreset(days) {
        const end = new Date();
        const start = new Date();
        start.setDate(start.getDate() - days);

        const s = format(start);
        const e = format(end);

        setStartDate(s);
        setEndDate(e);

        onFilter({ start: s, end: e });
    }

    function applyCustomFilter() {
        if (!startDate || !endDate) return;
        onFilter({ start: startDate, end: endDate });
    }

    return (
        <div className='w-full mt-7'>
            <div className="bg-[#111827] border border-gray-500 text-white p-4 rounded-2xl flex flex-col gap-6">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                    <Calendar size={15} /> Date range
                </div>

                <div className="flex gap-3 text-sm">
                    <div className="px-3 py-1 border border-gray-500 rounded cursor-pointer"
                        onClick={() => applyPreset(0)}>Today</div>

                    <div className="px-3 py-1 border border-gray-500 rounded cursor-pointer"
                        onClick={() => applyPreset(7)}>Last 7 days</div>

                    <div className="px-3 py-1 border border-gray-500 rounded cursor-pointer"
                        onClick={() => applyPreset(30)}>Last Month</div>

                    <div className="px-3 py-1 border border-gray-500 rounded cursor-pointer"
                        onClick={() => applyPreset(90)}>Last Quarter</div>

                    <div className="px-3 py-1 border border-gray-500 rounded cursor-pointer"
                        onClick={() => applyPreset(365)}>Last Year</div>
                </div>

                <div className='flex justify-between'>
                    <div className="text-gray-400 text-sm">
                        Start Date <br />
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className='bg-[#1e1e1e] border border-gray-600 text-white px-3 py-2 rounded'
                        />
                    </div>

                    <div className="text-gray-400 text-sm">
                        End Date <br />
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className='bg-[#1e1e1e] border border-gray-600 text-white px-3 py-2 rounded'
                        />
                    </div>

                    <div>
                        <br />
                        <button
                            className='bg-white text-black px-3 py-2 rounded'
                            onClick={applyCustomFilter}
                        >
                            Apply filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterBox;
