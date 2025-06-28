export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  description: string;
  originalRow?: any;
}

export interface MatchedPair {
  transaction1: Transaction;
  transaction2: Transaction;
  amount: number;
}

export interface MatchResult {
  matched: MatchedPair[];
  unmatched1: Transaction[];
  unmatched2: Transaction[];
  totalMatches: number;
  totalAmount1: number;
  totalAmount2: number;
  matchedAmount: number;
}
