export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Product Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know How Users Feel About{" "}
          <span className="text-[#58a6ff]">Every Release</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Changelog Sentiment Analyzer connects to GitHub Releases and Notion, scrapes comments and reactions, then uses AI to surface what your users love — and what they hate.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Analyzing — $25/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited changelog sources</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI sentiment analysis via OpenAI</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> GitHub Releases + Notion integration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Interactive trend dashboards</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Weekly digest emails</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Which changelog platforms are supported?</h3>
            <p className="text-[#8b949e] text-sm">We currently support GitHub Releases and Notion pages. More integrations including Linear and Canny are on the roadmap.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How does the sentiment analysis work?</h3>
            <p className="text-[#8b949e] text-sm">We use the OpenAI API to classify each comment as positive, neutral, or negative, then aggregate scores per feature and release to show trends over time.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Is my data kept private?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Your API keys and comment data are encrypted at rest and never shared. You can delete your data at any time from the dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Changelog Sentiment Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
