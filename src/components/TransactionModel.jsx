import React, { useState } from 'react'

function AddTransactionModal({ close }) {

    const [details, setDetails] = useState({
        title: "",
        amount: "",
        type: "Credit",
        category: "Salary",
        date: ""
    });

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    async function refreshAccessToken() {
        const refresh = localStorage.getItem("refresh");

        if (!refresh) return null;

        const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("access", data.access);
            return data.access;
        } else {
            console.log("Refresh token expired. Logging out.");
            localStorage.clear();
            window.location.href = "/";
            return null;
        }
    }

    async function fetchWithAuth(url, options = {}) {
        let access = localStorage.getItem("access");

        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${access}`,
            "Content-Type": "application/json",
        };

        let response = await fetch(url, options);

        if (response.status === 401) {
            access = await refreshAccessToken();
            if (!access) return;

            options.headers.Authorization = `Bearer ${access}`;
            response = await fetch(url, options);
        }

        return response;
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetchWithAuth("http://127.0.0.1:8000/api/transactions/add/", {
            method: "POST",
            body: JSON.stringify(details),
        });
        const result = await response.json()

        if (response.ok) {
            console.log("Added successfully")
            console.log(result)
        }
        else {
            console.log("Failed")
        }
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50">
            <div className="bg-[#111727] text-white rounded-xl p-6 w-150 shadow-xl relative border-1 border-gray-400">

                <button className="absolute top-2 right-3 text-xl font-bold hover:cursor-pointer hover:scale-130 transition" onClick={close}>
                    ×
                </button>

                <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <input
                        type="text"
                        placeholder="Description"
                        name="title"
                        value={details.title}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />

                    <input
                        type="number"
                        placeholder="Amount (in ₹)"
                        name="amount"
                        value={details.amount}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />

                    <select
                        name="type"
                        value={details.type}
                        onChange={handleChange}
                        className="border p-2 rounded bg-[#111727]"
                    >
                        <option value="income">Credit (+)</option>
                        <option value="expense">Debit (-)</option>
                    </select>
                    <select
                        name="category"
                        value={details.category}
                        onChange={handleChange}
                        className="border p-2 rounded bg-[#111727]"
                    >
                        <option value="Salary">Salary</option>
                        <option value="Food and dining">Food and dining</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Investment">Investment</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Other">Others</option>
                    </select>

                    <input
                        type="date"
                        name="date"
                        value={details.date}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />

                    <button className="bg-blue-500 text-white p-2 rounded font-semibold hover:bg-blue-700 hover:cursor-pointer text-xl">
                        Add Transaction
                    </button>
                </form>

            </div>
        </div>
    )
}

export default AddTransactionModal
