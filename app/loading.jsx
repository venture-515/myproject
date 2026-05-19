import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>

        {/* Loading text */}
        <h2 className="mt-6 text-xl font-semibold text-gray-800">
          Loading... :)
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please wait while we prepare your page
        </p>
      </div>
    </div>
  );
}