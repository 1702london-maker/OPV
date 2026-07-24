import { Suspense } from "react";
import { createServerClient } from "@/lib/supabase";
import StaysFilter from "@/components/StaysFilter";
import AIConciergeSection from "@/components/AIConciergeSection";

const FALLBACK_PROPERTIES = [
  { id: "1", title: "The Mayfair Penthouse", city: "London", price_from: 4200, guests: 8, bedrooms: 4, image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2SNjLPLMFKvdu4zvVOwtQd4MCHEXKRMddt54gfWmRPI7iYkR46F8TZhetPwAjPkFC6YtYPmdupYGMvpKbFJ_4CwkDLfLiHjwyOIYqs-54N8ykXYiLYVRQFIso6jnq8lUC39gHfqoYOaShflv4VJzDk42PedRDfBbwRTZvo4PJju0KeSu7xutVeDwwcIKVM30CpYDKFYx9659dFwEdjBylZ_u6UUb1MSwqlkz9FJz4BPsbIo-mApio3mBQLQb75Wlbgmg15D9G3wpZ" },
  { id: "2", title: "The Glass Pavilion", city: "Palm Springs", price_from: 2400, guests: 6, bedrooms: 4, image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpGDQfzHVHUd5BAtByyTRgpZyPjbsG44ZB14F6YLPf0eG4fSkulBTes6pSAgHT7PBQepHUYsJeDspr-tCZTHzrJvOX-K7tccpQLpzMG06WnjWRVNhkXAtfrowa6XePbcH3If1Jgq33K0a3fb5ttjZ_qssl5NDWPPPv6YiBYHzCKYLKCszPw6lD6BG5tAj1iD5a0iPKzs2CLhnaBsDvVanBOrnRubEd2BGm7On65iXpdziQ67fdz3wW3GGn_t3MKu-RcoLmdoB2Fsoz" },
  { id: "3", title: "Azure Haven", city: "Maldives", price_from: 3200, guests: 2, bedrooms: 1, image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdr-bwIZ7VkMvGZeZvHLiy-ETiAPIBhElKLW2P75aOGaRFXOwQWv6Fmupu9hcjtpGdvyg48D6kHHulqRsGUtqq70FE_pqxtYUcflsFmNRHVkNvlQtR0uwmgDDz7u45pk1uC6zuz7nN2xHvQgq43KDeyRtPUpdjYjnzYsAnW20RPAHEer43-A8Xi9pdQ6KE-l-EbXp3C0qCP7rDM5JsQcRPK2UwdpNXawNRtng1Mg7bea2n_boyxQV0qeqUFxoLuwObb3vyGvGk7D3M" },
];

async function getProperties(type?: string) {
  try {
    const supabase = createServerClient();
    let query = supabase.from("properties").select("*").eq("published", true);
    if (type && type !== "All") {
      query = query.ilike("category", `%${type}%`);
    }
    const { data } = await query.limit(12);
    return data && data.length > 0 ? data : FALLBACK_PROPERTIES;
  } catch {
    return FALLBACK_PROPERTIES;
  }
}

export default async function StaysPage({ searchParams }: { searchParams: { type?: string } }) {
  const type = searchParams.type;
  const properties = await getProperties(type);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApV0RN1MTnKzILhdNla59xJAa6eUXu2qLaaz1rqvtEUnz4kHWkYz3-NX3MSt_WW2be59EbCsuaBbTFG2544piGQEp0Bo3UQuCIx70KZMgRdduqxEtwGJ-98yd0mLCXix1SzVQl4bY9bqGKwDwpx_Enjc4jh9iBIkOtoT3DjOSMIqmdwJ6Q5J2CKmxISV7ET3gnYY8a2Y2DY5BiQSttGAA80s0nK2pV3_JD_-1YNYTuWLXQmiJ_BKDcPLKfB9k6WmqCR0YjC837dOm1" alt="Luxury Stays" data-placeholder="true" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-widest uppercase">Ultra-Luxury Properties</span>
          <h1 className="font-serif text-headline-lg md:text-display-xl text-white leading-none">Curated Luxury Stays</h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Suspense fallback={null}>
          <StaysFilter />
        </Suspense>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {properties.map((p: { id: string; title: string; city: string; price_from: number; guests: number; bedrooms: number; image_url?: string; hero_image_path?: string }) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[4/5] relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={p.image_url || p.hero_image_path || "https://lh3.googleusercontent.com/aida-public/AB6AXuBCkKNZEoaY49j5qYdbNSeAAz3HX5EYi6wu3Fd9_hHqug90yKycJbHefMoMTTfCYMITg5yZuVrEYUSA9UN8D-29EWCd5OtPbcNu-KpkT1sFL57vEleBkQkuPzVEuuUPckuIH5zvG5ZAfQ7AfSBdQFNjT9ZCrfd1Ij1yt10LfP9j51OW72SbWyDqwx1knF13wOYhw5sXsQeenZffS_eCi5ouvLgbW2naVk37Hp2bxNJDrS5ccrfjQ4SJlYF5tOTwjSMtWDKk-Lsrxyoz"}
                  alt={p.title}
                  data-placeholder="true"
                />
              </div>
              <h3 className="font-serif text-headline-md mb-2">{p.title}</h3>
              <p className="font-sans text-body-md text-on-surface-variant mb-4">
                {p.city} {p.guests ? `• ${p.guests} Guests` : ""} {p.bedrooms ? `• ${p.bedrooms} Bedrooms` : ""}
              </p>
              {p.price_from && (
                <p className="font-label-caps text-label-caps text-primary">From ${p.price_from.toLocaleString()} / night</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}
