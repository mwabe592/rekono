"use client";

import React, { useState, useEffect } from "react";

interface AkahuUserData {
  item: any;
  _id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  success: boolean;
  data?: AkahuUserData;
  error?: string;
  message?: string;
}

export default function MePage() {
  const [userData, setUserData] = useState<AkahuUserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(userData);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/akahu/me");
        const result: ApiResponse = await response.json();

        if (result.success && result.data) {
          setUserData(result.data);
        } else {
          setError(
            result.error || result.message || "Failed to fetch user data",
          );
        }
      } catch (err) {
        setError("Network error occurred while fetching user data");
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
          <p className="mt-4 text-lg">Loading user data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-6xl text-red-500">⚠️</div>
          <h1 className="mb-2 text-2xl font-bold text-red-600">Error</h1>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Your Akahu Profile</h1>

      {userData && (
        <div className="max-w-2xl rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User ID
              </label>
              <p className="mt-1 font-mono text-sm text-gray-900">
                {userData._id}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userData.item.email}
              </p>
            </div>

            {userData.first_name && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  {userData.first_name}
                </p>
              </div>
            )}

            {userData.last_name && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  {userData.last_name}
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Created
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {new Date(userData.created_at).toLocaleDateString()}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Updated
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {new Date(userData.updated_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
