import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Main content centered */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center w-full max-w-md">
          <h1 className="text-4xl font-bold mb-4">🚀 Welcome to Vite + Tailwind!</h1>
         

          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Clicked {count} times
          </button>
        </div>
      </div>

      {/* Footer at bottom */}
      <footer className="py-4 text-sm opacity-80 text-center">
        Made with ❤️ using <b>React</b> + <b>Tailwind</b>
      </footer>
    </div>
  );
}
