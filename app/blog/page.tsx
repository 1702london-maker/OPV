"use client";

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[819px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="A cinematic, wide-angle shot of a classic private library with dark mahogany wood, floor-to-ceiling bookshelves, and plush leather armchairs."
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=85&auto=format&fit=crop')" }}
          ></div>
          <div className="absolute inset-0 editorial-gradient"></div>
        </div>
        <div className="relative z-10 px-margin-desktop pb-section-gap max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-secondary tracking-[0.4em] mb-4 block">EDITORIAL ARCHIVE</span>
          <h1 className="font-display-lg text-display-lg max-w-3xl leading-none mb-8">From the Vault.</h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl mb-10">Exclusive insights into the world&apos;s most guarded experiences, private estates, and the philosophy of discerning guardianship.</p>
        </div>
      </section>

      {/* Category Filter — bg-primary-container KEPT DARK */}
      <section className="sticky top-20 z-40 bg-primary-container py-6 border-y border-outline-variant/10">
        <div className="px-margin-desktop max-w-container-max mx-auto w-full overflow-x-auto">
          <div className="flex items-center gap-12 whitespace-nowrap">
            <button className="text-secondary font-label-caps border-b-2 border-secondary pb-1">ALL ARTICLES</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">LUXURY STAYS</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">PRIVATE DINING</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">TRAVEL &amp; YACHTS</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">LIFESTYLE &amp; CARE</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">THE PHILOSOPHY</button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-margin-desktop py-section-gap max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface-container-low p-8 lg:p-16 border border-outline-variant/20 hover:border-secondary/40 transition-soft-close group">
          <div className="lg:col-span-7 overflow-hidden h-[500px]">
            <div
              className="w-full h-full bg-cover bg-center transition-soft-close group-hover:scale-105"
              data-alt="An ultra-modern luxury yacht anchored in a secluded Mediterranean cove at twilight."
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85&auto=format&fit=crop')" }}
            ></div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-label-caps text-secondary">FEATURED</span>
              <div className="w-12 h-[1px] bg-outline-variant"></div>
              <span className="font-label-caps text-on-surface-variant">TRAVEL &amp; YACHTS</span>
            </div>
            <h2 className="font-headline-md text-display-lg-mobile lg:text-headline-md mb-6 leading-tight group-hover:text-secondary transition-colors">The Silent Horizon: Navigating the New Age of Private Voyaging.</h2>
            <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">As the world becomes louder, the elite seek the profound luxury of silence. Explore the technological marvels behind the next generation of emission-free, ultra-silent superyachts.</p>
            <a className="flex items-center gap-3 font-label-caps text-secondary group/link" href="#">
              READ THE ARTICLE
              <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-margin-desktop pb-section-gap max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {/* Card 1 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A macro shot of a vintage crystal decanter being poured into a delicate gold-rimmed glass."
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-full border border-secondary bg-primary-container/40 backdrop-blur-sm">
                <span className="text-secondary text-[10px] font-bold">OPV</span>
              </div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">PRIVATE DINING</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">A Vintage Unlocked: The Secret Cellars of Bordeaux.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">A journey into the subterranean vaults of France&apos;s most prestigious estates, where history is bottled and time stands perfectly still.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="Exterior of a minimalist, Brutalist-inspired villa in the Swiss Alps."
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&auto=format&fit=crop')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">LUXURY STAYS</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">Architectural Solitude: Switzerland&apos;s Hidden Alpine Sanctuaries.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">In the high peaks, architecture serves as both a shield and a lens. Discover the retreats redefining &apos;getting away&apos;.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A portrait of a high-end personal concierge dressed in a bespoke dark navy wool suit."
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=85&auto=format&fit=crop')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">THE PHILOSOPHY</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Art of the Invisible Guardian: Concierge Ethics.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Understanding the delicate balance between high-performance service and the absolute right to privacy.</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="An aerial view of a private island in the Maldives during the blue hour."
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85&auto=format&fit=crop')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">TRAVEL &amp; YACHTS</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">Islands of Discretion: Sovereignty in the South Pacific.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">How private island ownership is evolving beyond leisure into a new form of sovereign living.</p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A close-up of a meticulously tailored charcoal cashmere coat on a classic wooden valet stand."
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85&auto=format&fit=crop')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">LIFESTYLE &amp; CARE</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Curation of the Wardrobe: Heirloom Maintenance.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Preserving excellence. Our guide to the care and storage of high-value artisanal fabrics and bespoke tailoring.</p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A sleek black grand piano in a dimly lit, minimalist hall with concrete charcoal walls."
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&auto=format&fit=crop')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">EXPERIENCES</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Midnight Concerto: Solo Performances in Empty Halls.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Booking the world&apos;s most famous acoustic spaces for a private audience of one. The ultimate musical luxury.</p>
          </div>

          {/* Card 7 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A macro shot of a rare mechanical watch movement, intricate gold and silver gears in motion."
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=85&auto=format&fit=crop')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">PRODUCTS</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">Precision as Art: The New Horological Renaissance.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Why independent watchmakers are becoming the new masters of multi-generational wealth preservation.</p>
          </div>

          {/* Card 8 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A high-end private dining table set for two in a glass-walled dining room overlooking a dark, rainy city skyline."
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85&auto=format&fit=crop')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">PRIVATE DINING</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Chef&apos;s Whisper: The Rise of the Nomadic Kitchen.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Bringing Michelin-starred brilliance to the most remote corners of your estate or sea-faring vessel.</p>
          </div>

          {/* Card 9 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A minimalist home gallery space with a large abstract painting in muted navy and gold tones."
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85&auto=format&fit=crop')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">THE PHILOSOPHY</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Guardian&apos;s Legacy: Investing in Future Generations.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Strategies for curating a private collection that speaks of values as much as value itself.</p>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-24 flex justify-center">
          <button className="border border-outline-variant px-12 py-4 font-label-caps tracking-widest hover:border-secondary hover:text-secondary transition-soft-close group flex items-center gap-4">
            EXPLORE FURTHER
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
          </button>
        </div>
      </section>

      {/* Membership CTA — bg-surface-container-lowest → bg-primary-container */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto w-full text-center">
          <div className="mb-12 flex justify-center">
            <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center">
              <span className="text-secondary font-display-lg text-headline-sm">OPV</span>
            </div>
          </div>
          <h2 className="font-headline-md text-headline-md mb-6">Access the Inner Sanctum.</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">Our editorial archive is but a window. Membership provides the keys to the experiences themselves. Applications are currently reviewed on a rolling basis.</p>
          <button className="bg-secondary text-primary-container px-12 py-5 font-label-caps tracking-[0.2em] hover:bg-secondary-fixed transition-colors">REQUEST ADMISSION</button>
        </div>
      </section>
    </div>
  );
}
