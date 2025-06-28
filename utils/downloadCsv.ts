import { Transaction, MatchedPair } from "../types/transaction";

export const downloadCSV = (
  title: string,
  transactions: Transaction[] | MatchedPair[],
  type: "matched" | "unmatched",
) => {
  let csvContent = "Date,Amount,Description";
  if (type === "matched") csvContent += ",File";
  csvContent += "\n";

  transactions.forEach((item) => {
    if (type === "matched") {
      const pair = item as MatchedPair;
      csvContent += `${format(pair.transaction1.date)},${
        pair.transaction1.amount
      },"${pair.transaction1.description}",File 1\n`;
      csvContent += `${format(pair.transaction2.date)},${
        pair.transaction2.amount
      },"${pair.transaction2.description}",File 2\n`;
    } else {
      const t = item as Transaction;
      csvContent += `${format(t.date)},${t.amount},"${t.description}"\n`;
    }
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${title.replace(/\s+/g, "_")}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const format = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
