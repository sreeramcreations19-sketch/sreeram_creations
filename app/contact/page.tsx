"use client";

import { useState } from "react";
import { SITE_METADATA } from "@/data/content";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding Photography",
    eventDate: "",
    location: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send inquiry.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="bg-[#1a1c1c] text-white py-24 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A] font-semibold">
            Private Consultations
          </span>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight">
            Reserve Your Dates
          </h1>
          <p className="text-xs md:text-sm text-[#cfc4c5] font-light leading-relaxed max-w-xl mx-auto uppercase tracking-[0.15em] pt-2">
            Inquire regarding date availability, international destination logistics, and bespoke studio quotes.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#735b24] font-semibold block mb-2">
                Concierge Desk
              </span>
              <h2 className="font-serif text-3xl text-black">
                We Would Love to Hear From You
              </h2>
              <p className="text-xs text-[#4c4546] leading-relaxed mt-4">
                To preserve the highest level of craftsmanship and individual focus, Sreeram Creations accepts a limited number of commissions each calendar year.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#eeeeee]">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#735b24] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base text-black">Main Studio</h4>
                  <p className="text-xs text-[#4c4546]">{SITE_METADATA.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#735b24] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base text-black">Direct Line</h4>
                  <p className="text-xs text-[#4c4546]">{SITE_METADATA.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#735b24] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base text-black">Inquiries</h4>
                  <p className="text-xs text-[#4c4546]">{SITE_METADATA.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#735b24] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base text-black">Studio Hours</h4>
                  <p className="text-xs text-[#4c4546]">
                    Monday – Saturday: 10:00 AM – 7:00 PM IST (By Appointment)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#eeeeee] p-8 md:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-[#735b24] mx-auto" />
                <h3 className="font-serif text-3xl text-black">
                  Consultation Request Received
                </h3>
                <p className="text-xs text-[#4c4546] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-black">{formData.name}</strong>. Our senior concierge manager will review your event details and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#000000] text-white px-8 py-3 text-xs uppercase tracking-[0.15em] font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="font-serif text-2xl text-black border-b border-[#eeeeee] pb-4">
                  Event Inquiry Form
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.15em] text-[#4c4546] font-semibold block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Lady Ananya Rao"
                      className="w-full bg-transparent border-b border-[#000000] py-2 text-xs text-black focus:outline-none focus:border-[#C8A96A]"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.15em] text-[#4c4546] font-semibold block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="ananya@example.com"
                      className="w-full bg-transparent border-b border-[#000000] py-2 text-xs text-black focus:outline-none focus:border-[#C8A96A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.15em] text-[#4c4546] font-semibold block">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent border-b border-[#000000] py-2 text-xs text-black focus:outline-none focus:border-[#C8A96A]"
                    />
                  </div>

                  {/* Event Type Select */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.15em] text-[#4c4546] font-semibold block">
                      Collection / Specialty
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#000000] py-2 text-xs text-black focus:outline-none focus:border-[#C8A96A]"
                    >
                      <option value="Wedding Photography">
                        Traditional Wedding & Reception
                      </option>
                      <option value="Pre-Wedding">
                        Pre-Wedding Destination Shoot
                      </option>
                      <option value="Corporate Event">
                        Corporate Gala & Executive Summit
                      </option>
                      <option value="Maternity Fine Art">
                        Maternity & Newborn Fine Art
                      </option>
                      <option value="Aerial & Commercial">
                        Aerial Cinematography & Commercial
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Event Date */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.15em] text-[#4c4546] font-semibold block">
                      Anticipated Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) =>
                        setFormData({ ...formData, eventDate: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#000000] py-2 text-xs text-black focus:outline-none focus:border-[#C8A96A]"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.15em] text-[#4c4546] font-semibold block">
                      Event Destination / Venue
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="e.g. Udaipur, Lake Como, Hyderabad"
                      className="w-full bg-transparent border-b border-[#000000] py-2 text-xs text-black focus:outline-none focus:border-[#C8A96A]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.15em] text-[#4c4546] font-semibold block">
                    Share Your Vision & Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your celebration, guest scale, styling expectations..."
                    className="w-full bg-transparent border-b border-[#000000] py-2 text-xs text-black focus:outline-none focus:border-[#C8A96A] resize-none"
                  />
                </div>

                {error ? (
                  <p className="text-xs text-[#b53939] bg-[#fdecee] border border-[#f7c8c8] rounded-2xl px-4 py-3">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#C8A96A] hover:bg-[#B59556] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>{sending ? "Sending Inquiry…" : "Submit Private Inquiry"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
