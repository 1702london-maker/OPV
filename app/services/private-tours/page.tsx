export default function PrivateToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/60 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-label-caps text-secondary tracking-widest">Private Tours</span>
              <div className="h-[1px] w-12 bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              The World,<br /><span className="italic font-normal">Unlocked.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg">
              Curated private tours guided by master historians, ex-royal guards, and leading curators. Every itinerary designed around you — no groups, no compromise.
            </p>
            <div className="pt-8 flex gap-4">
              <a className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity" href="#tours">View Tours</a>
              <a className="border border-secondary text-secondary px-10 py-4 font-label-caps inline-block hover:bg-secondary hover:text-primary-container transition-all" href="/concierge">Bespoke Itinerary</a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Intro */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <span className="font-label-caps text-secondary tracking-widest">THE ART OF EXPLORATION</span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">Four Pillars of Private Discovery</h2>
            <p className="text-on-surface-variant leading-relaxed">Every OPV private tour is conducted exclusively for your party. Our guides hold genuine expertise — not tour certification. They are the foremost authorities in their domains.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["City & Cultural", "Heritage & History", "Countryside & Scenic", "Bespoke Itinerary"].map((cat) => (
              <div key={cat} className="bg-primary-container border border-outline-variant/10 p-8 hover:border-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">explore</span>
                <h3 className="font-label-caps text-on-surface text-sm">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Cards */}
      <section className="py-section-gap bg-primary-container" id="tours">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Signature Tours</h2>
            <p className="text-on-surface-variant">Hand-selected experiences for the most discerning travellers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                name: "The Renaissance Path",
                location: "Tuscany, Italy",
                price: "$2,450pp",
                duration: "8 Hours",
                capacity: "Up to 4",
                vehicle: "Rolls Royce Ghost",
                guide: "Master Historian",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85&auto=format&fit=crop",
              },
              {
                name: "Crown & Cloister",
                location: "London, United Kingdom",
                price: "$3,800pp",
                duration: "12 Hours",
                capacity: "Up to 2",
                vehicle: "Bentley Mulsanne",
                guide: "Ex-Royal Guard",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop",
              },
              {
                name: "Metropolis Echoes",
                location: "City of Choice",
                price: "$1,900pp",
                duration: "6 Hours",
                capacity: "Up to 6",
                vehicle: "Range Rover SV",
                guide: "Cultural Curator",
                img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85&auto=format&fit=crop",
              },
            ].map(({ name, location, price, duration, capacity, vehicle, guide, img }) => (
              <div key={name} className="group bg-primary-container border border-outline-variant/10 overflow-hidden hover:border-secondary/40 transition-all duration-500">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="font-label-caps text-[10px] border border-secondary text-secondary bg-primary-container/90 px-3 py-1">OPV VERIFIED</div>
                  </div>
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-sm text-on-surface mb-1">{name}</h3>
                  <p className="text-secondary font-label-caps text-[10px] mb-6">{location}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div><div className="text-[10px] text-on-surface-variant uppercase mb-1">Duration</div><div className="text-sm text-on-surface">{duration}</div></div>
                    <div><div className="text-[10px] text-on-surface-variant uppercase mb-1">Capacity</div><div className="text-sm text-on-surface">{capacity}</div></div>
                    <div><div className="text-[10px] text-on-surface-variant uppercase mb-1">Vehicle</div><div className="text-sm text-on-surface">{vehicle}</div></div>
                    <div><div className="text-[10px] text-on-surface-variant uppercase mb-1">Guide</div><div className="text-sm text-on-surface">{guide}</div></div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                    <span className="font-label-caps font-bold text-on-surface">{price}</span>
                    <a href="/concierge" className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">BOOK <span className="material-symbols-outlined text-sm">east</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Itinerary */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <span className="font-label-caps text-secondary tracking-widest">FEATURED EXPEDITION</span>
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">The Highlands Expedition</h2>
              <p className="text-on-surface-variant leading-relaxed">A full-day immersion into the private side of the Scottish Highlands. Heritage trails, private distilleries, and lakeside dining — all inaccessible to the general public.</p>
              <div className="space-y-6 pt-4">
                {[
                  { time: "08:00", event: "Private Departure", detail: "Land Rover Defender, gourmet hamper prepared by estate chef" },
                  { time: "10:30", event: "Valley of the Winds", detail: "Off-road heritage trails, private photography stops" },
                  { time: "13:00", event: "Lakeside Dining", detail: "Private chef 5-course lunch, vintage wine pairings" },
                  { time: "16:00", event: "Artisan Distilleries", detail: "Family-owned distilleries closed to the public — exclusive access" },
                ].map(({ time, event, detail }) => (
                  <div key={time} className="flex gap-6">
                    <div className="font-label-caps text-secondary text-[10px] w-12 flex-shrink-0 pt-1">{time}</div>
                    <div className="border-l border-outline-variant/30 pl-6">
                      <div className="font-label-caps text-on-surface mb-1">{event}</div>
                      <div className="text-xs text-on-surface-variant">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                <div className="w-12 h-12 rounded-full bg-primary-container border border-outline-variant/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">person</span>
                </div>
                <div>
                  <div className="font-label-caps text-on-surface">Alistair Graham</div>
                  <div className="text-xs text-on-surface-variant">Fellow, Royal Geographical Society</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=85&auto=format&fit=crop')" }}></div>
              <div className="absolute inset-0 bg-primary-container/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Design Your Private Expedition</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Tell us your interests — we will design an itinerary that no travel agent has ever offered.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">COMMISSION ITINERARY</a>
        </div>
      </section>
    </>
  );
}
