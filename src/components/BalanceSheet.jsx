import React from 'react'
import Average from './Average'
import Average2 from './Average2'
import BalanceSheetTable from './BalanceSheetTable'
import { Wallet, CreditCard, TrendingUp } from 'lucide-react'

function BalanceSheet() {
    return (
        <div className='mt-15 w-3/4 flex flex-col gap-6'>
            <div className="head text-white text-3xl">
                Balance Sheet
                <div className="subhead text-slate-500 text-xs">
                    Financial Position showing assets, liabilities, and equity
                </div>
            </div>
            <div className='flex gap-2 w-full'>
                <Average Heading={"Total assets"} Amount={"₹2,00,235.75"} Icon={Wallet} iconColor={"blue"} subhead={"What you own"} className={"w-1/3"} />
                <Average Heading={"Total liabilities"} Amount={"₹1,75,000.00"} Icon={CreditCard} iconColor={"red"} subhead={"What you owe"} className={"w-1/3"} />
                <Average2 Heading={"Total Equity"} Amount={"₹25,235.75"} Icon={TrendingUp} iconColor={"green"} subhead={"Net Worth"} className={"w-1/3"}/>
            </div>
            <BalanceSheetTable />
        </div>
    )
}

export default BalanceSheet
