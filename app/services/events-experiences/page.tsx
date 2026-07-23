"use client";
export default function EventsExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxjNYN8pHr-OTRMtvTrxaziYGgASSIbfBlIXmW_cDXupozFzbZJz_9E7jHkaSBd-AC6lqsJIOMEvfaFOQ9qbPb3Otuj84itJO0zoawt3nMFAt4BEd7Qda-KQCMjuSN0ySu3j5Cw2QKxLTqY2ZoJ6GhmGUo6m-3txhbLtT7bWWLbmaUsisk3B-LkiMzu6XcN_HQfwhhQsMSorBf-IbRQ0eFNSJmX9fFAYLXcBL6Nv1sQXB_gvx6LfGIGw')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/60 via-primary-container/30 to-primary-container/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
          <span className="font-label-caps text-secondary tracking-[0.3em] block mb-6">PRIVATE EVENTS & EXPERIENCES</span>
          <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface mb-8 leading-tight">
            Beyond the<br /><span className="italic font-normal">Invitation.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Access events that exist outside the public sphere. OPV curates, verifies, and arranges attendance at the world&apos;s most rarefied gatherings — from private opera to masked galas.
          </p>
          <a href="#listings" className="bg-secondary text-primary-container px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase inline-block hover:opacity-90 transition-opacity">Explore Experiences</a>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-primary-container py-8 border-b border-outline-variant/20">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-wrap gap-6 items-center">
            {["All Experiences", "Art & Culture", "Gastronomy", "Private Gala", "Performance"].map((cat) => (
              <button key={cat} className={`font-label-caps text-[11px] uppercase tracking-widest pb-1 transition-all ${cat === "All Experiences" ? "text-secondary border-b border-secondary" : "text-on-surface-variant hover:text-secondary"}`}>{cat}</button>
            ))}
            <div className="ml-auto flex gap-4">
              <input type="date" className="bg-transparent border-b border-outline-variant/50 py-2 text-on-surface text-sm focus:outline-none focus:border-secondary" />
              <input type="text" placeholder="Location..." className="bg-transparent border-b border-outline-variant/50 py-2 text-on-surface text-sm focus:outline-none focus:border-secondary placeholder:text-on-surface-variant/40 w-36" />
            </div>
          </div>
        </div>
      </section>

      {/* Event Listings */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container" id="listings">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              title: "The Vintage Archeology: 1945 Reserve",
              venue: "Château d'Yquem, Bordeaux",
              date: "Oct 12",
              guests: "12 Guests",
              type: "PRIVATE INVITATION",
              price: "Enquiry Only",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FeS-p2tFMaUemkc2X-iJaiNvXM804E_iH0ZqsUeBLE37EQpYfCOhLfEhUDw9Uo29opkig2jnnDUq6oUcVg1j0FIoGa6nt7DQZJ-7jSBHB6u65v-BseEr9unRWmkz50Z_LRxh0-UvaYToDjQ-Sq-5U9RmBlwv_DvrKXT8bcHotLv80zp5OfsGBrjhfu3hiSUIHdgG0Q2JXHeUdfbUXDyv9DVRm9HjVp_rKKhqpYdveiH81vrTFbAM9g",
            },
            {
              title: "Opera Under the Duomo Spires",
              venue: "Terrazza Duomo, Milan",
              date: "Sep 28",
              guests: "50 Guests",
              type: "PUBLIC LISTING",
              price: "$2,450/Seat",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGy09kVn0AcJDDHKDZxF_C1QEFBWKITvkwbM9dDPw6aajxnQu-iKUZLMmXOkD7amtzJrq97Cxw34X7t5f8d6Fz2DmBScFwgX7-4w8ftNhRJXrf6R6NmR4lVMGjy73uC9D_hK2d3f9-UcTPefQee83qizCN-B_6FzddoxHVAmqUbud4e5hU2Z5w5DXwuxSYjNDHfRA2IFx7hda4fITDyIj6-_x3bii9RDhcT-axpGlgQ5JsyASCaQKWQw",
            },
            {
              title: "The Unveiling: Prototype 01",
              venue: "Undisclosed, Zurich",
              date: "Nov 05",
              guests: "20 Guests",
              type: "PRIVATE INVITATION",
              price: "Enquiry Only",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyN1YxjwV7Pu_HmiRa6kCx5U3se42d_eQ7xShiskE9gW3lcDvejgZYkHQg9syelcIMaAXghj71kqOLNedpC7lDD01C4Bgc2xu0XSpSBzP0K-YFNaiHwX7RAL_bvhIxngXk5jyp1oh9DfOh0N6Wcx4H8BdyIchL0snvNoTd4CgJvygdbi0BXvOiMHbMOuO9iYD4DDzUtAvRaHYlBxN5b0i_08ZQzki1kD8DTuAZ_96avrR6k8D3sfmiHQ",
            },
          ].map(({ title, venue, date, guests, type, price, img }) => (
            <div key={title} className="group bg-primary-container border border-outline-variant/10 overflow-hidden hover:border-secondary/40 transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <div className={`font-label-caps text-[10px] px-3 py-1 ${type === "PRIVATE INVITATION" ? "bg-primary-container text-secondary border border-secondary" : "bg-secondary text-primary-container"}`}>{type}</div>
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
              </div>
              <div className="p-8">
                <h3 className="font-headline-sm text-on-surface mb-2">{title}</h3>
                <p className="text-secondary font-label-caps text-[10px] mb-6">{venue}</p>
                <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-outline-variant/20">
                  <div>
                    <div className="text-[10px] uppercase text-on-surface-variant mb-1">Date</div>
                    <div className="text-sm text-on-surface">{date}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-on-surface-variant mb-1">Capacity</div>
                    <div className="text-sm text-on-surface">{guests}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-caps font-bold text-on-surface">{price}</span>
                  <a href="/concierge" className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">
                    REQUEST <span className="material-symbols-outlined text-sm">east</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPHDZGL82QLbTzQ88JPDfah3bqvD3oTppEHQOVlqfGv2xmWh-KwR9X2GoRY8CbwCudY5nvMJyScVEPBxeW8Smypzk5SOCPBLvwYDFIC2ff6vvBELYybGb03rnZq3X1ke0WdQlU8yJo-SUFwbOODun0sUJjN8t-epW1GvG1svBwY1OMnkbwgvIznzK8aGQNkC_A4zOiRFSt50Bds-gBspnsRfzvnr6_iWFtI0XIXJGIHuKBS1Vlm0ExNg')" }}></div>
              <div className="absolute inset-0 bg-primary-container/20"></div>
            </div>
            <div className="space-y-6">
              <span className="font-label-caps text-secondary tracking-widest">FEATURED EVENT</span>
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">The Obsidian Gala:<br />A Night of Masked Artistry</h2>
              <p className="text-on-surface-variant leading-relaxed">Held within the private gardens of a Kyoto estate, The Obsidian Gala merges traditional Kabuki performance with contemporary electronic composition. Attendance is by OPV invitation only. No photography permitted.</p>
              <div className="space-y-3">
                {["Private Kyoto Estate Gardens", "Kabuki & Electronic Composition", "Invitation Only — Max 30 Guests", "Full Discretion Guaranteed"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="text-sm font-label-caps">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/concierge" className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity">REQUEST INVITATION</a>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Form */}
      <section className="py-section-gap px-margin-desktop max-w-3xl mx-auto bg-primary-container">
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Request an Invitation</h2>
          <p className="text-on-surface-variant">For private events, submit your details below. Our team reviews all requests within 24 hours.</p>
        </div>
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-b border-outline-variant/50 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Full Name</label>
              <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface font-body-md placeholder:text-on-surface/20" placeholder="Your formal name" type="text" />
            </div>
            <div className="border-b border-outline-variant/50 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Membership Number</label>
              <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface font-body-md placeholder:text-on-surface/20" placeholder="OPV-XXXXXX" type="text" />
            </div>
          </div>
          <div className="border-b border-outline-variant/50 py-4">
            <label className="block font-label-caps text-[10px] text-secondary mb-1">Preferred Date / Event</label>
            <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface font-body-md placeholder:text-on-surface/20" placeholder="Event name or date range" type="text" />
          </div>
          <div className="flex justify-center pt-6">
            <button className="bg-secondary text-primary-container px-16 py-5 font-label-caps hover:opacity-90 transition-all" type="submit">
              Submit Request
            </button>
          </div>
        </form>
      </section>

      {/* FAQ */}
      <section className="py-section-gap px-margin-desktop max-w-3xl mx-auto bg-primary-container">
        <h2 className="font-display-lg text-headline-md text-on-surface mb-12 text-center">Questions</h2>
        <div className="space-y-6">
          {[
            { q: "How are private events curated?", a: "Our cultural intelligence team monitors global circuits — private art fairs, estate galas, collector dinners — and pre-negotiates access for OPV members. Every listing is personally vetted before being offered." },
            { q: "What is the review process for invitations?", a: "All invitation requests are reviewed by our concierge directors. For private events, host approval may be required. You will receive a response within 24 hours of submission." },
            { q: "Can I host a private event through OPV?", a: "Yes. We manage private event production for members — from intimate dinners to exclusive gatherings of up to 200. Contact our events director for a confidential consultation." },
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
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Access the Unseen</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Our events team manages a private calendar unavailable to the public. Speak to a guardian to explore what is available this season.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">SPEAK TO A GUARDIAN</a>
        </div>
      </section>
    </>
  );
}
