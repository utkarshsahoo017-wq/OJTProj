import React from 'react'
import FilterBox from './FilterBox'
import Average from './Average'
import RevenueReportChart1 from './RevenueReportChart1'
import RevenueReportChart2 from './RevenueReportChart2'

function RevenueReport() {
  return (
    <div className='mt-15 flex flex-col gap-3 w-3/4'>
      <div className="head text-white text-3xl">
        Revenue Report
        <div className="subhead text-slate-500 text-xs">
          Income sources and growth trends
        </div>
      </div>
      <FilterBox />
      <div className="flex gap-2">

      <Average Heading={"Total Revenue"} Amount={"₹11,000.00"} subhead={"Selected period"} className={"w-1/3"}/>
      <Average Heading={"Average Monthly"} Amount={"₹5,500.00"} subhead={"Per Month"} className={"w-1/3"}/>
      <Average Heading={"Income Sources"} Amount={"3"} subhead={"Different categories"} className={"w-1/3"}/>
      </div>
      <RevenueReportChart1 />
      <RevenueReportChart2 />
    </div>
  )
}

export default RevenueReport
