import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Transaction, MatchedPair } from "../types/transaction";

export const downloadPDF = (
  title: string,
  transactions: Transaction[] | MatchedPair[],
  type: "matched" | "unmatched",
) => {
  const doc = new jsPDF();
  const head = [
    ["Date", "Amount", "Description", ...(type === "matched" ? ["File"] : [])],
  ];
  const body: any[] = [];

  transactions.forEach((item) => {
    if (type === "matched") {
      const pair = item as MatchedPair;
      body.push([
        format(pair.transaction1.date),
        pair.transaction1.amount,
        pair.transaction1.description,
        "File 1",
      ]);
      body.push([
        format(pair.transaction2.date),
        pair.transaction2.amount,
        pair.transaction2.description,
        "File 2",
      ]);
      body.push(["", "", "", ""]);
    } else {
      const t = item as Transaction;
      body.push([format(t.date), t.amount, t.description]);
    }
  });

  autoTable(doc, {
    head,
    body,
  });

  doc.save(`${title.replace(/\s+/g, "_")}.pdf`);
};

const format = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
