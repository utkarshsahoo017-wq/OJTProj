import React from 'react'

function MonthSummary() {
  return (
    <div className='bg-[#111727] px-5 py-5 rounded-2xl border border-gray-700 flex flex-col gap-5 w-full'>
      <div className="head text-white ">
        This Month Summary
      </div>
      <div className="Datacont flex justify-between pr-10">
        <div className="income">
          <div className="IH text-slate-500">
            Income
          </div>
          <div className="value text-3xl text-[#3bbf5e]">
            ₹6,000.0
          </div>
        </div>
        <div className="expenses">
          <div className="EH text-slate-500">
            Expenses
          </div>
          <div className="value text-3xl text-[#f16374]">
            ₹514.25
          </div>
        </div>
        <div className="net">
           <div className="NH text-slate-500">
            Net Balance
          </div>
          <div className="value text-3xl text-[#3bbf5e]">
            ₹5,485.75
          </div> 
        </div>
      </div>
    </div>
  )
}

export default MonthSummary
