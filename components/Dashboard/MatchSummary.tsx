"use client";

import React from "react";
import { TrendingUp, Target, AlertCircle, DollarSign } from "lucide-react";
import { MatchResult } from "@/types/transaction";

interface MatchSummaryProps {
  matchResult: MatchResult;
  file1Name: string;
  file2Name: string;
}

const MatchSummary: React.FC<MatchSummaryProps> = ({
  matchResult,
  file1Name,
  file2Name,
}) => {
  const total1 = matchResult.matched.length + matchResult.unmatched1.length;
  const total2 = matchResult.matched.length + matchResult.unmatched2.length;
  const matchRate = total1 > 0 ? (matchResult.totalMatches / total1) * 100 : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Math.abs(amount));
  };

  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        📊 Match Summary
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Match Rate</p>
              <p className="text-2xl font-bold text-blue-800">
                {matchRate.toFixed(1)}%
              </p>
            </div>
            <Target className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="rounded-lg border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">
                Matched Pairs
              </p>
              <p className="text-2xl font-bold text-green-800">
                {matchResult.totalMatches}
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="rounded-lg border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600">Unmatched</p>
              <p className="text-2xl font-bold text-red-800">
                {matchResult.unmatched1.length + matchResult.unmatched2.length}
              </p>
            </div>
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
        </div>

        <div className="rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600">
                Matched Amount
              </p>
              <p className="text-2xl font-bold text-purple-800">
                {formatCurrency(matchResult.matchedAmount)}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
        <div className="rounded-lg bg-gray-50 p-4">
          <h4 className="mb-2 font-medium text-gray-800">{file1Name}</h4>
          <p className="text-gray-600">Total: {total1} transactions</p>
          <p className="text-gray-600">
            Unmatched: {matchResult.unmatched1.length}
          </p>
        </div>
        <div className="rounded-lg bg-gray-50 p-4">
          <h4 className="mb-2 font-medium text-gray-800">{file2Name}</h4>
          <p className="text-gray-600">Total: {total2} transactions</p>
          <p className="text-gray-600">
            Unmatched: {matchResult.unmatched2.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchSummary;
