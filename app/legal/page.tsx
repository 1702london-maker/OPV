export default function LegalPage() {
  return (
    <section className="min-h-screen bg-[#f9f9f9] pt-40 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-3xl mx-auto">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Legal</span>
        <h1 className="font-display-lg text-headline-md text-[#0b1221] mb-12">Legal Information</h1>
        <div className="space-y-4">
          {[["Terms & Conditions", "/legal/terms"], ["Privacy Policy", "/legal/privacy"], ["Verification Policy", "/legal/verification"], ["Cancellation & Refund Policy", "/legal/cancellation"], ["Cookie Policy", "/legal/cookies"]].map(([label, href]) => (
            <a key={href} href={href} className="flex items-center justify-between border border-[#dbdad9] p-6 hover:border-secondary transition-colors group">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-[#0b1221]">{label}</span>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
