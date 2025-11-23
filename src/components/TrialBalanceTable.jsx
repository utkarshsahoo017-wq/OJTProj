import React from 'react'
import { TriangleAlert } from 'lucide-react'

function TrialBalanceTable() {
    return (
        <div class="bg-[#111827] text-white p-6 rounded-2xl w-full border border-gray-700">


            <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-semibold">Trial Balance Report</h2>
                <span class="text-gray-400 text-sm">Period: 22/10/2025 - 22/11/2025</span>
            </div>


            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="border-b border-gray-700 text-gray-300">
                            <th class="py-3">Account Name</th>
                            <th class="py-3">Type</th>
                            <th class="py-3">Debit (₹)</th>
                            <th class="py-3">Credit (₹)</th>
                        </tr>
                    </thead>

                    <tbody class="text-gray-200">

                        <tr class="border-b border-gray-800">
                            <td class="py-3">Salary</td>
                            <td><span class="bg-green-800/30 text-green-400 px-3 py-1 rounded-full text-xs">income</span></td>
                            <td>-</td>
                            <td>₹5,000.00</td>
                        </tr>

                        <tr class="border-b border-gray-800">
                            <td class="py-3">Food & Dining</td>
                            <td><span class="bg-red-800/30 text-red-400 px-3 py-1 rounded-full text-xs">expense</span></td>
                            <td>₹74.25</td>
                            <td>-</td>
                        </tr>

                        <tr class="border-b border-gray-800">
                            <td class="py-3">Transportation</td>
                            <td><span class="bg-red-800/30 text-red-400 px-3 py-1 rounded-full text-xs">expense</span></td>
                            <td>₹60.00</td>
                            <td>-</td>
                        </tr>

                        <tr class="border-b border-gray-800">
                            <td class="py-3">Freelance</td>
                            <td><span class="bg-green-800/30 text-green-400 px-3 py-1 rounded-full text-xs">income</span></td>
                            <td>-</td>
                            <td>₹800.00</td>
                        </tr>

                        <tr class="border-b border-gray-800">
                            <td class="py-3">Shopping</td>
                            <td><span class="bg-red-800/30 text-red-400 px-3 py-1 rounded-full text-xs">expense</span></td>
                            <td>₹120.00</td>
                            <td>-</td>
                        </tr>

                        <tr class="border-b border-gray-800">
                            <td class="py-3">Bills & Utilities</td>
                            <td><span class="bg-red-800/30 text-red-400 px-3 py-1 rounded-full text-xs">expense</span></td>
                            <td>₹150.00</td>
                            <td>-</td>
                        </tr>

                        <tr class="border-b border-gray-800 bg-gray-800/20">
                            <td class="py-3">Entertainment</td>
                            <td><span class="bg-red-800/30 text-red-400 px-3 py-1 rounded-full text-xs">expense</span></td>
                            <td>₹35.00</td>
                            <td>-</td>
                        </tr>

                        <tr class="border-b border-gray-800">
                            <td class="py-3">Investment</td>
                            <td><span class="bg-green-800/30 text-green-400 px-3 py-1 rounded-full text-xs">income</span></td>
                            <td>-</td>
                            <td>₹200.00</td>
                        </tr>

                        <tr class="border-b border-gray-800  border-b-gray-500">
                            <td class="py-3">Healthcare</td>
                            <td><span class="bg-red-800/30 text-red-400 px-3 py-1 rounded-full text-xs">expense</span></td>
                            <td>₹75.00</td>
                            <td>-</td>
                        </tr>

                        <tr class="bg-gray-900 font-semibold text-gray-100">
                            <td class="py-3">Total</td>
                            <td></td>
                            <td>₹514.25</td>
                            <td>₹6,000.00</td>
                        </tr>

                    </tbody>
                </table>
                <div className="Difference text-white bg-red-500/10 p-2 rounded-xl mb-3">
                    Difference
                </div>
                <div className="warning bg-red-500/20 p-3 rounded-xl flex gap-2 text-red-300 border border-red-500 font-semibold">
                    <TriangleAlert />Warning: Books not balanced. Please review your entries.
                </div>
            </div>
        </div>
    )
}

export default TrialBalanceTable
