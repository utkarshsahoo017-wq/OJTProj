import React from 'react'

function SearchBox() {
  return (
       <div className="bg-[#0a0a0a] px-3 py-3 rounded border border-gray-700 flex w-full mt-5 flex-col">
                <div className="h text-white mb-3 placeholder:text-gray-600" >
                    Filters
                </div>
                <div className="searchCont flex gap-3 justify-between mb-3">
                    <div className="Search flex flex-col">
                        <div className="S text-white mb-1">
                            Search
                        </div>
                        <div className="box">
                            <input type="text" className='bg-[#1e1e1e] rounded border border-gray-600 placeholder:text-gray-600 px-2 text-white' placeholder="Search description..."/>
                        </div>
                    </div>
                    <div className="Start-date">
                        <div className="S text-white mb-1">
                            Start-date
                        </div>
                        <div className="box">
                            <input type="date" className='bg-[#1e1e1e] rounded border border-gray-600 text-white px-2'/>
                        </div>
                    </div>
                    <div className="End-date">
                        <div className="S text-white mb-1">
                            End-date
                        </div>
                        <div className="box">
                            <input type="date" className='bg-[#1e1e1e] rounded border border-gray-600 text-white px-2'/>
                        </div>
                    </div>
                    <div className="Type">
                        <div className="S text-white mb-1">
                            Type
                        </div>
                        <div className="box">
                            <select name="" id="" className='bg-[#1e1e1e] text-white rounded border border-gray-600 px-1'>
                                <option value="" disabled selected>All types</option>
                            </select>
                        </div>
                    </div>
                    <div className="Category">
                        <div className="S text-white mb-1">
                            Category
                        </div>
                        <div className="box">
                            <select name="" id="" className='bg-[#1e1e1e] text-white rounded border border-gray-600 px-1'>
                                <option value="" disabled selected>All categories</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default SearchBox
