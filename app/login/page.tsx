export default function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary-container px-margin-mobile">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">Member Access</span>
          <h1 className="font-display-lg text-headline-md text-on-surface mb-4">Welcome Back</h1>
          <p className="font-body-md text-on-surface-variant">Access your Opulent Vault account.</p>
        </div>
        <div className="border border-outline-variant/20 p-10 bg-surface-container-lowest">
          <form className="space-y-6">
            <div>
              <label className="font-label-caps text-[10px] uppercase tracking-widest text-secondary block mb-2">Email Address</label>
              <input type="email" placeholder="your@email.com" className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary pb-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="font-label-caps text-[10px] uppercase tracking-widest text-secondary block mb-2">Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary pb-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none transition-colors" />
            </div>
            <button type="submit" className="w-full bg-secondary text-primary-container py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors mt-4">Sign In</button>
          </form>
          <div className="mt-8 text-center space-y-3">
            <a href="#" className="block font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors">Forgot Password?</a>
            <p className="font-body-md text-sm text-on-surface-variant">Not a member? <a href="/membership/" className="text-secondary hover:text-white transition-colors">Apply for membership</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
