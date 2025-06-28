import { Transaction, MatchedPair, MatchResult } from "../types/transaction";

export const matchTransactions = (
  transactions1: Transaction[],
  transactions2: Transaction[],
): MatchResult => {
  const matched: MatchedPair[] = [];
  const unmatched1 = [...transactions1];
  const unmatched2 = [...transactions2];

  console.log("Starting transaction matching...");
  console.log("File 1 transactions:", unmatched1.length);
  console.log("File 2 transactions:", unmatched2.length);

  // Create a map for faster lookups - use absolute values for matching
  const amountMap = new Map<string, Transaction[]>();

  // Group transactions2 by exact amount (using string key for precision)
  transactions2.forEach((transaction) => {
    const amountKey = Math.abs(transaction.amount).toFixed(2);
    if (!amountMap.has(amountKey)) {
      amountMap.set(amountKey, []);
    }
    amountMap.get(amountKey)!.push(transaction);
  });

  console.log("Amount map created with", amountMap.size, "unique amounts");

  // Match transactions from file 1
  for (let i = unmatched1.length - 1; i >= 0; i--) {
    const transaction1 = unmatched1[i];
    const amountKey = Math.abs(transaction1.amount).toFixed(2);
    const potentialMatches = amountMap.get(amountKey);

    console.log(
      `Looking for matches for amount ${amountKey}: ${
        potentialMatches?.length || 0
      } potential matches`,
    );

    if (potentialMatches && potentialMatches.length > 0) {
      // Find the first available match
      for (let j = 0; j < potentialMatches.length; j++) {
        const transaction2 = potentialMatches[j];
        const transaction2Index = unmatched2.findIndex(
          (t) => t.id === transaction2.id,
        );

        if (transaction2Index !== -1) {
          // Create matched pair
          matched.push({
            transaction1,
            transaction2,
            amount: transaction1.amount,
          });

          console.log(
            `Matched: ${transaction1.description} (${transaction1.amount}) with ${transaction2.description} (${transaction2.amount})`,
          );

          // Remove from unmatched lists
          unmatched1.splice(i, 1);
          unmatched2.splice(transaction2Index, 1);

          // Remove from potential matches
          potentialMatches.splice(j, 1);
          if (potentialMatches.length === 0) {
            amountMap.delete(amountKey);
          }

          break;
        }
      }
    }
  }

  // Calculate totals
  const totalAmount1 = transactions1.reduce(
    (sum, t) => sum + Math.abs(t.amount),
    0,
  );
  const totalAmount2 = transactions2.reduce(
    (sum, t) => sum + Math.abs(t.amount),
    0,
  );
  const matchedAmount = matched.reduce(
    (sum, pair) => sum + Math.abs(pair.amount),
    0,
  );

  console.log(
    `Matching completed: ${matched.length} matches, ${unmatched1.length} unmatched from file 1, ${unmatched2.length} unmatched from file 2`,
  );

  return {
    matched,
    unmatched1,
    unmatched2,
    totalMatches: matched.length,
    totalAmount1,
    totalAmount2,
    matchedAmount,
  };
};
