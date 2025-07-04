"use server";

import { matchTransactions } from "@/utils/transactionMatcher";
import { getMatchCount, incrementMatchCount } from "@/utils/matchCount";
import { Transaction, MatchResult } from "@/types/transaction";

interface MatchAndTrackParams {
  file1Data: Transaction[];
  file2Data: Transaction[];
  userId: string;
}

interface MatchAndTrackResponse {
  allowed: boolean;
  message?: string;
  result?: MatchResult;
}

export async function matchAndTrack({
  file1Data,
  file2Data,
  userId,
}: MatchAndTrackParams): Promise<MatchAndTrackResponse> {
  // Check current match count
  const matchCount = await getMatchCount(userId);
  if (matchCount >= 20) {
    return {
      allowed: false,
      message: "Free match limit reached. Please upgrade to continue matching.",
    };
  }

  // Match the transactions
  const result = matchTransactions(file1Data, file2Data);

  // Increment match count by 1
  await incrementMatchCount(userId);

  return {
    allowed: true,
    result,
  };
}
