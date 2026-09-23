import Footer from "@/src/components/layouts/Footer/Footer";
import Link from "next/link";
import {lastUpdated} from "@/src/constants/privacyPolicy";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#140f1d] text-purple-100/90 selection:bg-purple-800/50 selection:text-purple-100 relative overflow-hidden font-sans">
      <header className="w-full max-w-4xl mx-auto px-6 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-purple-300/80 hover:text-purple-50 transition-colors py-2 px-3 rounded-lg bg-purple-950/40 border border-purple-500/10 hover:border-purple-400/30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Homepage
        </Link>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-6 py-8">
        <div className="p-4 md:p-8 sm:p-10 rounded-2xl bg-[#1c1528]/80 border border-purple-500/20 backdrop-blur-xl shadow-xl shadow-purple-950/20 space-y-8">

          <div className="border-b border-purple-500/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-light text-purple-50 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-purple-300/60">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-8 text-sm leading-relaxed text-purple-200/80">

            <section className="space-y-2">
              <h2 className="text-lg font-medium text-purple-100">1. Overview</h2>
              <p>
                Your privacy is important to me. This Privacy Policy outlines how your personal information is handled when you visit this website. I operate with a minimal data collection model: I only collect information that you voluntarily provide to get in touch.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-medium text-purple-100">2. Information Collected</h2>
              <p>
                The only personal data collected on this portfolio is your <strong className="text-purple-50 font-normal">email address</strong> (and any accompanying message content) when you reach out directly via the contact form or direct email link.
              </p>
              <p>
                I do not collect names, phone numbers, location tracking data, or payment details, nor do I require user account creation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-medium text-purple-100">3. How Your Email is Used</h2>
              <p>
                Any email address provided will strictly be used to:
              </p>
              <ul className="list-disc list-inside pl-2 space-y-1 text-purple-200/70">
                <li>Respond to your inquiries, project requests, or professional opportunities.</li>
                <li>Follow up on ongoing communications related to your request.</li>
              </ul>
              <p className="mt-2">
                Your email will <strong className="text-purple-50 font-normal">never</strong> be sold, rented, shared with third parties, or added to marketing newsletter lists without your explicit prior consent.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-medium text-purple-100">4. Hosting & Infrastructure</h2>
              <p>
                This website is built with Next.js and hosted on <strong className="text-purple-50 font-normal">Vercel Inc.</strong> Vercel may collect standard server logs and technical telemetry (such as IP addresses, browser types, and access timestamps) strictly to maintain security, infrastructure performance, and DDoS protection.
              </p>
              <p>
                For more details on Vercel’s data security practices, please review the{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 underline hover:text-purple-100 transition-colors"
                >
                  Vercel Privacy Policy
                </a>
                .
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-medium text-purple-100">5. Cookies & Tracking</h2>
              <p>
                This portfolio does not use invasive tracking cookies, advertising trackers, or third-party behavioral profiling scripts.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-medium text-purple-100">6. Data Rights & Contact</h2>
              <p>
                You have the right to request the deletion or modification of any past correspondence or email addresses stored in my direct contact records. If you have questions regarding this privacy policy, feel free to reach out via the contact section on the homepage.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}