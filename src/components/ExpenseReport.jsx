import React, { useState, useEffect } from 'react'
import FilterBox from './FilterBox'
import ExpenseReportPieCard from './ExpenseReportPieCard'
import ExpenseRankData from './ExpenseRankData'
import fetchUserData from '../utils/datafetch'
import { getCategoryData } from '../utils/getCategoryData'

function ExpenseReport() {
  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categoryData, setCategoryData] = useState({ labels: [], rawdata: [] });

  useEffect(() => {
    async function loadData() {
      const userData = await fetchUserData();
      setFullData(userData);
      setFilteredData(userData);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function updateCategory() {
      const cat = await getCategoryData(filteredData, 'debit');
      setCategoryData(cat);
    }
    updateCategory();
  }, [filteredData]);

  function handleFilter({ start, end }) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const filtered = fullData.filter((item) => {
      const d = new Date(item.date);
      return d >= startDate && d <= endDate;
    });

    setFilteredData(filtered);
  }

  return (
    <div className='mt-15 w-3/4 flex flex-col gap-3'>
      <div className="head text-white text-3xl">
        Expense Report
        <div className="subhead text-slate-500 text-xs">
          Category-wise breakdown of your expenses
        </div>
      </div>

      <FilterBox onFilter={handleFilter} />

      <ExpenseReportPieCard categoryData={categoryData} />
      <ExpenseRankData
        labels={categoryData.labels}
        rawdata={categoryData.rawdata}
      />
    </div>
  )
}

export default ExpenseReport;
