"use client";
export default function PersonalShoppingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=85&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/40 to-primary-container"></div>
        </div>
        <div className="relative z-10 px-margin-desktop pb-section-gap max-w-container-max mx-auto w-full">
          <div className="max-w-3xl space-y-6">
            <span className="font-label-caps text-secondary mb-4 block">Bespoke Acquisition</span>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              Your Wants, Sourced.<br /><span className="italic font-normal">Your Time, Protected.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              The Opulent Vault Personal Shopping service transcends traditional retail. We provide a silent, high-performance gateway to the world&apos;s most elusive assets, from limited-edition horology to archival couture.
            </p>
          </div>
        </div>
      </section>

      {/* Service Intro */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-headline-md text-headline-md mb-8 text-on-surface">Beyond the Boutique</h2>
            <div className="space-y-6 text-on-surface-variant font-body-lg">
              <p>Our shoppers are more than stylists; they are curators of lifestyle and guardians of taste. Each request is handled with absolute discretion, leveraging deep-rooted relationships within the primary and secondary luxury markets.</p>
              <p>Whether it is securing a &quot;Sold Out&quot; piece from a Paris runway or navigating the complexities of an off-market private sale, OPV ensures the transition from desire to possession is seamless and invisible.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-primary-container overflow-hidden">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=85&auto=format&fit=crop" alt="Luxury watch" />
            </div>
            <div className="aspect-[3/4] bg-primary-container overflow-hidden mt-8">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=85&auto=format&fit=crop" alt="Leather goods" />
            </div>
          </div>
        </div>
      </section>

      {/* Curators */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-caps text-secondary block mb-2">Expertise</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Your Dedicated Curators</h2>
            </div>
            <button className="border border-on-surface-variant/30 px-8 py-3 font-label-caps text-on-surface hover:border-secondary transition-colors hidden md:block">View All Curators</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                name: "Elena Moretti",
                specialty: "Haute Couture & Heritage Jewelry",
                bio: "Former Senior Buyer at LVMH. 15 years specializing in European archival sourcing and private jewelry auctions.",
                credential: "LVMH Group Alumna",
                img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=85&auto=format&fit=crop",
              },
              {
                name: "Julian Thorne",
                specialty: "Horology & Bespoke Tailoring",
                bio: "Expert in rare watch complications and Savile Row heritage. Previously headed VIP relations for a Swiss Manufacture.",
                credential: "Certified Gemologist",
                img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=85&auto=format&fit=crop",
              },
              {
                name: "Sofia Zhang",
                specialty: "Emerging Luxury & Tech-Fashion",
                bio: "Specialist in limited-edition drops and sustainable luxury innovation. Deep connections within the Tokyo and Milan markets.",
                credential: "Global Fashion Institute Merit",
                img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=85&auto=format&fit=crop",
              },
            ].map(({ name, specialty, bio, credential, img }) => (
              <div key={name} className="bg-primary-container border border-outline-variant/20 group hover:border-secondary/40 transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={img} alt={name} />
                  <div className="absolute top-4 right-4 bg-primary-container/80 backdrop-blur px-2 py-1 text-[8px] font-bold text-secondary font-label-caps">OPV</div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-sm text-on-surface mb-1">{name}</h3>
                  <p className="font-label-caps text-secondary text-[10px] mb-4">{specialty}</p>
                  <p className="font-body-md text-on-surface-variant text-sm mb-6">{bio}</p>
                  <div className="h-px w-full bg-outline-variant/20 mb-6"></div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">workspace_premium</span>
                    <span className="font-label-caps text-on-surface-variant text-[10px]">{credential}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Request Form */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-4xl mx-auto border border-outline-variant/20 p-12 md:p-20">
          <h2 className="font-headline-md text-headline-md mb-4 text-on-surface text-center">Acquisition Request</h2>
          <p className="font-body-md text-on-surface-variant text-center mb-16">Outline your requirements. Our specialists will respond within four hours.</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <label className="font-label-caps text-[10px] text-secondary mb-2">Primary Interest</label>
              <select className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-on-surface focus:outline-none focus:border-secondary appearance-none">
                <option>Timepieces</option>
                <option>Couture &amp; Ready-to-wear</option>
                <option>Fine Jewelry</option>
                <option>Leather Goods</option>
                <option>Off-Market Rare Finds</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-label-caps text-[10px] text-secondary mb-2">Investment Range (USD)</label>
              <select className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-on-surface focus:outline-none focus:border-secondary appearance-none">
                <option>$10,000 - $50,000</option>
                <option>$50,000 - $250,000</option>
                <option>$250,000 - $1,000,000</option>
                <option>$1,000,000+</option>
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="font-label-caps text-[10px] text-secondary mb-2">Item Description &amp; Specifics</label>
              <textarea className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-on-surface focus:outline-none focus:border-secondary resize-none placeholder:text-on-surface/20" placeholder="Specify brand, model, year, or archival reference..." rows={3}></textarea>
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="font-label-caps text-[10px] text-secondary mb-2">Style References (Optional)</label>
              <input className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-on-surface focus:outline-none focus:border-secondary placeholder:text-on-surface/20" placeholder="Upload moodboard links or specific aesthetic preferences" type="text" />
            </div>
            <div className="md:col-span-2 pt-8 flex justify-center">
              <button className="bg-secondary text-primary-container px-12 py-4 font-label-caps font-bold text-sm tracking-widest hover:opacity-90 transition-all" type="submit">Initiate Sourcing</button>
            </div>
          </form>
        </div>
      </section>

      {/* Private Sourcing */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-gutter">
          <div className="md:w-1/3 space-y-6">
            <h2 className="font-headline-md text-headline-md text-on-surface">Private Sourcing</h2>
            <p className="font-body-lg text-on-surface-variant">Access the inaccessible. Our &apos;Under-the-Radar&apos; network connects members directly to private collectors and off-market inventory globally.</p>
            <ul className="space-y-4">
              {["Pre-auction private sales acquisition", "Whitelisted access to limited collaborations", "Authentication & Appraisal by OPV Verified experts"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-body-md text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-gutter">
            <div className="group relative overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=85&auto=format&fit=crop')" }}></div>
              <div className="absolute inset-0 bg-primary-container/40 group-hover:bg-primary-container/20 transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                <span className="font-label-caps text-secondary text-xs">Recently Sourced</span>
                <p className="font-headline-sm text-on-surface">1965 Vintage Grand Tourer</p>
              </div>
            </div>
            <div className="group relative overflow-hidden aspect-square mt-12">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=85&auto=format&fit=crop')" }}></div>
              <div className="absolute inset-0 bg-primary-container/40 group-hover:bg-primary-container/20 transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                <span className="font-label-caps text-secondary text-xs">Private Sale</span>
                <p className="font-headline-sm text-on-surface">The &apos;Azure&apos; Heritage Suite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Commission Your Personal Curator</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">A dedicated OPV curator will be assigned to your account within 24 hours of submission. Fully confidential.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">BEGIN ACQUISITION</a>
        </div>
      </section>
    </>
  );
}
