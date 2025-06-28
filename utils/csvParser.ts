import { Transaction } from "../types/transaction";

export const parseCSV = (csvText: string): Transaction[] => {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) {
    throw new Error("CSV file must have at least a header and one data row");
  }

  const headers = lines[0]
    .split(",")
    .map((h) => h.replace(/"/g, "").trim().toLowerCase());
  const transactions: Transaction[] = [];

  // Try to identify column mappings
  const dateColumns = [
    "date",
    "transaction date",
    "posting date",
    "trans date",
    "transaction_date",
  ];
  const amountColumns = [
    "amount",
    "transaction amount",
    "debit",
    "credit",
    "withdrawal",
    "deposit",
    "transaction_amount",
  ];
  const descriptionColumns = [
    "description",
    "memo",
    "other party",
    "particulars",
    "merchant",
    "reference",
    "details",
    "transaction_description",
  ];

  const dateIndex = headers.findIndex((h) =>
    dateColumns.some((col) => h.includes(col)),
  );
  const amountIndex = headers.findIndex((h) =>
    amountColumns.some((col) => h.includes(col)),
  );
  const descriptionIndex = headers.findIndex((h) =>
    descriptionColumns.some((col) => h.includes(col)),
  );

  console.log("CSV Headers:", headers);
  console.log(
    "Column indices - Date:",
    dateIndex,
    "Amount:",
    amountIndex,
    "Description:",
    descriptionIndex,
  );

  if (dateIndex === -1 || amountIndex === -1 || descriptionIndex === -1) {
    console.warn(
      "Could not identify all required columns. Using fallback positions.",
    );
  }

  for (let i = 1; i < lines.length; i++) {
    try {
      const row = parseCSVRow(lines[i]);
      if (row.length < Math.max(dateIndex, amountIndex, descriptionIndex) + 1) {
        continue; // Skip malformed rows
      }

      const dateStr = row[dateIndex >= 0 ? dateIndex : 0] || "";
      const amountStr = row[amountIndex >= 0 ? amountIndex : 1] || "";
      const description =
        row[descriptionIndex >= 0 ? descriptionIndex : 2] || "";

      console.log(
        `Row ${i}: Date="${dateStr}", Amount="${amountStr}", Description="${description}"`,
      );

      // Parse date
      const date = parseDate(dateStr);
      if (!date) {
        console.warn(`Skipping row ${i}: invalid date "${dateStr}"`);
        continue;
      }

      // Parse amount
      const amount = parseAmount(amountStr);
      if (isNaN(amount) || amount === 0) {
        console.warn(`Skipping row ${i}: invalid amount "${amountStr}"`);
        continue;
      }

      transactions.push({
        id: `${i}-${Date.now()}-${Math.random()}`,
        date,
        amount,
        description: description.trim(),
        originalRow: row,
      });
    } catch (error) {
      console.warn(`Error parsing row ${i}:`, error);
      continue;
    }
  }

  console.log(`Parsed ${transactions.length} transactions`);
  return transactions;
};

const parseCSVRow = (row: string): string[] => {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const char = row[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result.map((cell) => cell.replace(/^"|"$/g, ""));
};

const parseDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;

  console.log("Parsing date:", dateStr);

  // Clean the date string
  const cleaned = dateStr.replace(/['"]/g, "").trim();

  // Try various date formats with explicit parsing
  const formats = [
    // DD/MM/YYYY or DD-MM-YYYY
    /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/,
    // MM/DD/YYYY or MM-DD-YYYY
    /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/,
    // YYYY-MM-DD
    /^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/,
    // DD/MM/YY or DD-MM-YY
    /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})$/,
  ];

  for (const format of formats) {
    const match = cleaned.match(format);
    if (match) {
      const [, p1, p2, p3] = match;

      // Handle different year formats
      let year = parseInt(p3);
      if (year < 100) {
        // Convert 2-digit year to 4-digit (assume 20xx for years 00-30, 19xx for 31-99)
        year = year <= 30 ? 2000 + year : 1900 + year;
      }

      // Only accept reasonable years (1990-2024)
      const currentYear = new Date().getFullYear();
      if (year < 1990 || year > currentYear + 5) {
        console.log(`Rejecting date with invalid year: ${year}`);
        continue;
      }

      // Try DD/MM/YYYY format first (most common internationally)
      let day = parseInt(p1);
      let month = parseInt(p2);

      // If day > 12, it's likely DD/MM format
      // If month > 12, it's likely MM/DD format
      if (day > 12 && month <= 12) {
        // Definitely DD/MM
        const date = new Date(year, month - 1, day);
        if (
          !isNaN(date.getTime()) &&
          date.getDate() === day &&
          date.getMonth() === month - 1
        ) {
          console.log(
            `Parsed as DD/MM/YYYY: ${day}/${month}/${year} -> ${date}`,
          );
          return date;
        }
      } else if (month > 12 && day <= 12) {
        // Definitely MM/DD, swap them
        const date = new Date(year, day - 1, month);
        if (
          !isNaN(date.getTime()) &&
          date.getDate() === month &&
          date.getMonth() === day - 1
        ) {
          console.log(
            `Parsed as MM/DD/YYYY: ${month}/${day}/${year} -> ${date}`,
          );
          return date;
        }
      } else {
        // Ambiguous case, try both formats
        // Try DD/MM first
        let date = new Date(year, month - 1, day);
        if (
          !isNaN(date.getTime()) &&
          date.getDate() === day &&
          date.getMonth() === month - 1
        ) {
          console.log(
            `Parsed as DD/MM/YYYY: ${day}/${month}/${year} -> ${date}`,
          );
          return date;
        }

        // Try MM/DD
        date = new Date(year, day - 1, month);
        if (
          !isNaN(date.getTime()) &&
          date.getDate() === month &&
          date.getMonth() === day - 1
        ) {
          console.log(
            `Parsed as MM/DD/YYYY: ${month}/${day}/${year} -> ${date}`,
          );
          return date;
        }
      }
    }
  }

  // Try ISO format
  const isoDate = new Date(cleaned);
  if (!isNaN(isoDate.getTime())) {
    console.log(`Parsed as ISO: ${cleaned} -> ${isoDate}`);
    return isoDate;
  }

  console.log(`Could not parse date: ${dateStr}`);
  return null;
};

const parseAmount = (amountStr: string): number => {
  if (!amountStr) return 0;

  console.log("Parsing amount:", amountStr);

  // Remove currency symbols, spaces, and other non-numeric characters except decimal point and minus
  const cleaned = amountStr
    .replace(/[^\d.-]/g, "")
    .replace(/(\d)-(\d)/g, "$1-$2"); // Preserve minus signs between digits

  // Handle multiple decimal points (take the last one)
  const parts = cleaned.split(".");
  if (parts.length > 2) {
    const lastPart = parts.pop();
    const firstParts = parts.join("");
    const finalAmount = `${firstParts}.${lastPart}`;
    const result = parseFloat(finalAmount);
    console.log(`Multiple decimals, using: ${finalAmount} -> ${result}`);
    return isNaN(result) ? 0 : result;
  }

  const result = parseFloat(cleaned);
  console.log(`Parsed amount: ${cleaned} -> ${result}`);
  return isNaN(result) ? 0 : result;
};
