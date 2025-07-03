"use client";
import React from "react";
import { Transaction } from "@/types/transaction";

interface FileSummaryProps {
  file1Data: Transaction[];
  file2Data: Transaction[];
  file1Name: string;
  file2Name: string;
}

export default function FileSummary({
  file1Data,
  file2Data,
  file1Name,
  file2Name,
}: FileSummaryProps) {
  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">
        📁 Uploaded Files Summary
      </h3>
      <div className="grid gap-4 text-sm md:grid-cols-2">
        {file1Data.length > 0 && (
          <div className="rounded-lg bg-blue-50 p-4">
            <h4 className="mb-2 font-medium text-blue-800">{file1Name}</h4>
            <p className="text-blue-600">
              {file1Data.length} transactions loaded
            </p>
            <p className="text-blue-600">
              Date range:{" "}
              {file1Data.length > 0
                ? `${new Date(
                    Math.min(...file1Data.map((t) => t.date.getTime())),
                  ).toLocaleDateString()} - ${new Date(
                    Math.max(...file1Data.map((t) => t.date.getTime())),
                  ).toLocaleDateString()}`
                : "N/A"}
            </p>
          </div>
        )}
        {file2Data.length > 0 && (
          <div className="rounded-lg bg-green-50 p-4">
            <h4 className="mb-2 font-medium text-green-800">{file2Name}</h4>
            <p className="text-green-600">
              {file2Data.length} transactions loaded
            </p>
            <p className="text-green-600">
              Date range:{" "}
              {file2Data.length > 0
                ? `${new Date(
                    Math.min(...file2Data.map((t) => t.date.getTime())),
                  ).toLocaleDateString()} - ${new Date(
                    Math.max(...file2Data.map((t) => t.date.getTime())),
                  ).toLocaleDateString()}`
                : "N/A"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
