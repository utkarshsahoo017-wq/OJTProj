import React from 'react'
import Average from './Average'
import { TrendingUp, TrendingDown, ChartColumn } from 'lucide-react'
import PieCard from './PieCard'
import ChartIncomeVsExpense from './ChartIncomeVsExpense'

function Analytics() {
    return (
        <div className='mt-15 w-full'>
            <div className="head text-white text-3xl">
                Analytics
                <div className="subhead text-slate-500 text-xs">
                    Detailed insights into your financial patters
                </div>
            </div>
            <div className="avgCont mt-5 flex gap-3 w-3/4">
               <Average Icon={TrendingUp} iconColor={'green'} Amount={'₹1833.33'} Heading={'Average Icome'} subhead={'Per month(last 6 months)'} />
               <Average Icon={TrendingDown} iconColor={'red'} Amount={'₹127.38'} Heading={'Average Expense'} subhead={'Per month(last 6 months)'} />
               <Average Icon={ChartColumn} iconColor={'blue'} Amount={'93.1%'} Heading={'Savings Rate'} subhead={'Of total income'} />
            </div>
            <div className="chart w-3/4">
               < ChartIncomeVsExpense />
            </div>
            <div className="piecard">
                <PieCard />
            </div>
        </div>
    )
}

export default Analytics
