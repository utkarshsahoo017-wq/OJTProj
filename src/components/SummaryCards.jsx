import React from 'react'


function SummaryCards({ Icon, IconColor, title, amount, amountColor, IconBGColor }) {
  return (
    <div className="bg-[#111727] px-5 py-5 rounded-2xl border border-gray-700 flex items-center gap-5 w-68">
      <div className="title text-slate-500">
        {title}
        <div className="amount text-3xl" style={{ color: amountColor }}>
            {amount}
        </div>
      </div>
      <div className="icon">
        <Icon color={IconColor} className={`w-15 h-15 p-3 rounded-full border-3`} style={{
            backgroundColor: IconBGColor,   
            borderColor: IconColor,
            filter: `drop-shadow(0 0 8px ${IconColor})`
          }} />
      </div>
    </div>
  )
}

export default SummaryCards
