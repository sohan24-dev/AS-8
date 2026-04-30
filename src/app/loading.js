"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-transparent animate-spin"></div>
      </div>
    </div>
  );
}