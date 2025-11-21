import React from 'react'
import SummaryCards from './SummaryCards'
import MonthSummary from './MonthSummary'
import ChartIncomeVsExpense from './ChartIncomeVsExpense'
import { Wallet, TrendingUp, TrendingDown, Receipt } from 'lucide-react'

function Dashboard() {
  return (
    <div className='mt-15'>
      <div className="head text-white font-bold text-3xl">
        Dashboard
        <div className="subhead text-slate-500 text-xs">
          Welcome back! Here's your financial overview
        </div>
      </div>
      <div className="CardsContainer my-8 flex gap-2 w-full">
        <SummaryCards Icon={Wallet} IconColor={"#264e9a"} title={"Total Balance"} amount={"₹10,235.75"} amountColor={"#448bd3"} IconBGColor={"#15205a"}/> 
        <SummaryCards Icon={TrendingUp} IconColor={"#167939"} title={"Total Income"} amount={"₹11,000.0"} amountColor={"#21aa6b"} IconBGColor={"#0f2719"}/> 
        <SummaryCards Icon={TrendingDown} IconColor={"#a7252e"} title={"Total Expenses"} amount={"₹764.25"} amountColor={"#f16374"} IconBGColor={"#420a0a"}/> 
        <SummaryCards Icon={Receipt} IconColor={"#2752a8"} title={"Total Balance"} amount={"12"} amountColor={"#4b9eee"} IconBGColor={"#15205a"}/> 
      </div>
      <div>
        <MonthSummary />
      </div>
      <div>
        <ChartIncomeVsExpense />
      </div>
    </div>
  )
}

export default Dashboard
