export default function CarRentalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqjWHFBpRMGc5Q8wLvXfVE6Bq0kJ_bVRJxSlbf4m9YhS7Bz4BxvXA3dBfWgZiVPLkRpOa3kQ1K6X_qKl5DPBjcBjHr0yTfN5KCExZlNe_zs1x0j3kMilY1U7gRPFPP3cMHQPyPFJHMOoVFbP5rPEyuYwJY84mJO3Xm3iMV77MJerLjGm5uJzL2Y3kzR-y2G7pKuSMNfovJSE4K2y3p6JHfH0ZRGKLXGh5P_aGUFqm4L4eRVZfplA')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/60 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-label-caps text-secondary tracking-widest">Luxury Car Rentals</span>
              <div className="h-[1px] w-12 bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              Drive Without<br /><span className="italic font-normal">Compromise.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg">
              Access the world&apos;s most coveted automobiles — from hand-built hypercars to armoured executive saloons — with complete discretion and OPV-verified delivery.
            </p>
            <div className="pt-8 flex gap-4">
              <a className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity" href="#fleet">Browse Fleet</a>
              <a className="border border-secondary text-secondary px-10 py-4 font-label-caps inline-block hover:bg-secondary hover:text-primary-container transition-all" href="/concierge">Bespoke Request</a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-primary-container py-8 border-b border-outline-variant/20">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-wrap gap-6 items-end">
            <div className="flex flex-col gap-1">
              <label className="font-label-caps text-[10px] text-secondary">Vehicle Type</label>
              <select className="bg-transparent border-b border-outline-variant/50 py-2 text-on-surface text-sm focus:outline-none focus:border-secondary appearance-none pr-6">
                <option>All Classes</option>
                <option>Supercars</option>
                <option>Luxury SUVs</option>
                <option>Vintage Classics</option>
                <option>Executive Sedans</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-caps text-[10px] text-secondary">Brand</label>
              <select className="bg-transparent border-b border-outline-variant/50 py-2 text-on-surface text-sm focus:outline-none focus:border-secondary appearance-none pr-6">
                <option>All Brands</option>
                <option>Bentley</option>
                <option>Ferrari</option>
                <option>Rolls-Royce</option>
                <option>Lamborghini</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-caps text-[10px] text-secondary">Availability</label>
              <input type="date" className="bg-transparent border-b border-outline-variant/50 py-2 text-on-surface text-sm focus:outline-none focus:border-secondary" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-caps text-[10px] text-secondary">Driver Option</label>
              <select className="bg-transparent border-b border-outline-variant/50 py-2 text-on-surface text-sm focus:outline-none focus:border-secondary appearance-none pr-6">
                <option>All Options</option>
                <option>Self-Drive</option>
                <option>Chauffeur Only</option>
                <option>Both Available</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container" id="fleet">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display-lg text-headline-md text-on-surface">Current Fleet</h2>
            <p className="text-on-surface-variant font-body-md mt-2">Every vehicle delivered to your location, fully insured.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              name: "Bentley Continental GT Mulliner W12",
              price: "£1,450/day",
              driver: "Self-Drive + Chauffeur",
              accel: "0-60: 3.5sec",
              engine: "6.0L W12",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqjWHFBpRMGc5Q8wLvXfVE6Bq0kJ_bVRJxSlbf4m9YhS7Bz4BxvXA3dBfWgZiVPLkRpOa3kQ1K6X_qKl5DPBjcBjHr0yTfN5KCExZlNe_zs1x0j3kMilY1U7gRPFPP3cMHQPyPFJHMOoVFbP5rPEyuYwJY84mJO3Xm3iMV77MJerLjGm5uJzL2Y3kzR-y2G7pKuSMNfovJSE4K2y3p6JHfH0ZRGKLXGh5P_aGUFqm4L4eRVZfplA",
            },
            {
              name: "Ferrari 812 Superfast V12",
              price: "£2,200/day",
              driver: "Self-Drive Only",
              accel: "0-60: 2.9sec",
              engine: "6.5L V12",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrEQnSKVOSKv3C1G0Ps-7X2PmJBaaTk8j2FxKGGv9V9hZ-a4gqf2FhV0N4NQOQ4dKd3MiC3iHEO5cJGvqXjX0jzY2uAUFbBzJgHiJVqv_IrW3JVJx_g",
            },
            {
              name: "Rolls-Royce Cullinan Black Badge",
              price: "£2,800/day",
              driver: "Chauffeur Only",
              accel: "0-60: 4.5sec",
              engine: "6.75L V12",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpKxQ1vB_CqSNkKMnfDPJrSYjXE4nWaB7iA9mLT3BfAqJxB7iJpVFahnWaVPH0kHkjHJB7OW9P-0MhGf2Ej0-PeBw",
            },
          ].map(({ name, price, driver, accel, engine, img }) => (
            <div key={name} className="group bg-primary-container border border-outline-variant/10 overflow-hidden hover:border-secondary/40 transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <div className="font-label-caps text-[10px] border border-secondary text-secondary bg-primary-container/90 px-3 py-1">OPV VERIFIED</div>
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
              </div>
              <div className="p-8">
                <h3 className="font-headline-sm text-on-surface mb-2">{name}</h3>
                <p className="text-secondary font-label-caps text-[10px] mb-6">{driver}</p>
                <div className="grid grid-cols-2 gap-4 mb-8 pt-4 border-t border-outline-variant/20">
                  <div>
                    <div className="text-[10px] uppercase text-on-surface-variant mb-1">Acceleration</div>
                    <div className="text-sm text-on-surface">{accel}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-on-surface-variant mb-1">Engine</div>
                    <div className="text-sm text-on-surface">{engine}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-caps font-bold text-on-surface">{price}</span>
                  <a href="/concierge" className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">
                    ENQUIRE <span className="material-symbols-outlined text-sm">east</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPV Standards */}
      <section className="py-section-gap bg-primary-container border-y border-outline-variant/10">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <h2 className="font-display-lg text-headline-md text-on-surface text-center mb-16">OPV Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { icon: "checklist", title: "200-Point Inspection", desc: "Every vehicle undergoes a rigorous pre-delivery inspection by our certified technicians before reaching you." },
              { icon: "description", title: "V5 & MOT Certified", desc: "Full documentation, valid MOT, and V5 logbook provided with every rental. Zero compliance ambiguity." },
              { icon: "security", title: "Luxury Fleet Insurance", desc: "Comprehensive coverage included. Our policy protects you and the vehicle for the full duration of your arrangement." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="space-y-4">
                <span className="material-symbols-outlined text-secondary text-4xl">{icon}</span>
                <h3 className="font-label-caps text-on-surface">{title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Commission a Bespoke Fleet</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Need a vehicle not listed? Our automotive specialists have access to the world&apos;s most exclusive marques. Submit a confidential request and we will source it within 48 hours.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">SUBMIT ENQUIRY</a>
        </div>
      </section>
    </>
  );
}
