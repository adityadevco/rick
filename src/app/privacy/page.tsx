import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Last updated: April 17, 2025
          </p>
        </header>

        <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
          <section className="mb-8">
            <h2>1. Information We Collect</h2>
            <p>
              The Rick Roll Link Generator is designed to be simple and respects your privacy. We collect minimal information:
            </p>
            <ul>
              <li>The information you input when creating links (title, description, image URL)</li>
              <li>Basic usage statistics (number of links created, clicks)</li>
              <li>Standard server logs with IP addresses (stored for 7 days for security purposes)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the collected information solely for:
            </p>
            <ul>
              <li>Operating and improving the service</li>
              <li>Generating anonymous usage statistics</li>
              <li>Preventing abuse and maintaining security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>3. Data Retention</h2>
            <p>
              Links created with our service are retained according to the expiration period you select. Server logs are retained for 7 days.
            </p>
          </section>

          <section className="mb-8">
            <h2>4. Third-Party Services</h2>
            <p>
              Our service uses:
            </p>
            <ul>
              <li>Google AdSense for displaying advertisements</li>
              <li>Basic analytics to understand site usage</li>
            </ul>
            <p>
              These third parties may use cookies and similar technologies. Please refer to their respective privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Object to our processing of your data</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section>
            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-400 text-sm">
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/" className="text-zinc-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/faq" className="text-zinc-300 hover:text-blue-400 transition-colors">
              FAQ
            </Link>
            <Link href="/terms" className="text-zinc-300 hover:text-blue-400 transition-colors">
              Terms of Use
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
