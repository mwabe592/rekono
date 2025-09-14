import { NextRequest, NextResponse } from "next/server";
import akahu from "@api/akahu";

export async function GET(request: NextRequest) {
  try {
    // Get API credentials from environment variables
    const userToken = process.env.AKAHU_USER_TOKEN;
    const appToken = process.env.AKAHU_APP_TOKEN;

    // Validate that required environment variables are present
    if (!userToken || !appToken) {
      return NextResponse.json(
        {
          error: "Missing Akahu API credentials",
          message:
            "Please ensure AKAHU_USER_TOKEN and AKAHU_APP_TOKEN are set in environment variables",
        },
        { status: 500 },
      );
    }

    // Initialize Akahu SDK with user token
    akahu.auth(userToken);

    // Use the SDK to get user data
    const { data } = await akahu.getMe({ "X-Akahu-Id": appToken });

    console.log("Akahu SDK user response:", data);

    return NextResponse.json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error("Error calling Akahu API:", error);

    // Handle different types of errors from the SDK
    let errorMessage = "An unexpected error occurred while fetching user data";
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;

      // Check for specific error types
      if (
        error.message.includes("401") ||
        error.message.includes("Unauthorized")
      ) {
        statusCode = 401;
      } else if (
        error.message.includes("404") ||
        error.message.includes("Not Found")
      ) {
        statusCode = 404;
      } else if (
        error.message.includes("403") ||
        error.message.includes("Forbidden")
      ) {
        statusCode = 403;
      }
    }

    return NextResponse.json(
      {
        error: "Failed to fetch user data",
        message: errorMessage,
      },
      { status: statusCode },
    );
  }
}
