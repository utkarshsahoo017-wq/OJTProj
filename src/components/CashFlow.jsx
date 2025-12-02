import React from 'react'
import { useState, useEffect } from 'react'
import FilterBox from './FilterBox'
import Average from './Average'
import Average2 from './Average2'
import { CircleArrowUp, CircleArrowDown } from 'lucide-react'
import CashFlowTable from './CashFlowTable'

function CashFlow() {

    return (
        <div className='mt-15 w-3/4 flex flex-col gap-4'>
            <div className="head text-white text-3xl">
                Cash Flow Statement
                <div className="subhead text-slate-500 text-xs">
                    Track money coming in and going out
                </div>
            </div>
            <FilterBox />
            <div className='flex w-full gap-2'>
                <Average Heading={"Opening Balance"} Amount={"₹4,750.00"} Icon={CircleArrowUp} iconColor={"blue"} subhead={"As of 22/10/2025"} className={"w-1/2"} />
                <Average2 Heading={"Closing Balance"} Amount={"₹10,595.00"} Icon={CircleArrowDown} iconColor={"green"} subhead={"As of 22/11/2025"} className={"w-1/2"} />
            </div>
            <CashFlowTable />
        </div>
    )
}

export default CashFlow
