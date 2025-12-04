import React, { useState, useEffect } from 'react'
import FilterBox from './FilterBox'
import Average from './Average'
import fetchUserData from '../utils/datafetch'
import RevenueReportChart1 from './RevenueReportChart1'
import RevenueReportChart2 from './RevenueReportChart2'

function RevenueReport() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [avgIncome, setAvgIncome] = useState(0);
  const [monthlyData, setMonthlyData] = useState({});
  const [totalIncome, setTotalIncome] = useState(0);
  const [incomeSources, setIncomeSources] = useState(0);
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
      } else if (element.type === "Debit") {
        monthlySummary[key].expense += Number(element.amount)
      }

      monthlySummary[key].transactions.push(element)
    });

    return monthlySummary
  }

  useEffect(() => {
    async function loadData() {
      const response = await fetchUserData();
      setAllData(response);
      setFilteredData(response); 
    }
    loadData();
  }, []);

  function handleFilter({ start, end }) {
    const s = new Date(start);
    const e = new Date(end);

    const filtered = allData.filter(item => {
      const d = new Date(item.date);
      return d >= s && d <= e;
    });

    setFilteredData(filtered);
  }

  useEffect(() => {
    if (filteredData.length === 0) {
      setMonthlyData({});
      return;
    }

    const grouped = groupTransactionsByMonth(filteredData);
    setMonthlyData(grouped);

  }, [filteredData]);

  useEffect(() => {
    if (!monthlyData || Object.keys(monthlyData).length === 0) {
      setAvgIncome(0);
      setTotalIncome(0);
      setIncomeSources(0);
      return;
    }

    const total = filteredData
      .filter(item => item.type === "Credit")
      .reduce((a, b) => a + Number(b.amount), 0);

    setTotalIncome(total);

    const uniqueSources = new Set(
      filteredData.filter(item => item.type === "Credit").map(i => i.category)
    );
    setIncomeSources(uniqueSources.size);

    const sortedMonths = Object.keys(monthlyData)
      .sort((a, b) => new Date(b) - new Date(a))
      .slice(0, 6);

    const incomes = sortedMonths.map(k => monthlyData[k].income);
    const avg = incomes.reduce((a, b) => a + b, 0) / incomes.length;

    setAvgIncome(isNaN(avg) ? 0 : avg);

    const breakdown = {};
    filteredData.forEach(item => {
      if (item.type === "Credit") {
        const cat = item.category || "Other";
        breakdown[cat] = (breakdown[cat] || 0) + Number(item.amount);
      }
    });

    setCategoryBreakdown(breakdown);

  }, [monthlyData, filteredData]);

  return (
    <div className='mt-15 flex flex-col gap-3 w-3/4'>
      <div className="head text-white text-3xl">
        Revenue Report
        <div className="subhead text-slate-500 text-xs">
          Income sources and growth trends
        </div>
      </div>

      <FilterBox onFilter={handleFilter} />

      <div className="flex gap-2">
        <Average Heading="Total Revenue" Amount={`₹${totalIncome}`} subhead="Selected Period" className="w-1/3" />
        <Average Heading="Average Monthly" Amount={`₹${avgIncome}`} subhead="Avg of Selected Months" className="w-1/3" />
        <Average Heading="Income Sources" Amount={`${incomeSources}`} subhead="Categories" className="w-1/3" />
      </div>

      <RevenueReportChart1 monthlyData={monthlyData} />
      <RevenueReportChart2 categoryBreakdown={categoryBreakdown} />
    </div>
  )
}

export default RevenueReport;