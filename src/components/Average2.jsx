import React from 'react'

function Average2({ Heading, Amount, Icon, iconColor, subhead, className, isNegative = '' }) {

    const containerClass = isNegative
        ? "bg-red-500/10 border border-red-500"
        : "bg-green-500/10 border border-green-500";

    const valueClass = isNegative
        ? "text-red-500"
        : "text-green-500";

    return (
        <div className={`${containerClass} p-5 text-white rounded-xl font-semibold ${className}`}>
            <div className="h mb-5 flex justify-between">
                <div className="h3">
                    {Heading}
                </div>
                <Icon color={iconColor} />
            </div>
            <div className={`value text-2xl ${valueClass}`}>
                {Amount}
            </div>
            <div className="subhead text-slate-500 text-xs">
                {subhead}
            </div>
        </div>
    )
}

export default Average2
