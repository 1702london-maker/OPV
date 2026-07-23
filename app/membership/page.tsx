export default function MembershipPage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-primary-container pt-32 pb-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-6 block">The Inner Circle</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface mb-8">Membership</h1>
          <p className="font-body-lg text-on-surface-variant mb-16 max-w-2xl mx-auto">Entrance to Opulent Vault is by invitation or application only. Select your level of engagement with the exceptional.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { tier: "Standard", sub: "Gateway Access", features: ["Access to verified marketplace", "Standard booking assistance", "Digital membership card"] },
              { tier: "Black", sub: "Enhanced Privilege", features: ["Dedicated concierge manager", "Priority event access", "VIP & Celebrity security included", "Complimentary upgrades"], featured: true },
              { tier: "Vault", sub: "Total Custodianship", features: ["Unlimited global bespoke planning", "Access to off-market properties", "Private jet & yacht allocation", "Family legacy management"] },
            ].map(({ tier, sub, features, featured }) => (
              <div key={tier} className={`bg-primary-container p-12 border transition-colors ${featured ? "border-secondary shadow-2xl scale-105 relative" : "border-outline-variant/20 hover:border-secondary/40"}`}>
                {featured && <div className="absolute top-0 right-0 bg-secondary text-primary-container px-6 py-2 font-label-caps text-[10px] uppercase tracking-widest font-bold">Most Prestigious</div>}
                <h4 className="font-display-lg text-headline-sm text-on-surface mb-2">{tier}</h4>
                <p className="font-label-caps text-secondary mb-10 uppercase tracking-widest text-sm">{sub}</p>
                <ul className="space-y-5 mb-14 text-on-surface-variant text-sm">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span>{f}</li>
                  ))}
                </ul>
                <button className={`w-full py-4 font-label-caps text-label-caps uppercase tracking-widest transition-all ${featured ? "bg-secondary text-primary-container hover:bg-white" : "border border-on-surface/20 text-on-surface hover:bg-on-surface hover:text-primary-container"}`}>Apply Now</button>
              </div>
            ))}
          </div>
          <a href="/contact/" className="inline-flex items-center gap-3 text-secondary font-label-caps text-label-caps uppercase tracking-widest hover:text-white transition-colors">
            Enquire About Membership <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  );
}
