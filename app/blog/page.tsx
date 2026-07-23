export default function BlogPage() {
  const posts = [
    { tag: "Horology", title: "The 2024 Silent Auction: Rare Timepieces of Note", desc: "A look inside the private rooms of the year's most anticipated horological event.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS6OUFJoCA_hYGBsQ3msroAXH1BC8SrF3VMhGr8gLf5dhNDDUH_ewomriXmGOfW6WcIJbEBxXmWPQ6Nlqvl8U2q2saVDCabnmTTjE3JQwj3tSgQNYSafX4n1M--i-2d1Wzv9Wp7wHKXUgyqUWOQQwFfjSt1mqgwAwZ-clcVqQSJfkDfg9ZcYp030Mn86sFETjnLOzjVChYE836gpDDJz8m7sYdKdn7V3P3O2QVFU67JEYsPs0aW9-quA" },
    { tag: "Travel", title: "Beyond Courchevel: The New Alpine Frontiers", desc: "Where the elite are seeking privacy this winter season.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrl1DkRo3HtcRKLfpLqJ5pnxDKJT95Kxch4tyy9YtesVCvxPrjKalLDnS7tykfBOtm2FpPd-IqUSyZLfjPqYbwu2BKofD-IWp8p6McKqV3bxx7LRYYeToPW5k-Uln-fuH7KC8kWNXKni6UtpdwxbLFKNeF9sQjsHFvLg3mjlBYfcB4HnTkMx5cdxr4EpX-JRb6Wu5OczbeDzNX3byNq8QTu8Rp9Qz-gOmT0gWbHNzBd10DPHpMgUUIrA" },
    { tag: "Intelligence", title: "The Future of Digital Privacy in Physical Spaces", desc: "How the Vault 4.0 protocol is redefining personal security for high-net-worth individuals.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyuWvUAr7Mg2fSBG9_QdFjHkVVTNEiOtORSrOd4H9Y1MjzMw3OxmNdMRHJI5Zst3GOVKINnVi1kXRNjTy4GocSHFNLjFrxsV9MBqzKNdMlVd2kJRk4uIpI2fHMYH-gG_2jWzBGa1R3oYaUNqiKHJQyS1TfT_C5nBlEPHxPL6ZMjF08h4A4LvNiPmVtdXxhMa1JhqNnSZCsGcxbU-RMhBiBlVRCQpKmGumPy3Q9rT9DQrTX6VE9A" },
  ];
  return (
    <section className="min-h-screen bg-[#f9f9f9] pt-40 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Journal</span>
          <h1 className="font-display-lg text-headline-md text-[#0b1221]">The Vault Review</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(({ tag, title, desc, img }) => (
            <article key={title} className="group cursor-pointer">
              <div className="aspect-video bg-surface-container-high mb-8 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${img}')` }}></div>
              </div>
              <span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest mb-4 block">{tag}</span>
              <h4 className="font-headline-sm mb-4 leading-tight text-[#0b1221]">{title}</h4>
              <p className="font-body-md text-[#575e71] line-clamp-2">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
