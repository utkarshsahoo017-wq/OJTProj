import React, { useState, useEffect } from 'react'
import FilterBox from './FilterBox'
import Average from './Average'
import fetchUserData from '../utils/datafetch'
import RevenueReportChart1 from './RevenueReportChart1'
import RevenueReportChart2 from './RevenueReportChart2'

function RevenueReport() {
  const [data, setData] = useState([])
  const [avgIncome, setAvgIncome] = useState(0)
  const [monthlyData, setMonthlyData] = useState({})
  const [totalIncome, setTotalIncome] = useState(0)
  const [incomeSources, setIncomeSources] = useState(0)
  const [categoryBreakdown, setCategoryBreakdown] = useState({});

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
    }
  }, [data]);

  useEffect(() => {
    if (!monthlyData || Object.keys(monthlyData).length === 0) return;

    const sortedMonths = Object.keys(monthlyData)
      .sort((a, b) => new Date(b) - new Date(a))
      .slice(0, 6);

    const incomes = sortedMonths.map(key => monthlyData[key].income);

    const avgInc = incomes.reduce((a, b) => a + b, 0) / incomes.length;

    const uniqueSources = new Set(
      data.filter(item => item.type === "Credit").map(item => item.category)
    )

    setIncomeSources(uniqueSources.size)

    setAvgIncome(avgInc);
    setTotalIncome(data.filter(item => item.type === "Credit").reduce((acc, item) => acc + Number(item.amount), 0))
  }, [monthlyData]);

  useEffect(() => {
    if (data.length === 0) return;

    const breakdown = {};

    data.forEach(item => {
      if (item.type === "Credit") {
        const cat = item.category || "Uncategorized";
        breakdown[cat] = (breakdown[cat] || 0) + Number(item.amount);
      }
    });

    setCategoryBreakdown(breakdown);
  }, [data]);

  useEffect(() => {
    if (data.length === 0) return;

    const breakdown = {};

    data.forEach(item => {
      if (item.type === "Credit") {
        const cat = item.category || "Uncategorized";
        breakdown[cat] = (breakdown[cat] || 0) + Number(item.amount);
      }
    });

    setCategoryBreakdown(breakdown);
  }, [data]);

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

        <Average Heading={"Total Revenue"} Amount={`₹${totalIncome}`} subhead={"Selected period"} className={"w-1/3"} />
        <Average Heading={"Average Monthly"} Amount={`₹${avgIncome}`} subhead={"Per Month"} className={"w-1/3"} />
        <Average Heading={"Income Sources"} Amount={`${incomeSources}`} subhead={"Different categories"} className={"w-1/3"} />
      </div>
      <RevenueReportChart1 monthlyData={monthlyData} />
      <RevenueReportChart2 categoryBreakdown={categoryBreakdown} />
    </div>
  )
}

export default RevenueReport
