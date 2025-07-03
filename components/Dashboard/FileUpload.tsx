"use client";

import React, { useCallback } from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  fileName: string;
  label: string;
  isProcessing: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  fileName,
  label,
  isProcessing,
}) => {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      const csvFile = files.find((file) =>
        file.name.toLowerCase().endsWith(".csv"),
      );

      if (csvFile) {
        onFileUpload(csvFile);
      }
    },
    [onFileUpload],
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const preventDefault = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 shadow-lg transition-all duration-300 hover:border-blue-400">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">{label}</h3>

      {fileName ? (
        <div className="text-center">
          <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
          <p className="mb-2 font-medium text-green-600">
            File uploaded successfully!
          </p>
          <p className="text-sm break-words text-gray-600">{fileName}</p>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={preventDefault}
          onDragEnter={preventDefault}
          className="cursor-pointer rounded-lg p-8 transition-colors hover:bg-gray-50"
        >
          <div className="text-center">
            <Upload className="mx-auto mb-4 h-16 w-16 text-gray-400" />
            <p className="mb-4 text-gray-600">
              Drag and drop your CSV file here, or click to browse
            </p>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileInput}
              className="hidden"
              id={`file-input-${label.replace(/\s+/g, "-").toLowerCase()}`}
            />
            <label
              htmlFor={`file-input-${label.replace(/\s+/g, "-").toLowerCase()}`}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600"
            >
              <FileText className="h-4 w-4" />
              Choose CSV File
            </label>
          </div>
        </div>
      )}

      {isProcessing && (
        <div className="mt-4 text-center">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-b-2 border-blue-500"></div>
          <p className="mt-2 text-sm text-gray-600">Processing...</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
