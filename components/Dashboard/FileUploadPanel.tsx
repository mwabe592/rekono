"use client";
import React from "react";
import FileUpload from "@/components/Dashboard/FileUpload";

interface FileUploadPanelProps {
  file1Name: string;
  file2Name: string;
  isProcessing: boolean;
  onFileUpload: (file: File, fileNumber: 1 | 2) => void;
}

export default function FileUploadPanel({
  file1Name,
  file2Name,
  isProcessing,
  onFileUpload,
}: FileUploadPanelProps) {
  return (
    <div className="mb-8 grid gap-8 md:grid-cols-2">
      <FileUpload
        onFileUpload={(file) => onFileUpload(file, 1)}
        fileName={file1Name}
        label="Credit Card Statement"
        isProcessing={isProcessing}
      />
      <FileUpload
        onFileUpload={(file) => onFileUpload(file, 2)}
        fileName={file2Name}
        label="Bank Account Statement"
        isProcessing={isProcessing}
      />
    </div>
  );
}
