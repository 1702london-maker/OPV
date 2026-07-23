"use client";
export default function PrivateDiningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4FeS-p2tFMaUemkc2X-iJaiNvXM804E_iH0ZqsUeBLE37EQpYfCOhLfEhUDw9Uo29opkig2jnnDUq6oUcVg1j0FIoGa6nt7DQZJ-7jSBHB6u65v-BseEr9unRWmkz50Z_LRxh0-UvaYToDjQ-Sq-5U9RmBlwv_DvrKXT8bcHotLv80zp5OfsGBrjhfu3hiSUIHdgG0Q2JXHeUdfbUXDyv9DVRm9HjVp_rKKhqpYdveiH81vrTFbAM9g')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
          <span className="font-label-caps text-secondary tracking-[0.3em] block mb-6">PRIVATE DINING</span>
          <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface mb-8 leading-tight">
            The Table<br /><span className="italic font-normal">Set for You Alone.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Michelin-starred chefs. Private estates. No other guests. OPV curates dining experiences beyond what any reservation can offer.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#listings" className="bg-secondary text-primary-container px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase inline-block hover:opacity-90 transition-opacity">View Experiences</a>
            <a href="#booking" className="border border-on-surface/30 text-on-surface px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase backdrop-blur-md hover:bg-on-surface/5 transition-all inline-block">Book Now</a>
          </div>
        </div>
      </section>

      {/* Curator Standard */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3 space-y-6">
            <span className="font-label-caps text-secondary tracking-widest">THE CURATOR&apos;S STANDARD</span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">Every Chef, Every Venue — Personally Verified</h2>
            <p className="text-on-surface-variant leading-relaxed">Our culinary directors dine anonymously at each establishment before onboarding them to the OPV network. We verify credentials, taste menus, inspect facilities, and assess discretion protocols. Nothing reaches our members that we have not personally vetted.</p>
          </div>
          <div className="lg:col-span-2 bg-secondary p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-primary-container flex items-center justify-center text-[10px] font-bold text-primary-container">OPV</div>
              <span className="font-label-caps text-primary-container tracking-widest">VERIFIED EXCELLENCE</span>
            </div>
            <p className="font-display-lg text-3xl text-primary-container leading-tight">100% Verified Service Providers</p>
            <p className="text-primary-container/70 text-sm mt-4">Every dining experience anonymously audited before listing.</p>
          </div>
        </div>
      </section>

      {/* Dining Cards */}
      <section className="py-section-gap bg-primary-container" id="listings">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display-lg text-headline-md text-on-surface">Available Experiences</h2>
              <p className="text-on-surface-variant mt-2">Curated for the current season.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                name: "The Cellar's Whisper",
                location: "Heritage Estate, Bordeaux",
                chef: "Chef Julian Vasseur",
                stars: "3 Michelin Stars",
                guests: "12 Guests",
                price: "€1,250/pp",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGy09kVn0AcJDDHKDZxF_C1QEFBWKITvkwbM9dDPw6aajxnQu-iKUZLMmXOkD7amtzJrq97Cxw34X7t5f8d6Fz2DmBScFwgX7-4w8ftNhRJXrf6R6NmR4lVMGjy73uC9D_hK2d3f9-UcTPefQee83qizCN-B_6FzddoxHVAmqUbud4e5hU2Z5w5DXwuxSYjNDHfRA2IFx7hda4fITDyIj6-_x3bii9RDhcT-axpGlgQ5JsyASCaQKWQw",
              },
              {
                name: "Horizon Omakase",
                location: "Penthouse Suite, Tokyo",
                chef: "Master Chef Kenji Tanaka",
                stars: "Omakase Master",
                guests: "6 Guests",
                price: "€2,400/pp",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyN1YxjwV7Pu_HmiRa6kCx5U3se42d_eQ7xShiskE9gW3lcDvejgZYkHQg9syelcIMaAXghj71kqOLNedpC7lDD01C4Bgc2xu0XSpSBzP0K-YFNaiHwX7RAL_bvhIxngXk5jyp1oh9DfOh0N6Wcx4H8BdyIchL0snvNoTd4CgJvygdbi0BXvOiMHbMOuO9iYD4DDzUtAvRaHYlBxN5b0i_08ZQzki1kD8DTuAZ_96avrR6k8D3sfmiHQ",
              },
              {
                name: "Atlas Under Stars",
                location: "Private Palm Grove, Marrakech",
                chef: "Chef Amira Al-Fassi",
                stars: "Regional Laureate",
                guests: "20 Guests",
                price: "€1,800/pp",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPHDZGL82QLbTzQ88JPDfah3bqvD3oTppEHQOVlqfGv2xmWh-KwR9X2GoRY8CbwCudY5nvMJyScVEPBxeW8Smypzk5SOCPBLvwYDFIC2ff6vvBELYybGb03rnZq3X1ke0WdQlU8yJo-SUFwbOODun0sUJjN8t-epW1GvG1svBwY1OMnkbwgvIznzK8aGQNkC_A4zOiRFSt50Bds-gBspnsRfzvnr6_iWFtI0XIXJGIHuKBS1Vlm0ExNg",
              },
            ].map(({ name, location, chef, stars, guests, price, img }) => (
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
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px]">restaurant</span>
                      <span className="text-xs font-label-caps">{chef} — {stars}</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px]">groups</span>
                      <span className="text-xs font-label-caps">{guests}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                    <span className="font-label-caps font-bold text-on-surface">{price}</span>
                    <a href="/concierge" className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">
                      RESERVE <span className="material-symbols-outlined text-sm">east</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <span className="font-label-caps text-secondary tracking-widest">FEATURED EXPERIENCE</span>
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">The Alchemist&apos;s Table</h2>
              <p className="text-on-surface-variant font-label-caps text-[10px] tracking-widest">Mayfair Subterranean Vault · Chef Marcus Thorne</p>
              <p className="text-on-surface-variant leading-relaxed">Descend into a converted Mayfair vault where Chef Marcus Thorne orchestrates a 15-course tasting menu using ingredients sourced from his private farm network. This is not dining. This is theatre.</p>
              <div className="space-y-3 pt-4">
                {["15-course menu with rare vintage wine pairing", "Discretion-assured private arrival protocol", "Private valet and secure transport coordination", "Maximum 8 guests per sitting"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="text-sm text-on-surface">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/concierge" className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity">RESERVE THIS TABLE</a>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxmJtzrqzEzJSWc5tA-Oz3kJbC_0n3YG-je96DQKOEME80f9A-Cd26CIeS8jKyvw8AXofPRhEjQgroZ7O432R7-sqaOQsEj66UMY0ZZVjGzWv_cA_5hDdCs6Gol1KC1xZfWu4G6gL1woOrkzja2irvyD4nfFznz92gwNWvkiilQdwOEVrRVfNJ-V_7M-iXDrkvxGqp79Ob6jexVg1mYPmMW0g9BzWplLzCnH5BqcowFYhoUJJPL_IsdA')" }}></div>
              <div className="absolute inset-0 bg-primary-container/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-section-gap bg-primary-container" id="booking">
        <div className="px-margin-desktop max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Reserve an Experience</h2>
            <p className="text-on-surface-variant">Complete the form and a dining concierge will confirm availability within 6 hours.</p>
          </div>
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="border-b border-outline-variant/50 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Full Name</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/20" placeholder="Your formal name" type="text" />
              </div>
              <div className="border-b border-outline-variant/50 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Membership ID</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/20" placeholder="OPV-XXXXXX" type="text" />
              </div>
              <div className="border-b border-outline-variant/50 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Preferred Date</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface" type="date" />
              </div>
              <div className="border-b border-outline-variant/50 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Guest Count</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/20" placeholder="Number of guests" type="number" min="1" />
              </div>
            </div>
            <div className="border-b border-outline-variant/50 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Special Requirements</label>
              <textarea className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/20 resize-none" placeholder="Dietary requirements, allergies, occasion details..." rows={3}></textarea>
            </div>
            <div className="flex justify-center pt-6">
              <button className="bg-secondary text-primary-container px-16 py-5 font-label-caps hover:opacity-90 transition-all" type="submit">CONFIRM RESERVATION</button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Commission a Private Chef</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Need a chef at your estate, yacht, or villa? Our culinary network can deploy world-class talent anywhere in the world within 48 hours.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">COMMISSION A CHEF</a>
        </div>
      </section>
    </>
  );
}
