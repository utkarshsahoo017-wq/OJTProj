import React from 'react'
import FilterBox from './FilterBox'
import ExpenseReportPieCard from './ExpenseReportPieCard'
import ExpenseRankData from './ExpenseRankData'

function ExpenseReport() {
  const topExpenses = [
  { category: "Bills & Utilities", percentage: 29.2, amount: 150.0 },
  { category: "Shopping", percentage: 23.3, amount: 120.0 },
  { category: "Healthcare", percentage: 14.6, amount: 75.0 },
  { category: "Food & Dining", percentage: 14.4, amount: 74.25 },
  { category: "Transportation", percentage: 11.7, amount: 60.0 },
];

  return (
    <div className='mt-15 w-3/4 flex flex-col gap-3'>
      <div className="head text-white text-3xl">
        Expense Report
        <div className="subhead text-slate-500 text-xs">
          Category-wise breakdown of your expenses
        </div>
      </div>
      <FilterBox />
      <ExpenseReportPieCard />
      <ExpenseRankData data={topExpenses} />
    </div>
  )
}

export default ExpenseReport
