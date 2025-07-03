"use client";
import React from "react";

interface ActionButtonsProps {
  isProcessing: boolean;
  onMatch: () => void;
  onClear: () => void;
}

export default function ActionButtons({
  isProcessing,
  onMatch,
  onClear,
}: ActionButtonsProps) {
  return (
    <div className="mb-8 flex justify-center gap-4">
      <button
        onClick={onMatch}
        disabled={isProcessing}
        className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 disabled:bg-blue-300"
      >
        🔍 Match Transactions
        {isProcessing && (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        )}
      </button>
      <button
        onClick={onClear}
        className="rounded-lg bg-gray-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-600"
      >
        🗑️ Clear All
      </button>
    </div>
  );
}
