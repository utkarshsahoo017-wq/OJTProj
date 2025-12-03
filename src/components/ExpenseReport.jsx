import React, { useState, useEffect } from 'react'
import FilterBox from './FilterBox'
import ExpenseReportPieCard from './ExpenseReportPieCard'
import ExpenseRankData from './ExpenseRankData'
import fetchUserData from '../utils/datafetch'
import { getCategoryData } from '../utils/getCategoryData'

function ExpenseReport() {
  const [normalData, setNormalData] = useState([])
  const [categoryData, setCategoryData] = useState({ labels: [], rawdata: [] })

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchUserData()
      setNormalData(userData)

      const category = await getCategoryData(userData, 'debit')
      setCategoryData(category)
    }
    fetchData()
  }, [])

  return (
    <div className='mt-15 w-3/4 flex flex-col gap-3'>
      <div className="head text-white text-3xl">
        Expense Report
        <div className="subhead text-slate-500 text-xs">
          Category-wise breakdown of your expenses
        </div>
      </div>

      <FilterBox />
      <ExpenseReportPieCard categoryData={categoryData} />
      <ExpenseRankData
        labels={categoryData.labels}
        rawdata={categoryData.rawdata}
      />
    </div>
  )
}

export default ExpenseReport