"use client";
import App from "./components/App";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 dark:bg-gray-900">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200">
        CAD Exchange Rates
      </h1>
      <App></App>
    </main>
  );
}
