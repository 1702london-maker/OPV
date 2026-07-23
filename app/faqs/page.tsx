const FAQS = [
  { q: "How do I become a member?", a: "Membership is by invitation or application only. Visit our Membership page to apply for the tier that suits your needs. All applications are reviewed by our curation team." },
  { q: "What is the 40-point verification protocol?", a: "Every provider on the OPV platform undergoes a rigorous 40-point integrity check covering quality, privacy standards, service levels, insurance, and exclusivity before being listed." },
  { q: "How does the concierge service work?", a: "Once a member, you have access to a dedicated concierge manager (Black & Vault tiers) or standard booking assistance (Standard tier). Submit requests via the AI Concierge widget or contact page." },
  { q: "Can I book services without a membership?", a: "Some services are accessible to enquirers, however full platform access, priority booking, and exclusive rates require an active membership." },
  { q: "Is my data kept private?", a: "Absolute privacy is our baseline. Non-disclosure underpins every relationship. Our encrypted ecosystem ensures your movements and personal data remain entirely your own." },
  { q: "How do I become a partner or supplier?", a: "We accept applications from providers who meet our standards of excellence. Visit the Partners section to begin the verification process. We reject approximately 92% of applicants." },
  { q: "What areas do you cover?", a: "We operate primarily across the UK and Europe, with global reach for aviation, yacht, and bespoke travel requests through our Vault tier membership." },
  { q: "How do I contact the team?", a: "You can reach us via the Contact page, through the AI Concierge widget, or by emailing us directly. Black and Vault members have a dedicated concierge manager on call." },
];

export default function FaqsPage() {
  return (
    <section className="min-h-screen bg-[#f9f9f9] pt-40 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Support</span>
          <h1 className="font-display-lg text-headline-md text-[#0b1221] mb-4">Frequently Asked Questions</h1>
          <p className="font-body-lg text-[#575e71]">Everything you need to know about Opulent Vault.</p>
        </div>
        <div className="space-y-0">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group border-b border-[#dbdad9] py-6">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="font-headline-sm text-[#0b1221] pr-8">{q}</h3>
                <span className="material-symbols-outlined text-secondary shrink-0 transition-transform group-open:rotate-45">add</span>
              </summary>
              <p className="font-body-md text-[#575e71] mt-4 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-16 bg-primary-container p-12 text-center">
          <h3 className="font-display-lg text-headline-sm text-on-surface mb-4">Still have questions?</h3>
          <p className="font-body-md text-on-surface-variant mb-8">Our team is ready to assist with any enquiry.</p>
          <a href="/contact/" className="bg-secondary text-primary-container px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors inline-block">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
