export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center justify-center overflow-hidden bg-primary-container">
        <div className="relative z-10 text-center px-margin-mobile md:px-0">
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.4em] mb-4">The Discerning Guardian</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">The OPV Ecosystem</h1>
          <p className="max-w-2xl mx-auto font-body-lg text-on-surface-variant opacity-80">A curated tapestry of uncompromising services designed for the global elite. From subterranean vaults to high-altitude sanctuaries, every detail is managed with silent precision.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-margin-desktop max-w-container-max mx-auto py-section-gap bg-primary-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter gap-y-24">
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop" alt="Luxury Stays" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Luxury Stays</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Unparalleled access to the world&apos;s most private estates and villas, where privacy is the ultimate amenity.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/luxury-stays">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85&auto=format&fit=crop" alt="Private Dining" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Private Dining</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Culinary masterpieces prepared in total seclusion by Michelin-starred masters.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/private-dining">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop" alt="Events" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Events &amp; Experiences</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Access to the inaccessible. From private gallery openings to closed-set performances.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/events-experiences">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85&auto=format&fit=crop" alt="Wine Tasting" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Wine Tasting</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Sommelier-led journeys through the world&apos;s most guarded vintages. Private access to chateaus and cellar collections.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/wine-tasting">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=85&auto=format&fit=crop" alt="Yacht Services" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Yacht Services</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Global maritime coordination for the most sophisticated vessels afloat. Port logistics, provisioning, and crew management.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/yacht-services">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=85&auto=format&fit=crop" alt="VIP Security" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">VIP &amp; Celebrity Security</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Invisible yet impenetrable protection. Former special forces operating with absolute discretion and tactical superiority.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/vip-security">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85&auto=format&fit=crop" alt="Luxury Cars" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Luxury Car Rentals</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">A fleet of the world&apos;s most sought-after automobiles, from limited-edition hypercars to classic restorations.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/car-rentals">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85&auto=format&fit=crop" alt="Photography" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Videography &amp; Photography</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Documenting your legacy with world-class visual artists. Private event coverage and heritage films.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/videography-photography">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85&auto=format&fit=crop" alt="Personal Shopping" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Personal Shopping</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Sourcing the impossible. Whether it&apos;s haute couture or an off-market masterpiece, our global network finds what others cannot.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/personal-shopping">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85&auto=format&fit=crop" alt="Private Tours" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Private Tours</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Expert-led expeditions into the world&apos;s most significant cultural and natural landmarks, removed from public constraints.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/private-tours">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85&auto=format&fit=crop" alt="Cleaning Lifestyle" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Cleaning &amp; Lifestyle</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">The silent restoration of your environment. Discreet, expert management of your residences to exacting standards.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/cleaning-lifestyle">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85&auto=format&fit=crop" alt="Luxury Products" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Luxury Products</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Direct access to the OPV Private Reserve—a collection of manufactured and sourced assets exclusive to our membership base.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/luxury-products">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Promise Section */}
      <section className="bg-primary-container py-section-gap px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 border-secondary w-12 h-12 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary mx-auto mb-8">OPV</div>
          <h2 className="font-display-lg text-headline-md md:text-headline-md text-on-surface mb-8">The OPV Verification Promise</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
              <p className="font-label-caps text-secondary uppercase tracking-widest text-[10px]">Tier 1: Provenance</p>
              <p className="font-body-md text-on-surface-variant">Every service provider undergoes a 12-month vetting process verifying financial stability and security clearance.</p>
            </div>
            <div className="space-y-4">
              <p className="font-label-caps text-secondary uppercase tracking-widest text-[10px]">Tier 2: Performance</p>
              <p className="font-body-md text-on-surface-variant">We employ anonymous &apos;Secret Guardians&apos; to test service quality and discretion under high-pressure scenarios.</p>
            </div>
            <div className="space-y-4">
              <p className="font-label-caps text-secondary uppercase tracking-widest text-[10px]">Tier 3: Protection</p>
              <p className="font-body-md text-on-surface-variant">Legal and physical indemnity frameworks are established for every transaction to ensure absolute client anonymity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="relative py-section-gap px-margin-desktop bg-primary-container overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-secondary mb-8">The Vault Awaits</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mb-12">Our concierge team is available 24/7 across every time zone to facilitate your next acquisition or journey.</p>
          <a href="/concierge" className="px-12 py-5 bg-secondary text-primary-container font-label-caps text-label-caps uppercase tracking-[0.3em] font-bold hover:px-16 transition-all duration-500 ease-in-out active:scale-95 inline-block">Initiate Request</a>
        </div>
      </section>
    </>
  );
}
