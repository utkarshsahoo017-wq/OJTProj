import React from 'react'
import SearchBox from './SearchBox'

function Transactions() {
    return (
        <div className='mt-15 flex flex-col w-3/4'>
            <div className="head text-white text-3xl">
                <span className='font-bold'>Transactions</span>
                <div className="subhead text-slate-500 text-xs">
                    Manage your income and expense records
                </div>
            </div>
            <SearchBox />
           
        </div>
    )
}

export default Transactions
