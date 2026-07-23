const SERVICES = [
  { label: "Luxury Stays", desc: "Verified properties and private residences", href: "/services/luxury-stays/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABfZjiVm7_k8r2vW_05DwGBno0TH0oBNbZj9MeLqb2B3xBXYWkRcPEUAi8Ac1AiPdjFpAeCLXhnE832U7HwVB1H4CrNC0xJLKAKqizfaHkvIxfW1YNiVWuBgE9En1h6GfmgxIu4x-AtLMccBSyZqmMLiBxg_ZwEzwixug_S9q2t48J36jp0eUz4xoKrSp95lMs2MjM3vpAvuj4Xx3T7pP4oE5Bg_0sb5-Gp-QiRTrHkqRIL5rvGd7fdw" },
  { label: "Private Dining", desc: "Chefs, tastings, and hosted tables", href: "/services/private-dining/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF0GV6ZQbRmTqrw70UETnRBDpu8MoMWTIS6bmkT4YacKda_rfLW917IDe7qNnoQ9H3XwDyLCtkoNZwOmAwUZ7QL0CrAlS1Bt9RIWmr-yzRPK3ZxZ2E6wVQNioIlodmL5K5TuwbiYzhWg4ywzd6OXY1NPpO0HyFdo5oBoCGXlWDhNfTZtJg_IDxCIbRLHfyJGLryehyf6TgBs0vJfLR-nhKvecBu4RZIwOcEgIc08WGrcWmuFT9zUr9Gw" },
  { label: "Events & Experiences", desc: "Member events and rare access", href: "/services/events-experiences/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPDDBG-KC8ic3UJOcLk1RoLuiH60DjA4dRZ-sqDvJFU2agFH2sC3tB-VzVT8X6j36pmetF2j-xozbXo5QMadqHphFpxmvoUTTscP0iKJTp7s9hjgVj-cUev_4YUmLgSg_gkMPM3fikssWW_C_Kz_WJGdo83a1nlJpmy0Y2GK6bGkcHmnb0LgQSWhA7FtvZC7w5qRDfw97KPVizqL1ZoHluxAnOzLbuKtEAfvQ6UdVGxQ3flg" },
  { label: "Wine Tasting", desc: "Cellars, vintages, and private tastings", href: "/services/wine-tasting/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARH5aQwNLpq30O_iQI0SbtdClaEnTgw-SqLdS4_BcF3aXTakeTyBRlxIyQV036myRk5sfN_nDZVSl5DaJRzcga3k7KnIabLi07ZXLaXic3nFWAvGIAdBAb912hQhuyU8TyNGdLpeTK1e-3jcTaCdbXVW4e8rhrOvynZeLkhRSBi2TfZIhGXlwnxswY3vibFfo6GI9DRHYLhi3zu5XZYA0_a_l8q4myLZsTRE1hej8Jh7LWhMl3m1sy6g" },
  { label: "Private Tours", desc: "Guided journeys with expert hosts", href: "/services/private-tours/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ4yFuz_9fR3qYxz5sestRpCayvQ49mJXaIZPkPHHsVy4CU03YncSGIp9SpwDBsAdAaput9yV3-Q5rkpdSLpFoOavROVKCS2-UVo4H7tfLJplONu-tlQ4YSJ46_uGWa8tQ2IOSwS8YD-vk2iglVgSc9Yi93Ld33bgtn2uu0_oMMTFdp5SjpOdeaBBJP1vdZsurRqKomInyqQMSO8wraZbIZEu6XrgLJ1zInDtQuYMNVKE_vPM-25Gg-Q" },
  { label: "VIP & Celebrity Security", desc: "Confidential protection requests", href: "/services/vip-security/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvU5lmtc-QI5V0ekYOObLeKiPsYv8PG2FNbnrY-_-CkuFfq6iDUZwo8nhp1Xp6I746sCoGdL_qcVNw1zdPVauuuh2V3uCaY6b1F9dhSBd-QZpM57IjDs04wk8Z2m-04RmebGwL8Evb4BF4zyaTzTlXEJT5QcChagalp0bsRMMRiFIBYIqTWXgMOhZv9tLMwyBzb3ZettLQkZyZnuLvYY5F8LtKNDaP818LKSF_RBxvcQcCCTCr_kIvcA" },
  { label: "Luxury Car Rentals", desc: "Self-drive and chauffeur vehicles", href: "/services/car-rentals/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuUkn-Ya1Mr1bi-CxqoRamqDQbLcG0QO9BmU5VwX2Xykx_fZPFEeTRqI9H1yA9h0DdpwTDYwtI80Pp2HXJyozAnXaeJcoZtBvKwwelSGo5oMThqQVORhNGw53ROU_7PP-rcjdKduwcSEH-yUdL0zotDJIXAqLd_-JOa8Udo4ES_DRZi_x4ODREJHn0utrng1UnLvRpTLkqWytsbTLsUubpx28_giy9P5tDwdQPfhtrLoYMi3fxHnaaOw" },
  { label: "Private Jet", desc: "Private aircraft and aviation concierge", href: "/services/private-jet/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL8IysjEAy5MeU9Crcl73ZGwpd8lz6ScfnWnnWcXB7VLLrLYPDjH0IXGMD0QFx9J2TAVeKmhf8m4T1pA_domahulPneYXwkLzz-saLnOODZo7HAPeyBseeSRgfu3Y08twZnUeyH5oV72PA_9BpfMOy13LFbTxUCDV4brtLYoFT_x_PgnXPjJ0kd-glCfGSV3JMgJE66UW44KOJ5evQcDKztZZNd4v0LtbiWpOy5v_KfmsDhivMj2EhXw" },
  { label: "Yacht Services", desc: "Charters, crews, and event hire", href: "/services/yacht-services/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCaKSYuNcQY8e5ORqNyU3CVHwdo319BP4U4BKxeOVV-TXA4-yYWhjPhRZvpmso81Rm_rzeBXQ-5ZC4LDgrjTRKjNajo-P-NoNWeQshrVdP2fImT_yJZ02WZUKPwsDO1Y1QxVaPy9vxoooqlqPKcxOJq3Pe-QOZfUIu4LmS-NMXF-rQtQ8d5z4m5KPWTFQb0wJh56JZnUTwM0KhrMtsVO3pWhIpJAu4IgQmbV9vG-uVRmvZR6ESUaGqsA" },
  { label: "Cleaning & Lifestyle", desc: "Housekeeping and property care", href: "/services/cleaning-lifestyle/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABfZjiVm7_k8r2vW_05DwGBno0TH0oBNbZj9MeLqb2B3xBXYWkRcPEUAi8Ac1AiPdjFpAeCLXhnE832U7HwVB1H4CrNC0xJLKAKqizfaHkvIxfW1YNiVWuBgE9En1h6GfmgxIu4x-AtLMccBSyZqmMLiBxg_ZwEzwixug_S9q2t48J36jp0eUz4xoKrSp95lMs2MjM3vpAvuj4Xx3T7pP4oE5Bg_0sb5-Gp-QiRTrHkqRIL5rvGd7fdw" },
  { label: "Videography & Photography", desc: "Luxury creative coverage", href: "/services/videography-photography/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF0GV6ZQbRmTqrw70UETnRBDpu8MoMWTIS6bmkT4YacKda_rfLW917IDe7qNnoQ9H3XwDyLCtkoNZwOmAwUZ7QL0CrAlS1Bt9RIWmr-yzRPK3ZxZ2E6wVQNioIlodmL5K5TuwbiYzhWg4ywzd6OXY1NPpO0HyFdo5oBoCGXlWDhNfTZtJg_IDxCIbRLHfyJGLryehyf6TgBs0vJfLR-nhKvecBu4RZIwOcEgIc08WGrcWmuFT9zUr9Gw" },
  { label: "Personal Shopping", desc: "Private sourcing and wardrobe support", href: "/services/personal-shopping/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCaKSYuNcQY8e5ORqNyU3CVHwdo319BP4U4BKxeOVV-TXA4-yYWhjPhRZvpmso81Rm_rzeBXQ-5ZC4LDgrjTRKjNajo-P-NoNWeQshrVdP2fImT_yJZ02WZUKPwsDO1Y1QxVaPy9vxoooqlqPKcxOJq3Pe-QOZfUIu4LmS-NMXF-rQtQ8d5z4m5KPWTFQb0wJh56JZnUTwM0KhrMtsVO3pWhIpJAu4IgQmbV9vG-uVRmvZR6ESUaGqsA" },
  { label: "Luxury Products", desc: "Curated goods and private sourcing", href: "/services/luxury-products/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCaKSYuNcQY8e5ORqNyU3CVHwdo319BP4U4BKxeOVV-TXA4-yYWhjPhRZvpmso81Rm_rzeBXQ-5ZC4LDgrjTRKjNajo-P-NoNWeQshrVdP2fImT_yJZ02WZUKPwsDO1Y1QxVaPy9vxoooqlqPKcxOJq3Pe-QOZfUIu4LmS-NMXF-rQtQ8d5z4m5KPWTFQb0wJh56JZnUTwM0KhrMtsVO3pWhIpJAu4IgQmbV9vG-uVRmvZR6ESUaGqsA" },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-[#f9f9f9] pt-40 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Ecosystem</span>
          <h1 className="font-display-lg text-headline-md text-[#0b1221] mb-4">All Services</h1>
          <p className="font-body-lg text-[#575e71] max-w-2xl">Every provider on our platform undergoes a rigorous 40-point verification protocol.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SERVICES.map(({ label, desc, href, img }) => (
            <a key={label} href={href} className="group block">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden relative mb-4">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h4 className="font-display-lg text-headline-sm text-on-surface">{label}</h4>
                </div>
              </div>
              <p className="font-body-md text-sm text-[#575e71]">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
