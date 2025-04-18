import Link from "next/link";
import { RickRollForm } from "@/components/RickRollForm";
import { SocialIcons } from "@/components/SocialIcons";
import { FAQ } from "@/components/FAQ";
import { RickrollCounter } from "@/components/RickrollCounter";
import { FeedbackButton } from "@/components/FeedbackButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100 pb-10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <header className="py-8 border-b border-zinc-800">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Rick Roll Link Generator
          </h1>
          <p className="text-center text-zinc-400 mb-2">
            Create custom links that redirect to Rick Astley's famous video
          </p>
          <nav className="flex justify-center space-x-6 mt-4">
            <Link href="/faq" className="text-zinc-300 hover:text-blue-400 transition-colors duration-200">
              FAQ
            </Link>
          </nav>
        </header>

        <section className="mt-8">
          <RickRollForm />

          <p className="text-center text-zinc-400 text-sm mt-4">
            Pro Tip: You can add file extensions to your URL (e.g., article.txt, report.pdf) to make links more convincing.
          </p>
        </section>

        <section className="mt-12 py-8 border-t border-zinc-800">
          <p className="text-center text-zinc-300 mb-4">Share this generator with friends</p>
          <div className="flex justify-center">
            <SocialIcons />
          </div>
          <div className="mt-8 p-4 bg-zinc-800/50 rounded-lg text-center">
            <RickrollCounter />
            <p className="text-zinc-400">successful rickrolls and counting</p>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t border-zinc-800">
          <FAQ />
        </section>

        <footer className="mt-12 pt-6 border-t border-zinc-800 text-center text-zinc-400 text-sm">
          <p>This project is built for educational purposes only.</p>
          <p className="mt-2">
            <Link href="/privacy" className="text-zinc-300 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            {" • "}
            <Link href="/terms" className="text-zinc-300 hover:text-blue-400 transition-colors">
              Terms of Use
            </Link>
          </p>
        </footer>
      </div>

      <FeedbackButton />
    </main>
  );
}
