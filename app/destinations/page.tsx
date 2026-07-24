import Link from "next/link";
import AIConciergeSection from "@/components/AIConciergeSection";

const UK_CITIES = [
  { city: "London", country: "united-kingdom", slug: "united-kingdom-london", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop" },
  { city: "Manchester", country: "united-kingdom", slug: "united-kingdom-manchester", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85&auto=format&fit=crop" },
  { city: "Birmingham", country: "united-kingdom", slug: "united-kingdom-birmingham", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop" },
  { city: "Liverpool", country: "united-kingdom", slug: "united-kingdom-liverpool", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85&auto=format&fit=crop" },
  { city: "Edinburgh", country: "united-kingdom", slug: "united-kingdom-edinburgh", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=85&auto=format&fit=crop" },
];

const EUROPE_CITIES = [
  { city: "Paris", country: "france", slug: "france-paris" },
  { city: "Monaco", country: "france", slug: "france-monaco" },
  { city: "Nice", country: "france", slug: "france-nice" },
  { city: "Cannes", country: "france", slug: "france-cannes" },
  { city: "Barcelona", country: "spain", slug: "spain-barcelona" },
  { city: "Madrid", country: "spain", slug: "spain-madrid" },
  { city: "Marbella", country: "spain", slug: "spain-marbella" },
  { city: "Lisbon", country: "portugal", slug: "portugal-lisbon" },
  { city: "Porto", country: "portugal", slug: "portugal-porto" },
  { city: "Algarve", country: "portugal", slug: "portugal-algarve" },
  { city: "Milan", country: "italy", slug: "italy-milan" },
  { city: "Rome", country: "italy", slug: "italy-rome" },
  { city: "Florence", country: "italy", slug: "italy-florence" },
  { city: "Lake Como", country: "italy", slug: "italy-lake-como" },
  { city: "Amsterdam", country: "netherlands", slug: "netherlands-amsterdam" },
  { city: "Geneva", country: "switzerland", slug: "switzerland-geneva" },
  { city: "Zurich", country: "switzerland", slug: "switzerland-zurich" },
  { city: "Mykonos", country: "greece", slug: "greece-mykonos" },
  { city: "Santorini", country: "greece", slug: "greece-santorini" },
];

const EU_IMG = "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=85&auto=format&fit=crop";

function CityCard({ city, country, slug, img }: { city: string; country: string; slug: string; img: string }) {
  return (
    <Link href={`/destinations/${country}/${slug}`} className="group relative overflow-hidden aspect-[3/4] block">
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} alt={city} data-placeholder="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <p className="font-label-caps text-[10px] text-secondary-fixed uppercase tracking-widest mb-1">{country.replace(/-/g, " ")}</p>
        <h3 className="font-serif text-headline-md text-white">{city}</h3>
      </div>
    </Link>
  );
}

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src={EU_IMG} alt="Destinations" data-placeholder="true" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-widest uppercase">Where To Next</span>
          <h1 className="font-serif text-headline-lg md:text-display-xl text-white leading-none">Our Destinations</h1>
        </div>
      </section>

      {/* UK */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">United Kingdom</span>
          <h2 className="font-serif text-headline-lg text-primary">British Luxury</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {UK_CITIES.map((c) => <CityCard key={c.slug} {...c} />)}
        </div>
      </section>

      {/* Europe */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">Europe</span>
          <h2 className="font-serif text-headline-lg text-primary">Continental Collection</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {EUROPE_CITIES.map((c) => (
            <CityCard key={c.slug} city={c.city} country={c.country} slug={c.slug} img={EU_IMG} />
          ))}
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}
