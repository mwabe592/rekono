"use client";
import React from "react";
import { MatchResult } from "@/types/transaction";

interface ProgressIndicatorProps {
  file1Name: string;
  file2Name: string;
  matchResult: MatchResult | null;
}

export default function ProgressIndicator({
  file1Name,
  file2Name,
  matchResult,
}: ProgressIndicatorProps) {
  return (
    <div className="mb-8 flex justify-center">
      <div className="flex items-center space-x-4">
        <div
          className={`flex items-center space-x-2 rounded-lg px-4 py-2 ${
            file1Name
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <div
            className={`h-3 w-3 rounded-full ${
              file1Name ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
          <span className="text-sm font-medium">
            File 1 {file1Name ? "✓" : ""}
          </span>
        </div>
        <div
          className={`flex items-center space-x-2 rounded-lg px-4 py-2 ${
            file2Name
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <div
            className={`h-3 w-3 rounded-full ${
              file2Name ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
          <span className="text-sm font-medium">
            File 2 {file2Name ? "✓" : ""}
          </span>
        </div>
        <div
          className={`flex items-center space-x-2 rounded-lg px-4 py-2 ${
            matchResult
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <div
            className={`h-3 w-3 rounded-full ${
              matchResult ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
          <span className="text-sm font-medium">
            Matched {matchResult ? "✓" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
