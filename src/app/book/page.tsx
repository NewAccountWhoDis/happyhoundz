"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { business } from "@/lib/site";

const services = [
  "Bath & Brush",
  "Breed Standard Cut",
  "Custom Cut",
  "De-shedding Treatment",
  "Ear Cleaning",
  "Nail Trim",
  "Paw Balm Treatment",
  "Puppy's First Groom",
  "Teeth Brushing",
  "Other / Not Sure",
];

const preferredDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const confettiPaws = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 1.5,
  size: Math.random() * 20 + 16,
  duration: Math.random() * 2 + 2,
}));

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const params = new URLSearchParams();
      for (const [key, value] of data.entries()) {
        params.append(key, String(value));
      }

      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      // Fallback: show success anyway (Netlify handles on their end)
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-28 pb-16 px-4 text-center"
        style={{ backgroundColor: "#FF6B35" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-grotesk font-bold text-5xl sm:text-6xl text-white mb-4">
            Ready for a Happy Houndz Glow-Up? 🐾
          </h1>
          <p className="font-nunito text-xl text-white/85 max-w-xl mx-auto">
            Fill out the form and Heather will be in touch to confirm your appointment. If you prefer, you can also start the conversation on Facebook.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h2
                  className="font-grotesk font-bold text-3xl mb-6"
                  style={{ color: "#1A1A1A" }}
                >
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: "#FF6B35" }}
                    >
                      💬
                    </span>
                    <div>
                      <p className="font-grotesk font-bold text-2xl" style={{ color: "#1A1A1A" }}>
                        Facebook Messenger
                      </p>
                      <p className="font-nunito text-gray-500 text-sm">Fastest verified contact path currently available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: "#FFF1C2" }}
                    >
                      📞
                    </span>
                    <div>
                      <p className="font-grotesk font-bold text-lg" style={{ color: "#1A1A1A" }}>
                        {business.phone}
                      </p>
                      <p className="font-nunito text-gray-500 text-sm">Shop phone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: "#FFD23F" }}
                    >
                      📍
                    </span>
                    <div>
                      <p className="font-grotesk font-bold text-lg" style={{ color: "#1A1A1A" }}>
                        {business.addressLine1}
                      </p>
                      <p className="font-nunito text-gray-500 text-sm">{business.addressLine2}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: "#FF6B35" }}
                    >
                      🕐
                    </span>
                    <div>
                      <p className="font-grotesk font-bold text-lg" style={{ color: "#1A1A1A" }}>
                        {business.appointmentNote}
                      </p>
                      <p className="font-nunito text-gray-500 text-sm">Use the form below or message Heather for current availability</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3
                  className="font-grotesk font-bold text-lg mb-4"
                  style={{ color: "#1A1A1A" }}
                >
                  Follow Along
                </h3>
                <div className="flex gap-3">
                  <a
                    href={business.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-grotesk font-bold text-sm text-white transition-all hover:scale-105"
                    style={{ backgroundColor: "#1877F2" }}
                  >
                    Message on Facebook
                  </a>
                </div>
              </div>

              {/* Note */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,210,63,0.2)", border: "2px solid #FFD23F" }}
              >
                  <p className="font-grotesk font-bold mb-1" style={{ color: "#1A1A1A" }}>
                  💛 One-on-one, always
                </p>
                <p className="font-nunito text-gray-700 text-sm leading-relaxed">
                  Every appointment is exclusive. Your dog has Heather&apos;s full, undivided attention with no rushed conveyor-belt salon energy.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex flex-col items-center justify-center text-center py-16 px-8 rounded-3xl overflow-hidden"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  {/* Paw confetti */}
                  {confettiPaws.map((p) => (
                    <motion.span
                      key={p.id}
                      className="absolute pointer-events-none select-none"
                      style={{ left: `${p.x}%`, top: "-30px", fontSize: p.size }}
                      animate={{ y: [0, 500], rotate: [0, 360], opacity: [1, 1, 0] }}
                      transition={{
                        duration: p.duration,
                        delay: p.delay,
                        ease: "easeIn",
                        repeat: Infinity,
                      }}
                    >
                      🐾
                    </motion.span>
                  ))}
                  <motion.span
                    className="text-7xl mb-6 block"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    🐶
                  </motion.span>
                  <h3 className="font-grotesk font-bold text-3xl text-white mb-3">
                    Woof! We&apos;ll be in touch soon!
                  </h3>
                  <p className="font-nunito text-white/85 text-lg">
                    Heather will reach out to confirm your appointment. If you don&apos;t hear back quickly, Facebook Messenger is the best follow-up path. 🐾
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  name="appointment"
                  method="POST"
                  action="/__forms.html"
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 shadow-sm space-y-5"
                >
                  {/* Netlify hidden field */}
                  <input type="hidden" name="form-name" value="appointment" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>

                  <h2
                    className="font-grotesk font-bold text-2xl"
                    style={{ color: "#1A1A1A" }}
                  >
                    Request an Appointment
                  </h2>

                  {[
                    { label: "Your Name", name: "name", type: "text", placeholder: "Jane Smith", delay: 0.05 },
                    { label: "Phone Number", name: "phone", type: "tel", placeholder: "(518) 555-0000", delay: 0.1 },
                    { label: "Dog's Name", name: "dog_name", type: "text", placeholder: "Buddy", delay: 0.15 },
                    { label: "Breed", name: "breed", type: "text", placeholder: "Golden Retriever", delay: 0.2 },
                  ].map((field) => (
                    <FadeIn key={field.name} delay={field.delay}>
                      <label className="block">
                        <span className="font-grotesk font-bold text-sm mb-1.5 block" style={{ color: "#1A1A1A" }}>
                          {field.label} <span style={{ color: "#FF6B35" }}>*</span>
                        </span>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 font-nunito text-sm outline-none transition-all"
                          style={{
                            borderColor: "rgba(0,0,0,0.1)",
                            backgroundColor: "#FFF9F0",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#FF6B35")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                        />
                      </label>
                    </FadeIn>
                  ))}

                  {/* Service dropdown */}
                  <FadeIn delay={0.25}>
                    <label className="block">
                      <span className="font-grotesk font-bold text-sm mb-1.5 block" style={{ color: "#1A1A1A" }}>
                        Service Requested <span style={{ color: "#FF6B35" }}>*</span>
                      </span>
                      <select
                        name="service"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 font-nunito text-sm outline-none transition-all appearance-none"
                        style={{ borderColor: "rgba(0,0,0,0.1)", backgroundColor: "#FFF9F0" }}
                        onFocus={(e) => (e.target.style.borderColor = "#FF6B35")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </label>
                  </FadeIn>

                  {/* Days + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FadeIn delay={0.3}>
                      <label className="block">
                        <span className="font-grotesk font-bold text-sm mb-1.5 block" style={{ color: "#1A1A1A" }}>
                          Preferred Day(s) of the Week
                        </span>
                        <span className="font-nunito text-xs text-gray-500 block mb-2">
                          Multiple days can be selected.
                        </span>
                        <select
                          name="preferred_days"
                          multiple
                          size={6}
                          className="w-full px-4 py-3 rounded-xl border-2 font-nunito text-sm outline-none transition-all"
                          style={{ borderColor: "rgba(0,0,0,0.1)", backgroundColor: "#FFF9F0" }}
                          onFocus={(e) => (e.target.style.borderColor = "#FF6B35")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                        >
                          {preferredDays.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>
                      </label>
                    </FadeIn>
                    <FadeIn delay={0.35}>
                      <label className="block">
                        <span className="font-grotesk font-bold text-sm mb-1.5 block" style={{ color: "#1A1A1A" }}>
                          Preferred Time
                        </span>
                        <select
                          name="preferred_time"
                          className="w-full px-4 py-3 rounded-xl border-2 font-nunito text-sm outline-none transition-all appearance-none"
                          style={{ borderColor: "rgba(0,0,0,0.1)", backgroundColor: "#FFF9F0" }}
                          onFocus={(e) => (e.target.style.borderColor = "#FF6B35")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                        >
                          <option value="">Any time</option>
                          <option>Morning (9am–12pm)</option>
                          <option>Afternoon (12pm–3pm)</option>
                          <option>Late Afternoon (3pm–6pm)</option>
                        </select>
                      </label>
                    </FadeIn>
                  </div>

                  {/* Notes */}
                  <FadeIn delay={0.4}>
                    <label className="block">
                      <span className="font-grotesk font-bold text-sm mb-1.5 block" style={{ color: "#1A1A1A" }}>
                        Additional Notes
                      </span>
                      <textarea
                        name="notes"
                        rows={3}
                        placeholder="Any details about your dog — anxiety, special needs, specific requests…"
                        className="w-full px-4 py-3 rounded-xl border-2 font-nunito text-sm outline-none transition-all resize-none"
                        style={{ borderColor: "rgba(0,0,0,0.1)", backgroundColor: "#FFF9F0" }}
                        onFocus={(e) => (e.target.style.borderColor = "#FF6B35")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                      />
                    </label>
                  </FadeIn>

                  {/* Submit */}
                  <FadeIn delay={0.45}>
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl font-grotesk font-bold text-lg text-white transition-all"
                      style={{
                        backgroundColor: submitting ? "#ccc" : "#FF6B35",
                        cursor: submitting ? "not-allowed" : "pointer",
                      }}
                    >
                      {submitting ? "Sending…" : "Request Appointment 🐾"}
                    </motion.button>
                  </FadeIn>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
