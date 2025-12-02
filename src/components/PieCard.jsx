import React, { useEffect, useState } from 'react'
import PieChart from './PieChart'
import fetchUserData from '../utils/datafetch'
import { getCategoryData } from '../utils/getCategoryData'

function PieCard() {
  const [data, setData] = useState([])
  const [incomeData, setIncomeData] = useState({ labels: [], rawdata: [] })
  const [expenseData, setExpenseData] = useState({ labels: [], rawdata: [] })

  const palette = [
    "#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14f",
    "#edc948", "#b07aa1", "#ff9da7", "#9c755f", "#bab0ab",
    "#2b908f", "#90ee7e", "#f45b5b", "#7798bf", "#aaeeee",
    "#ff0066", "#eeaaee", "#55bf3b", "#df5353", "#7798BF"
  ];

  const getColors = (count, offset = 0) => {
    return palette.slice(offset, offset+count);
  };

  useEffect(() => {
    async function getData() {
      const response = await fetchUserData()
      setData(response)
    }
    getData()
  }, [])
  useEffect(() => {
    if (data.length > 0) {
      setIncomeData(getCategoryData(data, "credit"))
      setExpenseData(getCategoryData(data, "debit"))
    }
  }, [data])
  console.log(incomeData, expenseData)
  return (
    <div className='flex gap-2'>
      <div className='bg-black border border-gray-600 p-5 text-white rounded-xl w-3/8'>
        <div className="h mb-10">
          Income by Category
        </div>
        <div className="chartCont">
          <PieChart
            labels={incomeData.labels}
            rawdata={incomeData.rawdata}
            colors={getColors(incomeData.labels.length, 0)} />
        </div>
      </div>
      <div className='bg-black border border-gray-600 p-5 text-white rounded-xl w-3/8'>
        <div className="h mb-10">
          Expense by Category
        </div>
        <div className="chartCont">
          <PieChart labels={expenseData.labels} rawdata={expenseData.rawdata} colors={getColors(expenseData.labels.length, 10)} />
        </div>
      </div>
    </div>
  )
}

export default PieCard
