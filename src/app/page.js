import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hello Next.js
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Build fast, modern web applications with the power of Next.js and
          Tailwind CSS.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:scale-105 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-slate-900 transition">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
