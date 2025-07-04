"use client";

import { Transaction, MatchedPair } from "@/types/transaction";
import { downloadCSV } from "@/utils/downloadCsv";
import { downloadPDF } from "@/utils/downloadPdf";
import { Calendar, ArrowUpDown, DollarSign } from "lucide-react";
import React, { useState } from "react";

interface TransactionTableProps {
  title: string;
  transactions: Transaction[] | MatchedPair[];
  type: "matched" | "unmatched";
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  title,
  transactions,
  type,
}) => {
  const [sortBy, setSortBy] = useState<"date" | "amount" | "description">(
    "date",
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSort = (field: "date" | "amount" | "description") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    let valueA, valueB;

    if (type === "matched") {
      const pairA = a as MatchedPair;
      const pairB = b as MatchedPair;

      switch (sortBy) {
        case "date":
          valueA = pairA.transaction1.date.getTime();
          valueB = pairB.transaction1.date.getTime();
          break;
        case "amount":
          valueA = Math.abs(pairA.amount);
          valueB = Math.abs(pairB.amount);
          break;
        case "description":
          valueA = pairA.transaction1.description.toLowerCase();
          valueB = pairB.transaction1.description.toLowerCase();
          break;
      }
    } else {
      const transA = a as Transaction;
      const transB = b as Transaction;

      switch (sortBy) {
        case "date":
          valueA = transA.date.getTime();
          valueB = transB.date.getTime();
          break;
        case "amount":
          valueA = Math.abs(transA.amount);
          valueB = Math.abs(transB.amount);
          break;
        case "description":
          valueA = transA.description.toLowerCase();
          valueB = transB.description.toLowerCase();
          break;
      }
    }

    if (sortOrder === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  const totalAmount =
    type === "matched"
      ? (transactions as MatchedPair[]).reduce(
          (sum, pair) =>
            sum + pair.transaction1.amount + pair.transaction2.amount,
          0,
        )
      : (transactions as Transaction[]).reduce((sum, t) => sum + t.amount, 0);

  if (transactions.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">{title}</h3>
        <div className="py-8 text-center">
          <p className="text-gray-500">No transactions to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
          {transactions.length}{" "}
          {transactions.length === 1 ? "transaction" : "transactions"}
        </span>
      </div>

      {/* Download Buttons */}
      <div className="mb-4 flex gap-3">
        <button
          onClick={() => downloadCSV(title, transactions, type)}
          className="rounded-md bg-blue-500 px-3 py-1 text-sm text-white shadow-sm hover:bg-blue-600"
        >
          Download CSV
        </button>
        <button
          onClick={() => downloadPDF(title, transactions, type)}
          className="rounded-md bg-red-500 px-3 py-1 text-sm text-white shadow-sm hover:bg-red-600"
        >
          Download PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort("date")}
                  className="flex items-center gap-1 font-medium text-gray-600 hover:text-gray-800"
                >
                  <Calendar className="h-4 w-4" />
                  Date
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort("amount")}
                  className="flex items-center gap-1 font-medium text-gray-600 hover:text-gray-800"
                >
                  <DollarSign className="h-4 w-4" />
                  Amount
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort("description")}
                  className="flex items-center gap-1 font-medium text-gray-600 hover:text-gray-800"
                >
                  Description
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              {type === "matched" && (
                <th className="px-4 py-3 text-left">
                  <span className="font-medium text-gray-600">File</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((item, index) => {
              if (type === "matched") {
                const pair = item as MatchedPair;
                return (
                  <React.Fragment key={index}>
                    <tr className="border-b border-gray-100 transition-colors hover:bg-green-50">
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {formatDate(pair.transaction1.date)}
                      </td>
                      <td className="px-4 py-2">
                        <span className="font-medium text-green-600">
                          {formatCurrency(pair.transaction1.amount)}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {pair.transaction1.description}
                      </td>
                      <td className="px-4 py-2 text-xs font-medium text-blue-600">
                        File 1
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 transition-colors hover:bg-green-50">
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {formatDate(pair.transaction2.date)}
                      </td>
                      <td className="px-4 py-2">
                        <span className="font-medium text-green-600">
                          {formatCurrency(pair.transaction2.amount)}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {pair.transaction2.description}
                      </td>
                      <td className="px-4 py-2 text-xs font-medium text-green-600">
                        File 2
                      </td>
                    </tr>
                  </React.Fragment>
                );
              } else {
                const transaction = item as Transaction;
                return (
                  <tr
                    key={index}
                    className="border-b border-gray-100 transition-colors hover:bg-gray-50"
                  >
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`font-medium ${
                          transaction.amount < 0
                            ? "text-red-600"
                            : "text-gray-800"
                        }`}
                      >
                        {formatCurrency(transaction.amount)}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {transaction.description}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-4 border-t border-gray-200 pt-4 text-right">
        <p className="text-sm text-gray-600">
          Total: {formatCurrency(totalAmount)}
        </p>
      </div>
    </div>
  );
};

export default TransactionTable;
