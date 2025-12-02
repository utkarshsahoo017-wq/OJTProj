import React from 'react'
import FilterBox from './FilterBox'
import Average from './Average'
import { useState, useEffect } from 'react'
import fetchUserData from '../utils/datafetch'
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react'
import IncomeStatementTable from './IncomeStatementTable'
import Average2 from './Average2'

function IncomeStatement() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetchUserData()
            setData(response)
        }
        getData()

    }, [])

    const totalIncome = data.filter(item => item.type === "Credit").reduce((acc, item) => acc + Number(item.amount), 0)
    const totalExpense = data.filter(item => item.type === "Debit").reduce((acc, item) => acc + Number(item.amount), 0)
    const totalBalance = totalIncome - totalExpense
    const isNegative = totalBalance<0
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
                <Average Heading={"Total Revenue"} Amount={`₹${totalIncome}`} Icon={TrendingUp} iconColor={"green"} subhead={"Income earned"} className={"w-1/3"} />
                <Average Heading={"Total Expenses"} Amount={`₹${totalExpense}`} Icon={TrendingDown} iconColor={"red"} subhead={"Money Spent"} className={"w-1/3"} />
                <Average2 Heading={"Net Profit/Loss"} Amount={`₹${totalBalance}`} Icon={DollarSign} iconColor={isNegative?"red":"green"} subhead={"Margin: 91.4%"} className={"w-1/3"} isNegative={isNegative}/>
            </div>
            <div className="w-full">
                <IncomeStatementTable />
            </div>

        </div>
    )
}

export default IncomeStatement
