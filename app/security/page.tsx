import AIConciergeSection from "@/components/AIConciergeSection";

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <img className="w-full h-full object-cover grayscale brightness-75" src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1400&q=85&auto=format&fit=crop" alt="Executive Protection" data-placeholder="true" />
        </div>
        <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl space-y-6">
            <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.3em] uppercase block">Elite Security Division</span>
            <h1 className="font-serif text-headline-lg text-white leading-tight">Uncompromising Safety,<br />Absolute Discretion.</h1>
            <p className="font-sans text-body-lg text-surface-variant/80 max-w-lg">Bespoke protection strategies for the world&apos;s most discerning individuals. Our elite teams operate with surgical precision and invisible presence.</p>
            <div className="pt-8 flex gap-4">
              <a className="bg-surface-container-low text-primary px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary-fixed transition-all" href="#request">Consult a Strategist</a>
              <a className="border border-white/30 text-white px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container-low/10 transition-all" href="#services">View Capabilities</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="services">
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-4">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">The Pillars of Protection</span>
          <h2 className="font-serif text-headline-md text-primary">Comprehensive Elite Security Solutions</h2>
          <div className="w-12 h-px bg-secondary mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 group overflow-hidden relative aspect-[16/9]">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85&auto=format&fit=crop" alt="Executive Protection" data-placeholder="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="font-serif text-headline-md text-white mb-2">Executive Protection</h3>
              <p className="font-sans text-body-md text-white/80 max-w-md mb-6">Personal bodyguards and celebrity protection for high-profile assets requiring constant vigilance without intrusion.</p>
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest border-b border-secondary-fixed/30 pb-2 w-fit">Learn More</span>
            </div>
          </div>
          <div className="md:col-span-4 group overflow-hidden relative aspect-[4/5]">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85&auto=format&fit=crop" alt="Travel Security" data-placeholder="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-serif text-headline-md text-white mb-2">Travel Security</h3>
              <p className="font-sans text-body-md text-white/80 mb-6">International logistics, secure escorts, and global risk assessment for seamless cross-border mobility.</p>
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest border-b border-secondary-fixed/30 pb-2 w-fit">Global Operations</span>
            </div>
          </div>
          <div className="md:col-span-4 group overflow-hidden relative aspect-[4/5]">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1400&q=85&auto=format&fit=crop" alt="Residential Security" data-placeholder="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-serif text-headline-md text-white mb-2">Residential Security</h3>
              <p className="font-sans text-body-md text-white/80 mb-6">24/7 villa and estate protection utilising advanced surveillance and physical presence.</p>
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest border-b border-secondary-fixed/30 pb-2 w-fit">Estate Shield</span>
            </div>
          </div>
          <div className="md:col-span-8 group overflow-hidden relative aspect-[16/9]">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85&auto=format&fit=crop" alt="Event Security" data-placeholder="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="font-serif text-headline-md text-white mb-2">Event Security</h3>
              <p className="font-sans text-body-md text-white/80 max-w-md mb-6">Specialised VIP management for private galas, corporate summits, and high-net-worth gatherings.</p>
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest border-b border-secondary-fixed/30 pb-2 w-fit">Event Protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* Female Specialists */}
      <section className="bg-surface-container py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img className="w-full h-[600px] object-cover grayscale" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85&auto=format&fit=crop" alt="Female Security Specialist" data-placeholder="true" />
          </div>
          <div className="space-y-8">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">The Opulent Vault Distinction</span>
            <h2 className="font-serif text-headline-lg text-primary">Female Security Specialists</h2>
            <p className="font-sans text-body-lg text-on-surface-variant">For situations requiring a more subtle presence, specialised family protection, or cultural sensitivity, our elite female security personnel offer a unique combination of high-tier tactical training and soft-skills excellence.</p>
            <ul className="space-y-4 font-sans text-on-surface-variant">
              {["Discreet Family & Nanny Protection", "International High-Stakes Travel Escorts", "Understated Presence in Social Environments"].map((item) => (
                <li key={item} className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-primary text-on-primary px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-all">Request Specialist Profile</button>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="request">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-headline-md text-primary">Initiate Deployment Protocol</h2>
            <p className="font-sans text-body-lg text-on-surface-variant">Security is not a commodity; it is a personalised architecture of safety. Share your requirements, and our senior strategists will contact you within 60 minutes.</p>
            <div className="space-y-6 pt-6">
              {[
                { icon: "verified_user", title: "Confidentiality Assured", desc: "All communications are encrypted and strictly confidential." },
                { icon: "public", title: "Global Response", desc: "Capabilities for deployment in over 120 countries within 24 hours." },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-primary mb-1">{item.title}</h4>
                    <p className="font-sans text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 bg-surface-container-low p-12 border border-outline-variant/30">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Principal Name</label>
                  <input className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans" placeholder="Full Legal Name" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Contact Method</label>
                  <input className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans" placeholder="Secure Email or Phone" type="email" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Required Service</label>
                <select className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans bg-transparent appearance-none">
                  <option>Executive Protection</option>
                  <option>International Travel Escort</option>
                  <option>Residential Security</option>
                  <option>Event Security VIP</option>
                  <option>Female Specialist Team</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Briefing Details</label>
                <textarea className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans resize-none" placeholder="Primary risks, location, and dates..." rows={4} />
              </div>
              <button className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-secondary transition-all" type="submit">Submit Secure Request</button>
            </form>
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}