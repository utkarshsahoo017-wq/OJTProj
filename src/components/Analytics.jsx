import React from 'react'
import { useState, useEffect } from 'react'
import Average from './Average'
import { TrendingUp, TrendingDown, ChartColumn } from 'lucide-react'
import fetchUserData from '../utils/datafetch'
import PieCard from './PieCard'
import ChartIncomeVsExpense from './ChartIncomeVsExpense'

function Analytics() {

    const [monthlyData, setMonthlyData] = useState({})

    function groupTransactionsByMonth(transactions) {
        const monthlySummary = {}

        transactions.forEach(element => {
            const date = new Date(element.date)
            const month = date.getMonth()
            const year = date.getFullYear()
            const key = `${year}-${month + 1}`

            if (!monthlySummary[key]) {
                monthlySummary[key] = { income: 0, expense: 0, transactions: [] }
            }

            if (element.type === "Credit") {
                monthlySummary[key].income += Number(element.amount)
            }
            else if (element.type === "Debit") {
                monthlySummary[key].expense += Number(element.amount)
            }

            monthlySummary[key].transactions.push(element)
        });
        return monthlySummary
    }

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetchUserData()
            setData(response)
        }
        getData()
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            const response = groupTransactionsByMonth(data);
            setMonthlyData(response);
            console.log("Monthly Data:", response);
        }
    }, [data]);
    return (
        <div className='mt-15 w-full'>
            <div className="head text-white text-3xl">
                Analytics
                <div className="subhead text-slate-500 text-xs">
                    Detailed insights into your financial patters
                </div>
            </div>
            <div className="avgCont mt-5 flex gap-3 w-3/4">
                <Average Icon={TrendingUp} iconColor={'green'} Amount={'₹1833.33'} Heading={'Average Icome'} subhead={'Per month(last 6 months)'} className={"w-1/3"} />
                <Average Icon={TrendingDown} iconColor={'red'} Amount={'₹127.38'} Heading={'Average Expense'} subhead={'Per month(last 6 months)'} className={"w-1/3"} />
                <Average Icon={ChartColumn} iconColor={'blue'} Amount={'93.1%'} Heading={'Savings Rate'} subhead={'Of total income'} className={"w-1/3"} />
            </div>
            <div className="chart w-3/4">
                < ChartIncomeVsExpense monthlyData={monthlyData} />
            </div>
            <div className="piecard">
                <PieCard />
            </div>
        </div>
    )
}

export default Analytics
