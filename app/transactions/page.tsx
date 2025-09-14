import React from "react";

// TypeScript interfaces for transaction data
interface Transaction {
  _id: string;
  account: string;
  amount: number;
  balance: number;
  description: string;
  type: "debit" | "credit";
  category?: string;
  subcategory?: string;
  merchant?: {
    name: string;
    category?: string;
  };
  date: string;
  created_at: string;
  updated_at: string;
}

interface TransactionsResponse {
  success: boolean;
  data?: {
    items: Transaction[];
    meta?: {
      total: number;
      page: number;
      limit: number;
    };
  };
  error?: string;
  message?: string;
}

// Server-side data fetching function
async function getTransactions(
  accountId: string,
): Promise<TransactionsResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(
      `${baseUrl}/api/akahu/accounts/${accountId}/transactions`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Add cache control for better performance
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      },
    );

    if (!response.ok) {
      return {
        success: false,
        error: "Failed to fetch transactions",
        message: `HTTP ${response.status}`,
      };
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return {
      success: false,
      error: "Network error",
      message: "Failed to connect to the server",
    };
  }
}

// Format currency for display
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  }).format(amount);
}

// Format date for display
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-NZ", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Server Component for displaying transactions
export default async function TransactionsPage({
  searchParams,
}: {
  searchParams: { accountId?: string };
}) {
  const accountId = searchParams.accountId;

  if (!accountId) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Account Transactions</h1>
        <div className="rounded-lg bg-red-50 p-6 text-center">
          <div className="mb-4 text-6xl text-red-500">⚠️</div>
          <h2 className="mb-2 text-xl font-semibold text-red-600">
            Account ID Required
          </h2>
          <p className="text-gray-600">
            Please provide an account ID in the URL parameters.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Example: /transactions?accountId=your_account_id
          </p>
        </div>
      </div>
    );
  }

  // Fetch transactions data on the server
  const transactionsData = await getTransactions(accountId);

  // Debug: Log the response structure
  console.log(
    "Transactions response:",
    JSON.stringify(transactionsData, null, 2),
  );

  if (!transactionsData.success || !transactionsData.data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Account Transactions</h1>
        <div className="rounded-lg bg-red-50 p-6 text-center">
          <div className="mb-4 text-6xl text-red-500">⚠️</div>
          <h2 className="mb-2 text-xl font-semibold text-red-600">Error</h2>
          <p className="text-gray-600">
            {transactionsData.error || transactionsData.message}
          </p>
        </div>
      </div>
    );
  }

  const transactions = transactionsData.data?.items || [];
  const meta = transactionsData.data?.meta;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Account Transactions</h1>
        {meta && (
          <div className="text-sm text-gray-600">
            Showing {transactions.length} of {meta.total} transactions
          </div>
        )}
      </div>

      {transactions.length === 0 ? (
        <div className="rounded-lg bg-gray-50 p-8 text-center">
          <div className="mb-4 text-6xl text-gray-400">📊</div>
          <h2 className="mb-2 text-xl font-semibold text-gray-600">
            No Transactions Found
          </h2>
          <p className="text-gray-500">
            This account doesn't have any transactions yet.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Merchant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="max-w-xs truncate">
                        {transaction.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {typeof transaction.merchant === "object" &&
                      transaction.merchant?.name
                        ? transaction.merchant.name
                        : "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="flex flex-col">
                        {transaction.category &&
                          typeof transaction.category === "string" && (
                            <span className="text-gray-900">
                              {transaction.category}
                            </span>
                          )}
                        {transaction.subcategory &&
                          typeof transaction.subcategory === "string" && (
                            <span className="text-xs text-gray-500">
                              {transaction.subcategory}
                            </span>
                          )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm whitespace-nowrap">
                      <span
                        className={`font-medium ${
                          transaction.type === "credit"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}
                        {formatCurrency(Math.abs(transaction.amount))}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900">
                      {formatCurrency(transaction.balance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Transaction Summary */}
      {transactions.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-4">
            <h3 className="text-sm font-medium text-blue-600">
              Total Transactions
            </h3>
            <p className="text-2xl font-bold text-blue-900">
              {transactions.length}
            </p>
          </div>
          <div className="rounded-lg bg-green-50 p-4">
            <h3 className="text-sm font-medium text-green-600">
              Total Credits
            </h3>
            <p className="text-2xl font-bold text-green-900">
              {formatCurrency(
                transactions
                  .filter((t) => t.type === "credit")
                  .reduce((sum, t) => sum + t.amount, 0),
              )}
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4">
            <h3 className="text-sm font-medium text-red-600">Total Debits</h3>
            <p className="text-2xl font-bold text-red-900">
              {formatCurrency(
                Math.abs(
                  transactions
                    .filter((t) => t.type === "debit")
                    .reduce((sum, t) => sum + t.amount, 0),
                ),
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
