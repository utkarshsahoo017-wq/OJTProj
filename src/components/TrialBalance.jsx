import React from 'react'
import FilterBox from './FilterBox'
import { FileText, Sheet, Printer } from 'lucide-react'
import TrialBalanceTable from './TrialBalanceTable'

function TrialBalance() {
    return (
        <div className='mt-15 w-3/4'>
            <div className='flex justify-between'>
                <div className="head text-white text-3xl">
                    Trial Balance
                    <div className="subhead text-slate-500 text-xs">
                        Verify that total debits equal total credits
                    </div>
                </div>
                <div className="exportConts flex gap-2">
                    <div className="button-1 flex text-white items-center border border-gray-500 rounded-2xl h-8 px-4 hover:cursor-pointer">
                        <FileText color='white' size={15} />PDF
                    </div>
                    <div className="button-1 flex text-white items-center border border-gray-500 rounded-2xl h-8 px-4 hover:cursor-pointer">
                        <Sheet color='white' size={15} />Excel
                    </div>
                    <div className="button-1 flex text-white items-center border border-gray-500 rounded-2xl h-8 px-4 hover:cursor-pointer">
                        <Printer color='white' size={15} />Print
                    </div>
                </div>
            </div>
            <FilterBox />
            <div>
                <TrialBalanceTable />
            </div>
        </div>
    )
}

export default TrialBalance
