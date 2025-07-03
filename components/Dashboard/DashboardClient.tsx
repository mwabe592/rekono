"use client";

import React, { useState } from "react";
import { parseCSV } from "@/utils/csvParser";
import { matchTransactions } from "@/utils/transactionMatcher";
import { Transaction, MatchResult } from "@/types/transaction";
import ActionButtons from "./ActionButtons";
import FileSummary from "./FileSummary";
import FileUploadPanel from "./FileUploadPanel";
import InstructionText from "./InstructionText";
import ProgressIndicator from "./ProgressIndicator";
import ResultsSection from "./ResultsSection";

export default function DashboardClient() {
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
      } else {
        setFile2Data(transactions);
        setFile2Name(file.name);
      }
    } catch (error) {
      console.error("Error parsing CSV:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleMatch = () => {
    if (file1Data.length > 0 && file2Data.length > 0) {
      const result = matchTransactions(file1Data, file2Data);
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
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Simplify Your Statements
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Upload two CSV bank statements to automatically match transactions
            and highlight unpaired entries
          </p>
        </div>
        <ProgressIndicator
          file1Name={file1Name}
          file2Name={file2Name}
          matchResult={matchResult}
        />
        {!matchResult && (
          <>
            <FileUploadPanel
              file1Name={file1Name}
              file2Name={file2Name}
              isProcessing={isProcessing}
              onFileUpload={handleFileUpload}
            />
            {(file1Data.length > 0 || file2Data.length > 0) && (
              <FileSummary
                file1Data={file1Data}
                file2Data={file2Data}
                file1Name={file1Name}
                file2Name={file2Name}
              />
            )}
            {bothFilesUploaded && (
              <ActionButtons
                isProcessing={isProcessing}
                onMatch={handleMatch}
                onClear={clearData}
              />
            )}
            {!bothFilesUploaded && (
              <InstructionText file1Data={file1Data} file2Data={file2Data} />
            )}
          </>
        )}
        {matchResult && (
          <ResultsSection
            matchResult={matchResult}
            file1Name={file1Name}
            file2Name={file2Name}
            onClear={clearData}
          />
        )}
      </div>
    </div>
  );
}
