import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100 pb-10">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <header className="mb-12 text-center">
          <Link href="/" className="inline-flex items-center text-zinc-300 hover:text-blue-400 transition-colors mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Generator
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about the Rick Roll Link Generator and how to use it effectively.
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <FAQ />
        </div>

        <footer className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-400 text-sm">
          <p>Still have questions? This is an open-source project.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/" className="text-zinc-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="https://github.com" className="text-zinc-300 hover:text-blue-400 transition-colors">
              Source Code
            </Link>
            <Link href="/privacy" className="text-zinc-300 hover:text-blue-400 transition-colors">
              Privacy
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
