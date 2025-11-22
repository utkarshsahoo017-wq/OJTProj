import React from 'react'
import PieChart from './PieChart'

function PieCard() {
  return (
    <div className='flex gap-2'>
    <div className='bg-black border border-gray-600 p-5 text-white rounded-xl w-3/8'>
      <div className="h mb-10">
        Income by Category
      </div>
      <div className="chartCont">
        <PieChart
        labels={[
            "Freelance",
            "Investment",
            "Salary"
        ]}
        rawdata={[800, 1200, 30000]}
        colors={["blue", "purple", "#2e994a"]} />
      </div>
    </div>
    <div className='bg-black border border-gray-600 p-5 text-white rounded-xl w-3/8'>
      <div className="h mb-10">
        Income by Category
      </div>
      <div className="chartCont">
        <PieChart labels={["Food and dining", "Transportation", "Shopping", "Bills and utilities", "Entertainment", "Healthcare"]} rawdata={[74.26, 60, 120, 150, 35, 75]} colors={["#2e994a", "blue", "purple", "yellow", "red", "pink"]}/>
      </div>
    </div>
    </div>
  )
}

export default PieCard
