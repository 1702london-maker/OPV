"use client";
export default function VideographyPhotographyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[921px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6r2jrQd_MaGankgmtPfqYnkyX-aekjmU_ZQ1r1gd2JKwYdoIBrfWhvJur6QdHJvL9YuTBVaup-HLsCZiKEdKZk0lSjjfBVok3pQ03DmzbPIQtPFr3lObmG8Y6fXdCL04qOROrfwd2z7AmZJykgWXWGTZyjuFA-SSustv1htv-p528rBYBuPC4O59oIjIPTbtpGEXlcpYknGVd1J_Mu2iaTqQNJRY-7WhVSRx5iTp3MNQnZnv2-WvjQg')" }}></div>
          <div className="absolute inset-0 bg-primary-container/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
          <span className="font-label-caps text-secondary tracking-[0.3em] block mb-6">PHOTOGRAPHY & VIDEOGRAPHY</span>
          <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface mb-8 leading-tight">
            Every Frame<br /><span className="italic font-normal">A Legacy.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            OPV connects you with the world&apos;s most discreet and accomplished visual artists — for estate documentation, private events, and cinematic lifestyle films.
          </p>
          <a href="#providers" className="bg-secondary text-primary-container px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase inline-block hover:opacity-90 transition-opacity">View Providers</a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-section-gap px-margin-desktop max-w-3xl mx-auto text-center bg-primary-container">
        <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-6">The Discerning Guardian&apos;s Lens</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed">Our artists are selected not merely for technical excellence, but for discretion, emotional intelligence, and the ability to disappear into an environment while capturing its soul. Every provider operates under strict NDA.</p>
      </section>

      {/* Provider Cards */}
      <section className="py-section-gap bg-primary-container" id="providers">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-4">OPV Verified Providers</h2>
            <p className="text-on-surface-variant">Each studio independently verified by our curatorial board.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                studio: "Vanguard Visuals",
                specialty: "Architectural & Estate",
                rate: "Rate on Enquiry",
                desc: "Specialists in heritage property documentation and architectural portraiture. Trusted by seven of Europe&apos;s leading private estates.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsyw6l4tBh5y0YsWjhwLBrIeHPdQL_m39bf9gxGCpIIKw36NBLCWFddW5Yw2qxrh-5lclSNrvC3867aTPWzRI0yNYDfdf4gTN0lQdjPI0OhDjaMpe9l6BAgzyL0emq7oBNouAEshL2DYgwwcxyEWJvdW_Sa0kj6QbOLmzjqpaHGI36LDNda4-sbKObSPrJZ3dA3zgR0-gdEk-T7U9a42KtC3HJvnwhwJy1XCliIqnmouuPKfFCUG1w1A",
              },
              {
                studio: "Julian Thorne Studio",
                specialty: "Portrait & Legacy",
                rate: "From $8,500",
                desc: "Julian Thorne is widely regarded as the pre-eminent portrait photographer for high-net-worth families. His studio creates archival legacy documentation.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDynEP5I3FGGYtmjAJNh-ysWkvvN-F0FRD7dx1qnw_HWig-KuyfbatbS1tpJgVAeT7jb08s6BLRJnwTiPWiqp-YEKvRbrdTcAme7dORQoblAA1pqsklLv-bM_fcJ5fJMOsxiH7Mq1V8FBPQZPFG5idwTHFbTwW1iirbtz0bFu467GPKrjjTTPQ2oX5ttlMs62z7RpyLDKjwglje0PKq8xF1kKx1x8VCPG8AJheH1QkSTzz0fqhdevkng",
              },
              {
                studio: "Aether Motion",
                specialty: "Event & Cinematography",
                rate: "Rate on Enquiry",
                desc: "Award-winning cinematic event coverage. Aether Motion produces 4K documentary films of private galas, weddings, and corporate milestones.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHo8avzFcqvhd5Y8zY6LvGu6M2tp6PMXJFH1V2ZFFOEjax0XcX8-NqYob5di19rqww78HEWfAu30Fr0p2IuOa66oNzicUhvS7NNlTncwER5g_I2gLq_3KqsqEnIMTuGBSn7JsAEu9uL1_8EUk1jLZpTdJwyR_TRI5aOTqKftUZxU_VJvX6iZOJe9tug1TLyKK3_qWEEacMkstwdaZzPQH5-yVkZBUrxHu8vku6S-1mcn_jxTNMiIPG9Q",
              },
            ].map(({ studio, specialty, rate, desc, img }) => (
              <div key={studio} className="group bg-primary-container border border-outline-variant/10 overflow-hidden hover:border-secondary/40 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="font-label-caps text-[10px] border border-secondary text-secondary bg-primary-container/90 px-3 py-1">OPV VERIFIED</div>
                  </div>
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-sm text-on-surface mb-1">{studio}</h3>
                  <p className="text-secondary font-label-caps text-[10px] mb-4">{specialty}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                    <span className="font-label-caps font-bold text-on-surface">{rate}</span>
                    <a href="/concierge" className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">ENQUIRE <span className="material-symbols-outlined text-sm">east</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <span className="font-label-caps text-secondary tracking-widest">ARTIST SPOTLIGHT</span>
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">Julian Thorne Studio</h2>
              <p className="text-on-surface-variant leading-relaxed">For three decades, Julian Thorne has been the invisible presence at the most significant private moments. His portraits are held in private collections across six continents. He works exclusively by referral — of which OPV is one of three global partners.</p>
              <div className="space-y-3">
                {["Archival large-format portraiture", "Family legacy documentation programmes", "Estate and property portraiture", "Private collection cataloguing"].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="text-sm text-on-surface">{s}</span>
                  </div>
                ))}
              </div>
              <a href="/concierge" className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity">REQUEST COMMISSION</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGy09kVn0AcJDDHKDZxF_C1QEFBWKITvkwbM9dDPw6aajxnQu-iKUZLMmXOkD7amtzJrq97Cxw34X7t5f8d6Fz2DmBScFwgX7-4w8ftNhRJXrf6R6NmR4lVMGjy73uC9D_hK2d3f9-UcTPefQee83qizCN-B_6FzddoxHVAmqUbud4e5hU2Z5w5DXwuxSYjNDHfRA2IFx7hda4fITDyIj6-_x3bii9RDhcT-axpGlgQ5JsyASCaQKWQw')" }}></div>
              <div className="aspect-square bg-cover bg-center mt-8" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyN1YxjwV7Pu_HmiRa6kCx5U3se42d_eQ7xShiskE9gW3lcDvejgZYkHQg9syelcIMaAXghj71kqOLNedpC7lDD01C4Bgc2xu0XSpSBzP0K-YFNaiHwX7RAL_bvhIxngXk5jyp1oh9DfOh0N6Wcx4H8BdyIchL0snvNoTd4CgJvygdbi0BXvOiMHbMOuO9iYD4DDzUtAvRaHYlBxN5b0i_08ZQzki1kD8DTuAZ_96avrR6k8D3sfmiHQ')" }}></div>
              <div className="col-span-2 aspect-video bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPHDZGL82QLbTzQ88JPDfah3bqvD3oTppEHQOVlqfGv2xmWh-KwR9X2GoRY8CbwCudY5nvMJyScVEPBxeW8Smypzk5SOCPBLvwYDFIC2ff6vvBELYybGb03rnZq3X1ke0WdQlU8yJo-SUFwbOODun0sUJjN8t-epW1GvG1svBwY1OMnkbwgvIznzK8aGQNkC_A4zOiRFSt50Bds-gBspnsRfzvnr6_iWFtI0XIXJGIHuKBS1Vlm0ExNg')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Submit a Request</h2>
            <p className="text-on-surface-variant">Our visual arts concierge will respond within 24 hours.</p>
          </div>
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="border-b border-on-surface/20 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Full Name</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/30" placeholder="Your formal name" type="text" />
              </div>
              <div className="border-b border-on-surface/20 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Event Date</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface" type="date" />
              </div>
            </div>
            <div className="border-b border-on-surface/20 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Location</label>
              <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/30" placeholder="City, venue, or estate" type="text" />
            </div>
            <div className="border-b border-on-surface/20 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Service Type</label>
              <select className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface appearance-none">
                <option className="bg-primary-container">Legacy Portraiture</option>
                <option className="bg-primary-container">Private Event Coverage</option>
                <option className="bg-primary-container">Cinematic Lifestyle Film</option>
                <option className="bg-primary-container">Architectural & Estate</option>
              </select>
            </div>
            <div className="border-b border-on-surface/20 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Additional Requirements</label>
              <textarea className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/30 resize-none" placeholder="Describe any specific requirements, sensitivities, or context..." rows={3}></textarea>
            </div>
            <div className="flex justify-center pt-6">
              <button className="bg-secondary text-primary-container px-16 py-5 font-label-caps hover:opacity-90 transition-all" type="submit">SUBMIT REQUEST</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
