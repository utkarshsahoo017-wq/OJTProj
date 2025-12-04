export default function exportToCSV(data, filename = "transactions.csv") {
    if (!data || data.length === 0) {
        alert("No data available to export.");
        return;
    }

    const header = Object.keys(data[0]).join(",") + "\n";

    const rows = data
        .map((item) =>
            Object.values(item)
                .map((value) => `"${String(value).replace(/"/g, '""')}"`)
                .join(",")
        )
        .join("\n");

    const csv = header + rows;

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
