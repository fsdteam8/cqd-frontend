"use client"
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-white">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in-scale">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-lg text-gray-600 animate-fade-in-delay">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline animate-fade-in-delay"
      >
        Go back home
      </Link>

      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInDelay {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease forwards;
        }
        .animate-fade-in-delay {
          animation: fadeInDelay 0.8s ease forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
