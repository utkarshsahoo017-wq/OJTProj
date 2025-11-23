import React from 'react'
import { Calendar } from 'lucide-react'

function FilterBox() {
    return (
        <div className='w-full mt-7 mb-7'>
            <div className="bg-[#111827] border border-gray-500 text-white p-4 w-full rounded-2xl flex flex-col gap-6">
                <div className="h flex text-sm text-gray-400 items-center gap-2 w-full">
                    <Calendar size={15} />Data range
                </div>
                <div className="button flex gap-3">
                    <div className="b1 text-white px-3 py-0.5 border border-gray-500 rounded hover:cursor-pointer">
                        Today
                    </div>
                    <div className="b1 text-white px-3 py-0.5 border border-gray-500 rounded hover:cursor-pointer">
                        Last 7 days
                    </div>
                    <div className="b1 text-white px-3 py-0.5 border border-gray-500 rounded hover:cursor-pointer">
                        Last Month
                    </div>
                    <div className="b1 text-white px-3 py-0.5 border border-gray-500 rounded hover:cursor-pointer">
                        Last Quarter
                    </div>
                    <div className="b1 text-white px-3 py-0.5 border border-gray-500 rounded hover:cursor-pointer">
                        Last year
                    </div>
                </div>
                <div className='StartCont flex justify-between'>
                    <div className="1 text-gray-400">
                        Start Date <br />
                        <input type="date" className='bg-[#1e1e1e] rounded border border-gray-600 text-white px-3 py-2' />
                    </div>
                    <div className="1 text-gray-400">
                        End Date <br />
                        <input type="date" className='bg-[#1e1e1e] rounded border border-gray-600 text-white px-3 py-2' />
                    </div>
                    <div className="applyFilter">
                        <br />
                        <button className='bg-white text-black px-3 py-2 rounded'>Apply filter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBox
