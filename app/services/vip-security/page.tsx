export default function ServicePage() {
  return (
    <section className="min-h-screen bg-primary-container pt-40 pb-24 px-margin-mobile md:px-margin-desktop flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6 block">OPV Services</span>
        <h1 className="font-display-lg text-display-lg-mobile text-on-surface mb-8">Bespoke Service</h1>
        <p className="font-body-lg text-on-surface-variant mb-12">This service is available exclusively to Opulent Vault members. Contact our concierge team to arrange your bespoke experience.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact/" className="bg-secondary text-primary-container px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors">Enquire Now</a>
          <a href="/membership/" className="border border-secondary text-secondary px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary hover:text-primary-container transition-colors">View Membership</a>
        </div>
      </div>
    </section>
  );
}
