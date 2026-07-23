"use client";

import { useState } from "react";

const CAPABILITIES = [
  { icon: "home", label: "Property Recommendations" },
  { icon: "directions_car", label: "Vehicle Recommendations" },
  { icon: "flight", label: "Private Jet Requests" },
  { icon: "security", label: "Security Bookings" },
  { icon: "concierge_service", label: "Concierge Requests" },
  { icon: "explore", label: "Experience Planning" },
  { icon: "map", label: "Travel Planning" },
  { icon: "support_agent", label: "Booking Support" },
];

export default function AIConciergeWidget() {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", request: "", service: "Property Recommendations" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "concierge_request",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.request,
          payload: { service: form.service },
        }),
      });
      setSubmitted(true);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating gold trigger */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
        <button
          onClick={() => { setOpen(!open); setFormOpen(false); setSubmitted(false); }}
          className="w-16 h-16 rounded-full bg-secondary border border-secondary flex items-center justify-center shadow-[0_8px_32px_rgba(233,195,73,0.4)] hover:scale-105 transition-all duration-300"
          aria-label="AI Concierge"
        >
          <span className="material-symbols-outlined text-primary-container text-2xl">auto_awesome</span>
        </button>
      </div>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-32 right-8 z-50 w-[360px] bg-primary-container/95 backdrop-blur-xl border border-secondary/30 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
          {/* Header */}
          <div className="border-b border-outline-variant/30 px-6 py-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-secondary text-base">auto_awesome</span>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">OPV AI Concierge</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                <span className="font-body-md text-xs text-on-surface-variant">Online — Ready to assist</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-on-surface-variant hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {!formOpen ? (
            <div className="p-6">
              <p className="font-body-md text-sm text-on-surface-variant mb-5 leading-relaxed">
                Your personal AI-powered concierge. How may I assist you today?
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {CAPABILITIES.map((cap) => (
                  <button
                    key={cap.label}
                    onClick={() => { setForm((f) => ({ ...f, service: cap.label })); setFormOpen(true); }}
                    className="flex items-center gap-2 border border-outline-variant/40 px-3 py-3 text-left hover:border-secondary/60 hover:bg-white/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-secondary text-sm">{cap.icon}</span>
                    <span className="font-body-md text-xs text-on-surface leading-tight">{cap.label}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setFormOpen(true)}
                className="w-full bg-secondary text-primary-container font-label-caps text-label-caps py-4 uppercase tracking-widest hover:bg-white transition-colors"
              >
                Start a Request
              </button>
            </div>
          ) : submitted ? (
            <div className="p-6 text-center">
              <span className="material-symbols-outlined text-secondary text-3xl mb-3 block">check_circle</span>
              <p className="font-display-lg text-headline-sm text-on-surface mb-2">Request Received</p>
              <p className="font-body-md text-sm text-on-surface-variant">
                Your concierge request has been submitted. A member of the Opulent Vault team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="mb-2">
                <span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">{form.service}</span>
              </div>
              <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required className="w-full border-b border-outline-variant/40 focus:border-secondary bg-transparent pb-2 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none transition-colors" />
              <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} required className="w-full border-b border-outline-variant/40 focus:border-secondary bg-transparent pb-2 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none transition-colors" />
              <input type="tel" placeholder="Phone Number (optional)" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className="w-full border-b border-outline-variant/40 focus:border-secondary bg-transparent pb-2 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none transition-colors" />
              <textarea placeholder="Tell us about your request..." value={form.request} onChange={(e) => setForm((f) => ({ ...f, request: e.target.value }))} required rows={3} className="w-full border-b border-outline-variant/40 focus:border-secondary bg-transparent pb-2 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none resize-none transition-colors" />
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setFormOpen(false)} className="flex-1 border border-outline-variant/40 font-label-caps text-label-caps text-on-surface-variant py-3 uppercase hover:border-secondary transition-colors">Back</button>
                <button type="submit" disabled={loading} className="flex-1 bg-secondary text-primary-container font-label-caps text-label-caps py-3 uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50">{loading ? "Sending..." : "Submit"}</button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
}
