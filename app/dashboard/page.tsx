"use client";

import React, { useState } from "react";
import FileUpload from "../../components/FileUpload";
import MatchSummary from "../../components/MatchSummary";
import TransactionTable from "../../components/TransactionTable";
import { matchTransactions } from "../../utils/transactionMatcher";
import { parseCSV } from "../../utils/csvParser";
import { Transaction, MatchResult } from "../../types/transaction";

export default function DashboardPage() {
  const [file1Data, setFile1Data] = useState<Transaction[]>([]);
  const [file2Data, setFile2Data] = useState<Transaction[]>([]);
  const [file1Name, setFile1Name] = useState<string>("");
  const [file2Name, setFile2Name] = useState<string>("");
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = async (file: File, fileNumber: 1 | 2) => {
    setIsProcessing(true);
    try {
      const text = await file.text();
      const transactions = parseCSV(text);

      if (fileNumber === 1) {
        setFile1Data(transactions);
        setFile1Name(file.name);
        console.log(`File 1 parsed: ${transactions.length} transactions`);
      } else {
        setFile2Data(transactions);
        setFile2Name(file.name);
        console.log(`File 2 parsed: ${transactions.length} transactions`);
      }
    } catch (error) {
      console.error("Error parsing CSV:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleMatch = () => {
    if (file1Data.length > 0 && file2Data.length > 0) {
      console.log("Starting transaction matching...");
      const result = matchTransactions(file1Data, file2Data);
      console.log("Matching completed:", result);
      setMatchResult(result);
    }
  };

  const clearData = () => {
    setFile1Data([]);
    setFile2Data([]);
    setFile1Name("");
    setFile2Name("");
    setMatchResult(null);
  };

  const bothFilesUploaded = file1Data.length > 0 && file2Data.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            💳 Bank Statement Matcher
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Upload two CSV bank statements to automatically match transactions
            and highlight unpaired entries
          </p>
        </div>

        {/* Progress Indicator */}
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

        {/* Show file upload and summary section if no match results */}
        {!matchResult && (
          <>
            {/* File Upload Section */}
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <FileUpload
                onFileUpload={(file) => handleFileUpload(file, 1)}
                fileName={file1Name}
                label="Credit Card Statement"
                isProcessing={isProcessing}
              />
              <FileUpload
                onFileUpload={(file) => handleFileUpload(file, 2)}
                fileName={file2Name}
                label="Bank Account Statement"
                isProcessing={isProcessing}
              />
            </div>

            {/* File Summary - Show when any file is uploaded */}
            {(file1Data.length > 0 || file2Data.length > 0) && (
              <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  📁 Uploaded Files Summary
                </h3>
                <div className="grid gap-4 text-sm md:grid-cols-2">
                  {file1Data.length > 0 && (
                    <div className="rounded-lg bg-blue-50 p-4">
                      <h4 className="mb-2 font-medium text-blue-800">
                        {file1Name}
                      </h4>
                      <p className="text-blue-600">
                        {file1Data.length} transactions loaded
                      </p>
                      <p className="text-blue-600">
                        Date range:{" "}
                        {file1Data.length > 0
                          ? `${new Date(
                              Math.min(
                                ...file1Data.map((t) => t.date.getTime()),
                              ),
                            ).toLocaleDateString()} - ${new Date(
                              Math.max(
                                ...file1Data.map((t) => t.date.getTime()),
                              ),
                            ).toLocaleDateString()}`
                          : "N/A"}
                      </p>
                    </div>
                  )}
                  {file2Data.length > 0 && (
                    <div className="rounded-lg bg-green-50 p-4">
                      <h4 className="mb-2 font-medium text-green-800">
                        {file2Name}
                      </h4>
                      <p className="text-green-600">
                        {file2Data.length} transactions loaded
                      </p>
                      <p className="text-green-600">
                        Date range:{" "}
                        {file2Data.length > 0
                          ? `${new Date(
                              Math.min(
                                ...file2Data.map((t) => t.date.getTime()),
                              ),
                            ).toLocaleDateString()} - ${new Date(
                              Math.max(
                                ...file2Data.map((t) => t.date.getTime()),
                              ),
                            ).toLocaleDateString()}`
                          : "N/A"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {bothFilesUploaded && (
              <div className="mb-8 flex justify-center gap-4">
                <button
                  onClick={handleMatch}
                  disabled={isProcessing}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 disabled:bg-blue-300"
                >
                  🔍 Match Transactions
                  {isProcessing && (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  )}
                </button>
                <button
                  onClick={clearData}
                  className="rounded-lg bg-gray-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-600"
                >
                  🗑️ Clear All
                </button>
              </div>
            )}

            {/* Instruction Text */}
            {!bothFilesUploaded && (
              <div className="py-8 text-center">
                <p className="mb-4 text-lg text-gray-600">
                  {file1Data.length === 0 &&
                    file2Data.length === 0 &&
                    "👆 Start by uploading your first CSV file"}
                  {file1Data.length > 0 &&
                    file2Data.length === 0 &&
                    "✨ Great! Now upload your second CSV file"}
                  {file1Data.length === 0 &&
                    file2Data.length > 0 &&
                    "✨ Great! Now upload your first CSV file"}
                </p>
              </div>
            )}
          </>
        )}

        {/* Results Section - Show transaction tables prominently */}
        {matchResult && (
          <div className="space-y-8">
            {/* Reset button at the top of results */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Transaction Analysis Results
              </h2>
              <button
                onClick={clearData}
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

            {/* Unmatched Transactions Tables */}
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

            {/* Matched Transactions Table */}
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
        )}
      </div>
    </div>
  );
}
