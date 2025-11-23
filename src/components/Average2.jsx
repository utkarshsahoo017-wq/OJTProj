import React from 'react'

function Average({ Heading, Amount, Icon, iconColor, subhead, className }) {
    return (
        <div className={`bg-green-500/10 border border-green-500 p-5 text-white rounded-xl font-semibold ${className}`}>
            <div className="h mb-5 flex justify-between">
                <div className="h3">
                    {Heading}
                </div>
                <Icon color={iconColor} />
            </div>
            <div className="value text-2xl text-green-500">
                {Amount}
            </div>
            <div className="subhead text-slate-500 text-xs">
                {subhead}
            </div>
        </div>
    )
}

export default Average
