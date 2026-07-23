export default function CleaningLifestylePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container/90 to-primary-container/70"></div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-label-caps text-secondary tracking-widest">Lifestyle & Cleaning</span>
              <div className="h-[1px] w-12 bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              Immaculate Living,<br /><span className="italic font-normal">Without Compromise.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg">
              OPV&apos;s household services bring elite, DBS-cleared professionals directly to your residence. Every detail handled. Every surface perfected.
            </p>
            <div className="pt-8">
              <a className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity" href="#services">View Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container" id="services">
        <div className="mb-16">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Our Services</h2>
          <p className="text-on-surface-variant font-body-md">Curated household and lifestyle management for discerning principals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "One-Off Deep Clean",
              desc: "Comprehensive top-to-bottom deep clean including silk fabric steam treatment, marble care, and bespoke surface detailing.",
              icon: "cleaning_services",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxPj2Gr2p4NiP0sJU8pWoY3-WfSIW1TkMgYlJN_CKcGJPYTfBq7HfVJm4nkbNhIZGVMCeKXtZMm9kI6YVNq",
            },
            {
              title: "Recurring Housekeeping",
              desc: "Scheduled professional housekeeping on a daily, weekly, or fortnightly basis. Dedicated teams, consistent standards.",
              icon: "home",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGy09kVn0AcJDDHKDZxF_C1QEFBWKITvkwbM9dDPw6aajxnQu",
            },
            {
              title: "Garment Care & Laundry",
              desc: "Expert laundering, dry cleaning, and wardrobe management. We handle couture, cashmere, and leather with specialist precision.",
              icon: "dry_cleaning",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyN1YxjwV7Pu_HmiRa6kCx5U3se42d_eQ7xShiskE9gW3lcDvejgZYkHQg9syelcIMaAXghj71kqOLNedpC7lDD01C4Bgc2xu0XSpSBzP0K",
            },
            {
              title: "Property Turnover",
              desc: "Full property preparation between tenancies or guest visits. Hotel-grade turnover for private residences and investment properties.",
              icon: "apartment",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHo8avzFcqvhd5Y8zY6LvGu6M2tp6PMXJFH1V2ZFFOEjax0XcX8-NqYob5di19rqww78HEWfAu30Fr0p2IuOa66oNzicUhvS7NNlTncwER5g_I2gLq_3KqsqEnIMTuGBSn7JsAEu9uL1_8EUk1jLZpTdJwyR_TRI5aOTqKftUZxU_VJvX6iZOJe9tug1TLyKK3_qWEEacMkstwdaZzPQH5-yVkZBUrxHu8vku6S-1mcn_jxTNMiIPG9Q",
            },
            {
              title: "Ironing & Laundry",
              desc: "Precision ironing and pressing for formal wardrobes, fine linens, and bespoke garments. Collection and delivery included.",
              icon: "iron",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxmJtzrqzEzJSWc5tA-Oz3kJbC_0n3YG-je96DQKOEME80f9A-Cd26CIeS8jKyvw8AXofPRhEjQgroZ7O432R7-sqaOQsEj66UMY0ZZVjGzWv_cA_5hDdCs6Gol1KC1xZfWu4G6gL1woOrkzja2irvyD4nfFznz92gwNWvkiilQdwOEVrRVfNJ-V_7M-iXDrkvxGqp79Ob6jexVg1mYPmMW0g9BzWplLzCnH5BqcowFYhoUJJPL_IsdA",
            },
            {
              title: "OPV Smart Integration",
              desc: "Fully managed household operations: scheduling, restocking, staff coordination, and smart home management through your OPV guardian.",
              icon: "hub",
              bg: "bg-secondary",
              dark: true,
            },
          ].map(({ title, desc, icon, img, bg, dark }) => (
            <div key={title} className={`group relative overflow-hidden border border-outline-variant/10 hover:border-secondary/40 transition-all duration-500 ${bg || "bg-primary-container"}`}>
              {img && (
                <div className="relative h-52 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
                  <div className="absolute inset-0 bg-primary-container/20"></div>
                </div>
              )}
              <div className="p-8">
                <span className={`material-symbols-outlined text-3xl mb-4 block ${dark ? "text-primary-container" : "text-secondary"}`}>{icon}</span>
                <h3 className={`font-headline-sm mb-3 ${dark ? "text-primary-container" : "text-on-surface"}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${dark ? "text-primary-container/80" : "text-on-surface-variant"}`}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verification */}
      <section className="py-section-gap bg-primary-container border-y border-outline-variant/10">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-4">The Standard of Trust</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Every operative in our household services network passes the most stringent verification process in the UK private services industry.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "verified_user", title: "DBS Cleared", desc: "Enhanced Disclosure & Barring Service checks on every operative." },
              { icon: "security", title: "Fully Insured", desc: "£5M public liability insurance per operative." },
              { icon: "workspace_premium", title: "OPV Vetted", desc: "Our own 12-point verification process beyond standard checks." },
              { icon: "lock", title: "Strict NDA", desc: "All operatives sign comprehensive confidentiality agreements." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="space-y-4">
                <span className="material-symbols-outlined text-secondary text-4xl">{icon}</span>
                <h3 className="font-label-caps text-on-surface">{title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-gap px-margin-desktop max-w-3xl mx-auto bg-primary-container">
        <h2 className="font-display-lg text-headline-md text-on-surface mb-12 text-center">Common Questions</h2>
        <div className="space-y-6">
          {[
            { q: "How are cleaning teams selected?", a: "All operatives go through our multi-stage verification including DBS Enhanced checks, reference verification, skills assessment, and a trial placement before being admitted to the OPV network." },
            { q: "Can I request a regular assigned team?", a: "Yes. We strongly encourage dedicated team assignments for recurring clients. Your preference is noted and the same professionals attend each appointment where possible." },
            { q: "Are specialty materials handled differently?", a: "Absolutely. We maintain specialists in natural stone, antique furniture, couture textiles, and smart home systems. Please specify your needs when booking." },
            { q: "What is the minimum booking?", a: "Standard bookings begin at 3 hours. Estate management and full-property turnovers are priced on scope. Contact our concierge for a tailored assessment." },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-outline-variant/20 pb-6">
              <h3 className="font-label-caps text-on-surface mb-3">{q}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Book a Service</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Our household concierge team will arrange your first appointment within 24 hours of inquiry.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">ARRANGE SERVICE</a>
        </div>
      </section>
    </>
  );
}
