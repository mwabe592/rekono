"use client";
import React from "react";
import { MatchResult } from "@/types/transaction";
import MatchSummary from "@/components/Dashboard/MatchSummary";
import TransactionTable from "./TransactionTable";

interface ResultsSectionProps {
  matchResult: MatchResult;
  file1Name: string;
  file2Name: string;
  onClear: () => void;
}

export default function ResultsSection({
  matchResult,
  file1Name,
  file2Name,
  onClear,
}: ResultsSectionProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          Transaction Analysis Results
        </h2>
        <button
          onClick={onClear}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-6 py-2 font-semibold text-white transition-all duration-200 hover:bg-red-600"
        >
          🔄 Upload New Files
        </button>
      </div>
      <MatchSummary
        matchResult={matchResult}
        file1Name={file1Name}
        file2Name={file2Name}
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <TransactionTable
          title={`${file1Name} - Unmatched Transactions`}
          transactions={matchResult.unmatched1}
          type="unmatched"
        />
        <TransactionTable
          title={`${file2Name} - Unmatched Transactions`}
          transactions={matchResult.unmatched2}
          type="unmatched"
        />
      </div>
      {matchResult.matched.length > 0 && (
        <div className="mt-8">
          <TransactionTable
            title="✅ Matched Transaction Pairs"
            transactions={matchResult.matched}
            type="matched"
          />
        </div>
      )}
    </div>
  );
}
