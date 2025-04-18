import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100 pb-10">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-6 inline-block">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Terms of Use
        </h1>

        <div className="prose prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Rick Roll Link Generator website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            The Rick Roll Link Generator is a service that creates custom links that redirect to Rick Astley's "Never Gonna Give You Up" video as a harmless prank.
          </p>

          <h2>3. User Conduct</h2>
          <p>
            You agree to use this service for entertainment purposes only. You will not use the service for:
          </p>
          <ul>
            <li>Malicious purposes that may harm others</li>
            <li>Spamming or mass messaging campaigns</li>
            <li>Impersonating others with an intent to deceive</li>
            <li>Any illegal activities</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, and other matters related to the Rick Roll Link Generator are protected under applicable copyrights and other proprietary laws. The copying, redistribution, or publication of any part of this service is prohibited without express permission.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            The Rick Roll Link Generator is provided "as is" without warranties of any kind. In no event shall the service owners be liable for any damages resulting from the use or inability to use this service.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the service after such modifications constitutes your acceptance of the modified terms.
          </p>

          <h2>7. Contact</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us through the GitHub repository.
          </p>
        </div>

        <footer className="mt-12 pt-6 border-t border-zinc-800 text-center text-zinc-400 text-sm">
          <p>© {new Date().getFullYear()} Rick Roll Link Generator</p>
        </footer>
      </div>
    </main>
  );
}
