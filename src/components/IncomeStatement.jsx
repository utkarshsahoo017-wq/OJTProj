import React from 'react'
import FilterBox from './FilterBox'
import Average from './Average'
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react'
import IncomeStatementTable from './IncomeStatementTable'
import Average2 from './Average2'

function IncomeStatement() {
    return (
        <div className='mt-15 w-3/4 flex flex-col gap-3'>
            <div className="head text-white text-3xl w-full">
                Income Statement(P&L)
                <div className="subhead text-slate-500 text-xs">
                    Revenue, Expenses and profit analysis
                </div>
            </div>
            <div className="search w-full">
                <FilterBox />
            </div>
            <div className="Cont flex gap-2">
                <Average Heading={"Total Revenue"} Amount={"₹6000"} Icon={TrendingUp} iconColor={"green"} subhead={"Income earned"} className={"w-1/3"}/>
                <Average Heading={"Total Expenses"} Amount={"₹514.25"} Icon={TrendingDown} iconColor={"red"} subhead={"Money Spent"} className={"w-1/3"}/>
                <Average2 Heading={"Net Profit/Loss"} Amount={"₹5,485.75"} Icon={DollarSign} iconColor={"green"} subhead={"Margin: 91.4%"} className={"w-1/3"}/>
            </div>
            <div className="w-full">
                <IncomeStatementTable />
            </div>
            
        </div>
    )
}

export default IncomeStatement
