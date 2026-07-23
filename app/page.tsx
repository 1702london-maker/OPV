"use client";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const handleScroll = () => {
      if (!nav) return;
      if (window.scrollY > 100) {
        nav.classList.add("py-4");
        nav.classList.remove("py-unit-gutter");
      } else {
        nav.classList.add("py-unit-gutter");
        nav.classList.remove("py-4");
      }
    };
    window.addEventListener("scroll", handleScroll);

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
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav bg-primary-container/80 backdrop-blur-md transition-all duration-300">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto w-full">
          <div className="flex items-center gap-10">
            <a className="flex items-center" href="/" aria-label="OPV home">
              <img className="h-16 w-16 object-contain" src="/assets/opulent-vault-logo-transparent.png" alt="Opulent Vault logo" />
            </a>
            <div className="hidden md:flex gap-8 items-center">
              <div className="relative group">
                <a className="text-secondary font-semibold border-b border-secondary pb-1 font-label-caps uppercase text-[13px]" href="/services/">Services</a>
                <div className="absolute left-0 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[860px] max-w-[calc(100vw-160px)]">
                  <div className="bg-primary-container/95 backdrop-blur-xl border border-outline-variant/20 p-8 grid grid-cols-2 lg:grid-cols-3 gap-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/luxury-stays/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Luxury Stays</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Verified properties and private residences</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/private-dining/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Private Dining</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Chefs, tastings, and hosted tables</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/events-experiences/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Events &amp; Experiences</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Member events and rare access</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/wine-tasting/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Wine Tasting</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Cellars, vintages, and private tastings</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/private-tours/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Private Tours</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Guided journeys with expert hosts</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/vip-security/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">VIP &amp; Celebrity Security</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Confidential protection requests</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/car-rentals/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Luxury Car Rentals</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Self-drive and chauffeur vehicles</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/private-jet/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Private Jet</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Private aircraft and aviation concierge</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/yacht-services/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Yacht Services</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Charters, crews, and event hire</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/cleaning-lifestyle/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Cleaning &amp; Lifestyle Maintenance</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Housekeeping and property care</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/videography-photography/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Videography &amp; Photography</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Luxury creative coverage</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/personal-shopping/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Personal Shopping</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Private sourcing and wardrobe support</span></a>
                    <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/luxury-products/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Luxury Products</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Curated goods and private sourcing</span></a>
                    <a className="lg:col-span-3 text-secondary font-label-caps text-label-caps uppercase tracking-widest border-t border-outline-variant/20 pt-5 hover:text-white transition-colors" href="/services/">View All Services</a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/services/events-experiences/">Experiences</a>
                <div className="absolute left-0 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72">
                  <div className="bg-primary-container/95 backdrop-blur-xl border border-outline-variant/20 p-5 space-y-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                    <a className="block font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary" href="/services/events-experiences/">Events &amp; Experiences</a>
                    <a className="block font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary" href="/services/private-tours/">Private Tours</a>
                    <a className="block font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary" href="/services/wine-tasting/">Wine Tasting</a>
                    <a className="block font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary" href="/blog/">Blog &amp; Editorial</a>
                  </div>
                </div>
              </div>
              <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/services/luxury-products/">Products</a>
              <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/about/">About</a>
              <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/concierge/">Concierge</a>
              <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/membership/">Membership</a>
              <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/affiliates/">Affiliate</a>
            </div>
          </div>
          <div className="flex gap-5 items-center shrink-0">
            <a className="hidden md:inline-flex rounded-full border border-secondary text-on-surface px-7 py-3 font-label-caps uppercase text-[13px] tracking-widest hover:bg-secondary hover:text-primary-container transition-colors whitespace-nowrap" href="/services/">Search the Vault</a>
            <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-colors uppercase text-[13px]" href="/login/">Login</a>
            <a className="bg-secondary text-primary-container px-7 py-3 font-label-caps uppercase text-[13px] font-bold tracking-widest hover:bg-white transition-colors duration-300" href="/login/">Register</a>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-container/40 z-10"></div>
          <div className="h-full w-full relative" id="hero-slider">
            <div
              className="absolute inset-0 transition-opacity duration-1000 opacity-100 hero-zoom bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAY--tVORIHbPn6H_NMjV_Ryesk9KGQpC9H4GykTpegMtUi8x-Ha_dlvGFk5ZtDfCuokqQpxMrrSX2BZgg8BoIzBQBc2IqrLCRn-ivnDhmnHYI7FhbsNJKVzanSnHAs-Nj0gUET74CF8fH4p0l7EnYOuG9EypsAbX20S82BLmtJoaNg1tYrvQiRoQJ198PnNdtZ3Hzt4Hc4sx8XDIIK9u1OY2pg5tT7tPhv-wDyGHVA-0EElnoU_F_Q-g')" }}
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
      <section className="py-section-gap px-margin-desktop bg-[#f9f9f9]">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Ecosystem</span>
              <h3 className="font-display-lg text-headline-md text-[#0b1221]">Curated Categories</h3>
            </div>
            <a className="text-[#575e71] hover:text-secondary transition-colors font-label-caps text-label-caps uppercase tracking-widest border-b border-[#d5d5d5] pb-1" href="/">View All 12</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Stays", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABfZjiVm7_k8r2vW_05DwGBno0TH0oBNbZj9MeLqb2B3xBXYWkRcPEUAi8Ac1AiPdjFpAeCLXhnE832U7HwVB1H4CrNC0xJLKAKqizfaHkvIxfW1YNiVWuBgE9En1h6GfmgxIu4x-AtLMccBSyZqmMLiBxg_ZwEzwixug_S9q2t48J36jp0eUz4xoKrSp95lMs2MjM3vpAvuj4Xx3T7pP4oE5Bg_0sb5-Gp-QiRTrHkqRIL5rvGd7fdw" },
              { label: "Dining", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF0GV6ZQbRmTqrw70UETnRBDpu8MoMWTIS6bmkT4YacKda_rfLW917IDe7qNnoQ9H3XwDyLCtkoNZwOmAwUZ7QL0CrAlS1Bt9RIWmr-yzRPK3ZxZ2E6wVQNioIlodmL5K5TuwbiYzhWg4ywzd6OXY1NPpO0HyFdo5oBoCGXlWDhNfTZtJg_IDxCIbRLHfyJGLryehyf6TgBs0vJfLR-nhKvecBu4RZIwOcEgIc08WGrcWmuFT9zUr9Gw" },
              { label: "Events", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPDDBG-KC8ic3UJOcLk1RoLuiH60DjA4dRZ-sqDvJFU2agFH2sC3tB-VzVT8X6j36pmetF2j-xozbXo5QMadqHphFpxmvoUTTscP0iKJTp7s9hjgVj-cUev_4YUmLgSg_gkMPM3fikssWW_C_Kz_WJGdo83a1nlJpmy0Y2GK6bGkcHmnb0LgQSWhA7FtvZC7w5qRDfw97KPVizqL1ZoHluxAnOzLbuKtEAfvQ6UdVGxQ3flg" },
              { label: "Wine", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARH5aQwNLpq30O_iQI0SbtdClaEnTgw-SqLdS4_BcF3aXTakeTyBRlxIyQV036myRk5sfN_nDZVSl5DaJRzcga3k7KnIabLi07ZXLaXic3nFWAvGIAdBAb912hQhuyU8TyNGdLpeTK1e-3jcTaCdbXVW4e8rhrOvynZeLkhRSBi2TfZIhGXlwnxswY3vibFfo6GI9DRHYLhi3zu5XZYA0_a_l8q4myLZsTRE1hej8Jh7LWhMl3m1sy6g" },
              { label: "Cars", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuUkn-Ya1Mr1bi-CxqoRamqDQbLcG0QO9BmU5VwX2Xykx_fZPFEeTRqI9H1yA9h0DdpwTDYwtI80Pp2HXJyozAnXaeJcoZtBvKwwelSGo5oMThqQVORhNGw53ROU_7PP-rcjdKduwcSEH-yUdL0zotDJIXAqLd_-JOa8Udo4ES_DRZi_x4ODREJHn0utrng1UnLvRpTLkqWytsbTLsUubpx28_giy9P5tDwdQPfhtrLoYMi3fxHnaaOw" },
              { label: "Security", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvU5lmtc-QI5V0ekYOObLeKiPsYv8PG2FNbnrY-_-CkuFfq6iDUZwo8nhp1Xp6I746sCoGdL_qcVNw1zdPVauuuh2V3uCaY6b1F9dhSBd-QZpM57IjDs04wk8Z2m-04RmebGwL8Evb4BF4zyaTzTlXEJT5QcChagalp0bsRMMRiFIBYIqTWXgMOhZv9tLMwyBzb3ZettLQkZyZnuLvYY5F8LtKNDaP818LKSF_RBxvcQcCCTCr_kIvcA" },
              { label: "Yachts", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL8IysjEAy5MeU9Crcl73ZGwpd8lz6ScfnWnnWcXB7VLLrLYPDjH0IXGMD0QFx9J2TAVeKmhf8m4T1pA_domahulPneYXwkLzz-saLnOODZo7HAPeyBseeSRgfu3Y08twZnUeyH5oV72PA_9BpfMOy13LFbTxUCDV4brtLYoFT_x_PgnXPjJ0kd-glCfGSV3JMgJE66UW44KOJ5evQcDKztZZNd4v0LtbiWpOy5v_KfmsDhivMj2EhXw" },
              { label: "Shopping", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCaKSYuNcQY8e5ORqNyU3CVHwdo319BP4U4BKxeOVV-TXA4-yYWhjPhRZvpmso81Rm_rzeBXQ-5ZC4LDgrjTRKjNajo-P-NoNWeQshrVdP2fImT_yJZ02WZUKPwsDO1Y1QxVaPy9vxoooqlqPKcxOJq3Pe-QOZfUIu4LmS-NMXF-rQtQ8d5z4m5KPWTFQb0wJh56JZnUTwM0KhrMtsVO3pWhIpJAu4IgQmbV9vG-uVRmvZR6ESUaGqsA" },
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
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBR-cMhxjgJqwb6z8vwuYOi8oyyzPs6fnyrkcf5HlQ5nCC51hJTw64w8jX4M3M2iFVlYVo3x_h1gkg63C6saWgqSruL8wysHCR36l2Azrg4NZQsmuzWAzBpL8EfpTGzOR_KnpHv78XOJygGpssva51BhoqZu3qu80ERl_WmAIkf7hrmrUurOb_DFqSRdwMHC22ApsfGo0pfq6Jxhsszr7gXnGxxnaZB0aoSTuRmtzsUkhSdFW-1GreHOg')" }}></div>
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
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAydN9tfir1woqDVTZf1t_M2yE01r4am-_H9ewVYz3vSag4uVIOYYQCyCuYhNqyV5ZqrUkB8jyySQUisDaTujWoSgVDGBkNOqFLB7VxiNVnDAfaKDrDygUXhdXWglYdTFFlGx12JRUS0X4oYazaxKJ41Gnb7uQnmyfSzCilIZfo_HnkgbeRHiIUw7Zz17pA7UnQMA54tyNaIkdIiNvJjWzHxwc0fwSNTxcaJtF_skKgjbyj22yX9NRZaQ')" }}></div>
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
      <section className="py-section-gap px-margin-desktop bg-[#f9f9f9]">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              tag: "Tasting",
              title: "Vertical Vintage Archive",
              desc: "A private exploration of 50 years of Bordeaux history in a secret Mayfair cellar.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9fLhy0R4POrcDIFdpYvsX1uWNhaBcO9G3TPgAulFP_ec63lAFBtPHXAGsLLU8lkr88yymeKGSgyLcB8JZLftpI07IUsbzp5IHLU6UErFcXeZuBo2OGoNY0xLCvw4J2R-et5CnCr__-NOo8hg06k_VdayrC1Aa39zuY12T5UFuuimnkHaNTD0nyJE_5lXiuoaOBsEZfFafzHZvrDbuA7-5_ABs1Tsi3FtyznJ1qRougUDG_Thxn4NYmw",
            },
            {
              tag: "Dining",
              title: "Chef's Table: Obsidian",
              desc: "A sensory 12-course narrative served in total darkness for only four guests.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsl1rY049C4S04n-0QolIiS5nnK2RQVjzgoFD4sGkFFkwlrk82QNHx9xl7XJqV9ARtKftlYmslT9jiVEYlmscd9gcywxY7BZJU2Pg3DsPDaFK5IcV0gFPz2_Zu9q8eX6oAHErlBNVYKovU06iUl9EjkwaaxyECibzBJ4fV6jQfqn4o33dEldGmQp7uC-RtfO73bt2wY1RqaQwf0TS3sQAlasfoTWcd33LzyCvbQe7fsCB02D8GDZns5g",
            },
            {
              tag: "Tours",
              title: "The Highlands Pursuit",
              desc: "Three days of precision driving through the Scottish Highlands with professional support.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ4yFuz_9fR3qYxz5sestRpCayvQ49mJXaIZPkPHHsVy4CU03YncSGIp9SpwDBsAdAaput9yV3-Q5rkpdSLpFoOavROVKCS2-UVo4H7tfLJplONu-tlQ4YSJ46_uGWa8tQ2IOSwS8YD-vk2iglVgSc9Yi93Ld33bgtn2uu0_oMMTFdp5SjpOdeaBBJP1vdZsurRqKomInyqQMSO8wraZbIZEu6XrgLJ1zInDtQuYMNVKE_vPM-25Gg-Q",
            },
          ].map(({ tag, title, desc, img }) => (
            <div key={title} className="flex flex-col">
              <div className="aspect-square bg-surface-container-high mb-8 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${img}')` }}></div>
              </div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4">{tag}</span>
              <h4 className="font-display-lg text-headline-sm mb-4 text-[#0b1221]">{title}</h4>
              <p className="font-body-md text-[#575e71] mb-6">{desc}</p>
              <a className="mt-auto font-label-caps text-label-caps uppercase tracking-widest text-secondary hover:text-[#0b1221] transition-colors" href="/">Enquire</a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Editorial Pillars — stays navy */}
      <section className="py-section-gap px-margin-desktop bg-primary-container border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[3/4] bg-surface-container-high">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGj8AajyDqUdsRxMfYXfg-reo6a79MpkRRFGfu8IwWX5E186buV3TEqOVKeF1eV7vxDZD6yNR6xlH0lQ6pEDSAp86_WWYV9nprCZPdEGgXP9LtzS57BmjUGOdZ-9-gUv6jGOLSmNyCdg2sBnhyel1SUoFegOzftsowcTyu-zclne7mnUjtPhghpdwsVBtdoSdAYH7WyVWn4u3Grl7fDuUbrlZIZvZEeLkjKsQNwdUboE8ZWntHosdvuQ')" }}></div>
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
      <section className="py-section-gap px-margin-desktop bg-[#f9f9f9]">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-24">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">The Inner Circle</span>
            <h3 className="font-display-lg text-headline-md mb-4 text-[#0b1221]">Membership Tiers</h3>
            <p className="max-w-2xl mx-auto text-[#575e71]">Entrance to Opulent Vault is by invitation or application only. Select your level of engagement with the exceptional.</p>
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
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfmg-8jP45tLkDi9fB79L3gISAr84hvLfB6ro7QUuytGGqi8g38sBFwLDOYcR_wQzEIlnDAUhHMYCQnV8ZDMNwAwwYLkBY_FDIc0_lzCZ7yxewKlIcNPpxktWCUVuMh8kwJDzjmKxNxZNXux-jXtmcaJ6b1YlVx33SG63qffKCnjEbVtnhTLGWT5y8PzcFJJn8LIfHCRXED9DjLbVU1vU2gWaayU4_2M_1VdWqoP5fS4GMmY3vPAgR8w')" }}
      >
        <div className="absolute inset-0 bg-primary-container/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-margin-desktop">
          <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8">Your Private Guardian Awaits.</h3>
          <p className="font-body-lg text-on-surface-variant mb-12">Immediate bespoke requests for members only.</p>
          <button className="bg-secondary text-primary-container px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]">Enter the Vault</button>
        </div>
      </section>

      {/* Section 10: Blog Preview — CREAM background */}
      <section className="py-section-gap px-margin-desktop bg-[#f9f9f9]">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Journal</span>
              <h3 className="font-display-lg text-headline-md text-[#0b1221]">The Vault Review</h3>
            </div>
            <a className="text-[#575e71] hover:text-secondary transition-colors font-label-caps text-label-caps uppercase tracking-widest border-b border-[#d5d5d5] pb-1" href="/">Read All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: "Horology",
                title: "The 2024 Silent Auction: Rare Timepieces of Note",
                desc: "A look inside the private rooms of the year's most anticipated horological event.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS6OUFJoCA_hYGBsQ3msroAXH1BC8SrF3VMhGr8gLf5dhNDDUH_ewomriXmGOfW6WcIJbEBxXmWPQ6Nlqvl8U2q2saVDCabnmTTjE3JQwj3tSgQNYSafX4n1M--i-2d1Wzv9Wp7wHKXUgyqUWOQQwFfjSt1mqgwAwZ-clcVqQSJfkDfg9ZcYp030Mn86sFETjnLOzjVChYE836gpDDJz8m7sYdKdn7V3P3O2QVFU67JEYsPs0aW9-quA",
              },
              {
                tag: "Travel",
                title: "Beyond Courchevel: The New Alpine Frontiers",
                desc: "Where the elite are seeking privacy this winter season.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrl1DkRo3HtcRKLfpLqJ5pnxDKJT95Kxch4tyy9YtesVCvxPrjKalLDnS7tykfBOtm2FpPd-IqUSyZLfjPqYbwu2BKofD-IWp8p6McKqV3bxx7LRYYeToPW5k-Uln-fuH7KC8kWNXKni6UtpdwxbLFKNeF9sQjsHFvLg3mjlBYfcB4HnTkMx5cdxr4EpX-JRb6Wu5OczbeDzNX3byNq8QTu8Rp9Qz-gOmT0gWbHNzBd10DPHpMgUUIrA",
              },
              {
                tag: "Intelligence",
                title: "The Future of Digital Privacy in Physical Spaces",
                desc: "How the Vault 4.0 protocol is redefining personal security for high-net-worth individuals.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyuWvUAr7Mg2fSBG9_QdFjHkVVTNEiOtORSrOd4H9Y1MjzMw3OxmNdMRHJI5Zst3GOVKINnVi1kXRNjTy4GocSHFNLjFrxsV9MBqzKNdMlVd2kJRk4uIpI2fHMYH-gG_2jWzBGa1R3oYaUNqiKHJQyS1TfT_C5nBlEPHxPL6ZMjF08h4A4LvNiPmVtdXxhMa1JhqNnSZCsGcxbU-RMhBiBlVRCQpKmGumPy3Q9rT9DQrTX6VE9A",
              },
            ].map(({ tag, title, desc, img }) => (
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

      {/* Footer */}
      <footer className="bg-[#fbf9f8] border-t border-[#dbdad9] py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter mb-16">
            <div>
              <a className="block mb-6" href="/" aria-label="OPV home">
                <img className="h-28 w-28 object-contain" src="/assets/opulent-vault-logo-transparent.png" alt="Opulent Vault logo" />
              </a>
              <p className="font-body-md text-[#575e71] text-sm mb-8">Opulent Vault is Manchester&apos;s curated luxury lifestyle concierge marketplace.</p>
              <div className="flex gap-5 text-[#575e71]">
                <a className="hover:text-secondary" href="https://www.instagram.com/" aria-label="Instagram"><span className="material-symbols-outlined">photo_camera</span></a>
                <a className="hover:text-secondary" href="https://www.linkedin.com/" aria-label="LinkedIn"><span className="material-symbols-outlined">business_center</span></a>
                <a className="hover:text-secondary" href="https://x.com/" aria-label="X"><span className="material-symbols-outlined">alternate_email</span></a>
                <a className="hover:text-secondary" href="https://www.facebook.com/" aria-label="Facebook"><span className="material-symbols-outlined">groups</span></a>
                <a className="hover:text-secondary" href="https://www.youtube.com/" aria-label="YouTube"><span className="material-symbols-outlined">play_circle</span></a>
              </div>
            </div>
            <div>
              <h6 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">Services</h6>
              <ul className="space-y-3 font-body-md text-[#575e71] text-sm">
                <li><a className="hover:text-secondary transition-colors" href="/services/luxury-stays/">Luxury Stays</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/services/private-dining/">Private Dining</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/services/events-experiences/">Events &amp; Experiences</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/services/wine-tasting/">Wine Tasting</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/services/private-tours/">Private Tours</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/services/vip-security/">VIP &amp; Celebrity Security</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/services/car-rentals/">Luxury Car Rentals</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/services/private-jet/">Private Jet</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">Company</h6>
              <ul className="space-y-3 font-body-md text-[#575e71] text-sm">
                <li><a className="hover:text-secondary transition-colors" href="/about/">About OPV</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/partners/apply/">Become a Host or Partner</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/affiliates/">Affiliate Programme</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/blog/">Blog &amp; Editorial</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/faqs/">FAQs</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/contact/">Contact</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">Legal</h6>
              <ul className="space-y-3 font-body-md text-[#575e71] text-sm">
                <li><a className="hover:text-secondary transition-colors" href="/legal/terms">Terms &amp; Conditions</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/legal/privacy">Privacy Policy</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/legal/verification">Verification Policy</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/legal/cancellation">Cancellation &amp; Refund Policy</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/legal/cookies">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">Stay in the Know</h6>
              <p className="font-body-md text-[#575e71] text-sm mb-6">Private invitations, editorial notes, and verified luxury access from the Vault.</p>
              <form className="flex flex-col gap-3" action="/contact/">
                <input className="bg-transparent border-0 border-b border-[#dbdad9] text-[#1e2020] placeholder:text-[#575e71] focus:border-secondary focus:ring-0 px-0" type="email" placeholder="Email address" />
                <button className="bg-secondary text-primary-container px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest font-bold hover:bg-[#1e2020] hover:text-white transition-colors" type="submit">Subscribe</button>
              </form>
              <p className="font-body-md text-[#575e71] text-xs mt-4">Your details remain private and are used only for OPV communications.</p>
            </div>
          </div>
          <div className="border-t border-[#dbdad9] py-2">
            <div className="max-w-4xl mx-auto flex flex-col xl:flex-row items-center justify-center gap-3">
              <p className="font-body-md text-[#575e71] text-[10px] shrink-0">@2026 OPULENT VAULT.</p>
              <div className="flex items-center justify-center gap-2 shrink-0">
                <span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Available on</span>
                <a className="inline-flex" href="https://www.apple.com/app-store/" aria-label="Download on the App Store">
                  <img className="h-6 w-auto object-contain" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                </a>
                <a className="inline-flex" href="https://play.google.com/store" aria-label="Get it on Google Play">
                  <img className="h-6 w-auto object-contain" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                </a>
              </div>
              <div className="flex items-center justify-center gap-1.5 shrink-0">
                <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-2" aria-label="Visa">
                  <img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/visa/1A1F71" alt="Visa" />
                </div>
                <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-1.5" aria-label="Mastercard">
                  <img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/mastercard/EB001B" alt="Mastercard" />
                </div>
                <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-1.5" aria-label="American Express">
                  <img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/americanexpress/2E77BC" alt="Amex" />
                </div>
                <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-1.5" aria-label="PayPal">
                  <img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/paypal/003087" alt="PayPal" />
                </div>
                <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-1.5" aria-label="Klarna">
                  <img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/klarna/FFB3C7" alt="Klarna" />
                </div>
              </div>
              <a className="font-label-caps text-[10px] uppercase tracking-widest text-[#575e71] hover:text-secondary shrink-0" href="/legal/privacy">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
