import Link from "next/link";
import Footer from "@/src/components/layouts/Footer/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#140f1d] text-purple-100/90 selection:bg-purple-800/50 selection:text-purple-100 relative overflow-hidden font-sans">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 py-20">
        <div className="max-w-md w-full p-6 sm:p-8 rounded-2xl bg-[#1c1528]/80 border border-purple-500/20 backdrop-blur-xl shadow-xl shadow-purple-950/20 space-y-6">

          <div className="space-y-2">
            <span className="text-base font-mono uppercase tracking-widest text-purple-300/60">
              404 Error
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-purple-50 tracking-tight">
              Page Not Found
            </h1>
          </div>

          <p className="text-sm text-purple-200/70 leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-block w-full py-3 px-6 rounded-lg font-medium text-purple-50 bg-gradient-to-r from-purple-900 to-violet-900 border border-purple-400/30 hover:border-purple-400/60 transition-colors text-sm shadow-lg shadow-purple-950/40"
          >
            Return to Homepage
          </Link>

        </div>
      </main>

      <Footer />
    </div>
  );
}