"use client";
import App from "./components/App";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Currency Exchange
      </h1>
      <App></App>
    </main>
  );
}
