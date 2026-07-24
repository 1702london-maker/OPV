"use client";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll("section > div").forEach((div) => {
      (div as HTMLElement).style.opacity = "0";
      observer.observe(div);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-container/40 z-10"></div>
          <div className="h-full w-full relative" id="hero-slider">
            <div
              className="absolute inset-0 transition-opacity duration-1000 opacity-100 hero-zoom bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop')" }}
            ></div>
          </div>
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block fade-in-up">The Discerning Guardian</span>
          <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface mb-8 fade-in-up">Access to the Exceptional.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 fade-in-up" style={{ animationDelay: "0.2s" }}>The UK&apos;s most trusted curated luxury lifestyle platform.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button className="bg-secondary text-primary-container px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-all duration-300">Explore Our Services</button>
            <button className="border border-on-surface/20 text-on-surface px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all duration-300 backdrop-blur-sm">Become a Partner</button>
          </div>
        </div>
      </section>

      {/* Section 2: Brand Statement — stays navy */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 border border-secondary/40 rounded-full flex items-center justify-center mx-auto mb-12">
            <span className="font-display-lg text-headline-sm text-secondary">OPV</span>
          </div>
          <h2 className="font-display-lg text-headline-md text-on-surface mb-8 leading-relaxed">
            We believe that true luxury is not found in the excess, but in the <span className="italic text-secondary">unrivalled precision</span> of the delivery. Every provider on our platform undergoes a rigorous 40-point verification protocol.
          </h2>
          <a className="inline-flex items-center gap-4 text-secondary font-label-caps text-label-caps uppercase tracking-[0.2em] group" href="/">
            The OPV Promise
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* Section 3: Service Grid — CREAM background */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Ecosystem</span>
              <h3 className="font-display-lg text-headline-md text-on-surface">Curated Categories</h3>
            </div>
            <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-caps text-label-caps uppercase tracking-widest border-b border-outline-variant/30 pb-1" href="/">View All 12</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Stays", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85&auto=format&fit=crop" },
              { label: "Dining", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop" },
              { label: "Events", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85&auto=format&fit=crop" },
              { label: "Wine", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=85&auto=format&fit=crop" },
              { label: "Cars", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=85&auto=format&fit=crop" },
              { label: "Security", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85&auto=format&fit=crop" },
              { label: "Yachts", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85&auto=format&fit=crop" },
              { label: "Shopping", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85&auto=format&fit=crop" },
            ].map(({ label, img }) => (
              <div key={label} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-high overflow-hidden relative mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${img}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h4 className="font-display-lg text-headline-sm text-on-surface">{label}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Exceptional Properties — stays navy */}
      <section className="py-section-gap overflow-hidden bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto mb-16">
          <h3 className="font-display-lg text-headline-md text-on-surface">Exceptional Properties</h3>
        </div>
        <div className="flex gap-8 px-margin-desktop overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="min-w-[400px] md:min-w-[800px] snap-center">
            <div className="relative aspect-video mb-8">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85&auto=format&fit=crop')" }}></div>
              <div className="absolute top-8 left-8 flex items-center gap-3 bg-primary-container/80 backdrop-blur-md px-4 py-2 border border-secondary/40">
                <div className="w-6 h-6 border border-secondary rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-secondary">OPV</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface uppercase">Verified Asset</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-display-lg text-headline-sm text-on-surface mb-2">The Glass Pavilion</h4>
                <p className="font-body-md text-on-surface-variant">Surrey, United Kingdom</p>
              </div>
              <span className="font-display-lg text-headline-sm text-secondary">£12,000 / night</span>
            </div>
          </div>
          <div className="min-w-[400px] md:min-w-[800px] snap-center">
            <div className="relative aspect-video mb-8">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85&auto=format&fit=crop')" }}></div>
              <div className="absolute top-8 left-8 flex items-center gap-3 bg-primary-container/80 backdrop-blur-md px-4 py-2 border border-secondary/40">
                <div className="w-6 h-6 border border-secondary rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-secondary">OPV</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface uppercase">Verified Asset</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-display-lg text-headline-sm text-on-surface mb-2">Chateau d&apos;Or</h4>
                <p className="font-body-md text-on-surface-variant">Provence, France</p>
              </div>
              <span className="font-display-lg text-headline-sm text-secondary">£18,500 / night</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Curated Experiences — CREAM background */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              tag: "Tasting",
              title: "Vertical Vintage Archive",
              desc: "A private exploration of 50 years of Bordeaux history in a secret Mayfair cellar.",
              img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85&auto=format&fit=crop",
            },
            {
              tag: "Dining",
              title: "Chef's Table: Obsidian",
              desc: "A sensory 12-course narrative served in total darkness for only four guests.",
              img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop",
            },
            {
              tag: "Tours",
              title: "The Highlands Pursuit",
              desc: "Three days of precision driving through the Scottish Highlands with professional support.",
              img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85&auto=format&fit=crop",
            },
          ].map(({ tag, title, desc, img }) => (
            <div key={title} className="flex flex-col">
              <div className="aspect-square bg-surface-container-high mb-8 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${img}')` }}></div>
              </div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4">{tag}</span>
              <h4 className="font-display-lg text-headline-sm mb-4 text-on-surface">{title}</h4>
              <p className="font-body-md text-on-surface-variant mb-6">{desc}</p>
              <a className="mt-auto font-label-caps text-label-caps uppercase tracking-widest text-secondary hover:text-on-surface transition-colors" href="/">Enquire</a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Editorial Pillars — stays navy */}
      <section className="py-section-gap px-margin-desktop bg-primary-container border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[3/4] bg-surface-container-high">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop')" }}></div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-surface-container-low border border-secondary/20 p-8 hidden md:block">
              <p className="font-display-lg text-headline-sm italic text-secondary mb-4">&ldquo;The details are not the details. They make the design.&rdquo;</p>
              <span className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">Opulent Vault Philosophy</span>
            </div>
          </div>
          <div>
            <h3 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface mb-12">The Guardian Standard</h3>
            <div className="space-y-12">
              <div className="flex gap-8">
                <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div>
                  <h5 className="font-headline-sm text-on-surface mb-2">Unwavering Verification</h5>
                  <p className="font-body-md text-on-surface-variant">We personally audit every property, vehicle, and service provider through a 40-point integrity check.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                <div>
                  <h5 className="font-headline-sm text-on-surface mb-2">Absolute Privacy</h5>
                  <p className="font-body-md text-on-surface-variant">Non-disclosure is our baseline. Our encrypted ecosystem ensures your movements remain your own.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <div>
                  <h5 className="font-headline-sm text-on-surface mb-2">Meticulous Curation</h5>
                  <p className="font-body-md text-on-surface-variant">We reject 92% of applicants. Only the top 8% of luxury providers meet the Vault standard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Membership Tiers — CREAM background */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-24">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">The Inner Circle</span>
            <h3 className="font-display-lg text-headline-md mb-4 text-on-surface">Membership Tiers</h3>
            <p className="max-w-2xl mx-auto text-on-surface-variant">Entrance to Opulent Vault is by invitation or application only. Select your level of engagement with the exceptional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-container p-12 border border-outline-variant/20 hover:border-secondary/40 transition-colors group">
              <h4 className="font-display-lg text-headline-sm text-on-surface mb-2">Standard</h4>
              <p className="font-label-caps text-secondary mb-12 uppercase tracking-widest">Gateway Access</p>
              <ul className="space-y-6 mb-16 text-on-surface-variant">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Access to verified marketplace</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Standard booking assistance</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Digital membership card</li>
              </ul>
              <button className="w-full border border-on-surface/20 py-4 font-label-caps text-label-caps uppercase tracking-widest text-on-surface group-hover:bg-on-surface group-hover:text-primary-container transition-all">Apply Now</button>
            </div>
            <div className="bg-primary-container p-12 border border-secondary relative overflow-hidden transform scale-105 z-10 shadow-2xl">
              <div className="absolute top-0 right-0 bg-secondary text-primary-container px-6 py-2 font-label-caps text-[10px] uppercase tracking-widest font-bold">Most Prestigious</div>
              <h4 className="font-display-lg text-headline-sm text-on-surface mb-2">Black</h4>
              <p className="font-label-caps text-secondary mb-12 uppercase tracking-widest">Enhanced Privilege</p>
              <ul className="space-y-6 mb-16 text-on-surface-variant">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Dedicated concierge manager</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Priority event access</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> VIP &amp; Celebrity security included</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Complimentary upgrades</li>
              </ul>
              <button className="w-full bg-secondary text-primary-container py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-all">Apply Now</button>
            </div>
            <div className="bg-primary-container p-12 border border-outline-variant/20 hover:border-secondary/40 transition-colors group">
              <h4 className="font-display-lg text-headline-sm text-on-surface mb-2">Vault</h4>
              <p className="font-label-caps text-secondary mb-12 uppercase tracking-widest">Total Custodianship</p>
              <ul className="space-y-6 mb-16 text-on-surface-variant">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Unlimited global bespoke planning</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Access to off-market properties</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Private jet &amp; yacht allocation</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-secondary">check</span> Family legacy management</li>
              </ul>
              <button className="w-full border border-on-surface/20 py-4 font-label-caps text-label-caps uppercase tracking-widest text-on-surface group-hover:bg-on-surface group-hover:text-primary-container transition-all">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Partner Invitation — stays navy */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto border border-secondary/20 p-24 text-center">
          <h3 className="font-display-lg text-headline-md text-on-surface mb-8">OPV Is Not Open to All.</h3>
          <p className="max-w-2xl mx-auto mb-12 text-on-surface-variant leading-relaxed">We are currently accepting applications for new service partners who share our commitment to absolute excellence. If you are the gold standard in your field, we invite you to start the verification process.</p>
          <button className="bg-transparent border border-secondary text-secondary px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary hover:text-primary-container transition-all">Request Partner Audit</button>
        </div>
      </section>

      {/* Section 9: Concierge CTA */}
      <section
        className="h-[614px] relative flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-primary-container/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-margin-desktop">
          <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8">Your Private Guardian Awaits.</h3>
          <p className="font-body-lg text-on-surface-variant mb-12">Immediate bespoke requests for members only.</p>
          <button className="bg-secondary text-primary-container px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]">Enter the Vault</button>
        </div>
      </section>

      {/* Section 10: Blog Preview — CREAM background */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Journal</span>
              <h3 className="font-display-lg text-headline-md text-on-surface">The Vault Review</h3>
            </div>
            <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-caps text-label-caps uppercase tracking-widest border-b border-outline-variant/30 pb-1" href="/">Read All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: "Horology",
                title: "The 2024 Silent Auction: Rare Timepieces of Note",
                desc: "A look inside the private rooms of the year's most anticipated horological event.",
                img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=85&auto=format&fit=crop",
              },
              {
                tag: "Travel",
                title: "Beyond Courchevel: The New Alpine Frontiers",
                desc: "Where the elite are seeking privacy this winter season.",
                img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=85&auto=format&fit=crop",
              },
              {
                tag: "Intelligence",
                title: "The Future of Digital Privacy in Physical Spaces",
                desc: "How the Vault 4.0 protocol is redefining personal security for high-net-worth individuals.",
                img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85&auto=format&fit=crop",
              },
            ].map(({ tag, title, desc, img }) => (
              <article key={title} className="group cursor-pointer">
                <div className="aspect-video bg-surface-container-high mb-8 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${img}')` }}></div>
                </div>
                <span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest mb-4 block">{tag}</span>
                <h4 className="font-headline-sm mb-4 leading-tight text-on-surface">{title}</h4>
                <p className="font-body-md text-on-surface-variant line-clamp-2">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
