"use client";
import React from "react";
import { Transaction } from "@/types/transaction";

interface InstructionTextProps {
  file1Data: Transaction[];
  file2Data: Transaction[];
}

export default function InstructionText({
  file1Data,
  file2Data,
}: InstructionTextProps) {
  let message = "";
  if (file1Data.length === 0 && file2Data.length === 0) {
    message = "Start by uploading your first CSV file";
  } else if (file1Data.length > 0 && file2Data.length === 0) {
    message = "✨ Great! Now upload your second CSV file";
  } else if (file1Data.length === 0 && file2Data.length > 0) {
    message = "✨ Great! Now upload your first CSV file";
  }
  return (
    <div className="py-8 text-center">
      <p className="mb-4 text-lg text-gray-600">{message}</p>
    </div>
  );
}
