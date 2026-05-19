import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg w-full text-center bg-white shadow-xl rounded-2xl p-10 border">
        
        <div className="text-6xl mb-4">⚠️</div>

        <h1 className="text-6xl font-bold text-gray-900">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}