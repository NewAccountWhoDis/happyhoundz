"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { business } from "@/lib/site";

const categories = [
  {
    id: "baths",
    label: "Bathing",
    eyebrow: "Foundational Care",
    intro:
      "For coats that need a fresh reset, de-shedding support, and a polished finish without a haircut.",
    services: [
      {
        name: "Bath & Brush",
        desc: "A full shampoo, conditioner, blow-dry, and brush-out with ear cleaning and nail filing.",
        price: "Starting at $45",
      },
      {
        name: "De-shedding Treatment",
        desc: "A more intensive bath and coat-release service designed for heavy seasonal shedding.",
        price: "Starting at $55",
      },
    ],
  },
  {
    id: "grooms",
    label: "Full Grooms",
    eyebrow: "Signature Appointments",
    intro:
      "For dogs who need shape, style, and coat maintenance delivered with a slower, one-on-one rhythm.",
    services: [
      {
        name: "Breed Standard Cut",
        desc: "A polished cut guided by breed expectations, coat type, and overall balance.",
        price: "Starting at $65",
      },
      {
        name: "Custom Cut",
        desc: "A personalized trim shaped around lifestyle, maintenance goals, and the look you prefer.",
        price: "Starting at $60",
      },
      {
        name: "Puppy's First Groom",
        desc: "A calm first introduction focused on comfort, pacing, and positive association.",
        price: "Starting at $50",
      },
    ],
  },
  {
    id: "alacarte",
    label: "A La Carte",
    eyebrow: "Targeted Touch-Ups",
    intro:
      "For quick maintenance visits or smaller services added to a larger appointment.",
    services: [
      {
        name: "Nail Trim",
        desc: "A quick, precise nail service available on its own or added to grooming.",
        price: "Starting at $15",
      },
      {
        name: "Teeth Brushing",
        desc: "A simple refresh using dog-safe toothpaste for cleaner breath and a tidier finish.",
        price: "Starting at $10",
      },
      {
        name: "Ear Cleaning",
        desc: "Gentle ear care to remove buildup and support comfort between full appointments.",
        price: "Starting at $10",
      },
      {
        name: "Paw Balm Treatment",
        desc: "A conditioning finish for dry or weather-worn paw pads.",
        price: "Starting at $10",
      },
    ],
  },
  {
    id: "addons",
    label: "Finishing Details",
    eyebrow: "Optional Extras",
    intro:
      "Small extras that make the appointment feel complete and send your dog home looking especially polished.",
    services: [
      {
        name: "Bandana or Bow",
        desc: "A complimentary finishing touch chosen to suit the final look.",
        price: "Complimentary",
      },
      {
        name: "Blueberry Facial",
        desc: "A gentle facial treatment for brightening and softening the fur around the face.",
        price: "Starting at $12",
      },
      {
        name: "Cologne Spritz",
        desc: "A light dog-safe finishing scent for a fresher post-groom feel.",
        price: "Starting at $5",
      },
    ],
  },
];

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? categories : categories.filter((c) => c.id === active);

  return (
    <>
      <section
        className="pt-28 pb-18 px-4 sm:px-6"
        style={{ backgroundColor: "#FF6B35" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-nunito font-bold text-sm uppercase tracking-[0.24em] text-white/80 mb-5">
              Grooming Services
            </p>
            <h1 className="font-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-5">
              Grooming That Feels Personal
            </h1>
            <p className="font-nunito text-xl text-white/85 max-w-2xl leading-relaxed">
              Every appointment at {business.name} is paced one-on-one, which means the service list is designed around attention, comfort, and coat quality rather than salon volume.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] p-7"
            style={{ backgroundColor: "rgba(255,249,240,0.16)" }}
          >
            <p className="font-grotesk font-bold text-2xl text-white mb-3">
              Why clients love it
            </p>
            <div className="space-y-3 font-nunito text-white/85 leading-relaxed">
              <p>One dog at a time, with no rushed overlap.</p>
              <p>Comfort-first pacing for nervous or sensitive pups.</p>
              <p>Transparent starting prices and tailored quotes when needed.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="sticky top-16 z-30 py-4 px-4 sm:px-6 border-b"
        style={{ backgroundColor: "rgba(255,249,240,0.94)", borderColor: "rgba(26,26,26,0.08)", backdropFilter: "blur(10px)" }}
      >
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
          {[{ id: "all", label: "All Services" }, ...categories].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="flex-shrink-0 px-4 py-2.5 rounded-full font-grotesk font-bold text-sm tracking-wide transition-all duration-200 whitespace-nowrap border"
              style={{
                backgroundColor: active === cat.id ? "#1A1A1A" : "transparent",
                color: active === cat.id ? "#FFF9F0" : "#1A1A1A",
                borderColor: active === cat.id ? "#1A1A1A" : "rgba(26,26,26,0.12)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="max-w-7xl mx-auto space-y-16">
          {filtered.map((cat) => (
            <div key={cat.id} className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-12">
              <FadeIn>
                <div className="lg:sticky lg:top-32">
                  <p
                    className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-3"
                    style={{ color: "#FF6B35" }}
                  >
                    {cat.eyebrow}
                  </p>
                  <h2
                    className="font-grotesk font-bold text-4xl sm:text-5xl leading-tight mb-4"
                    style={{ color: "#1A1A1A" }}
                  >
                    {cat.label}
                  </h2>
                  <p className="font-nunito text-lg leading-relaxed text-gray-700 max-w-md">
                    {cat.intro}
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-4">
                {cat.services.map((service, i) => (
                  <FadeIn key={service.name} delay={i * 0.08}>
                    <motion.div
                      className="rounded-[1.75rem] border p-6 sm:p-7 bg-white"
                      style={{ borderColor: "rgba(26,26,26,0.08)" }}
                      whileHover={{
                        y: -3,
                        boxShadow: "0 18px 38px rgba(26,26,26,0.08)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3
                          className="font-grotesk font-bold text-2xl leading-tight"
                          style={{ color: "#1A1A1A" }}
                        >
                          {service.name}
                        </h3>
                        <div
                          className="shrink-0 rounded-full px-3 py-1.5 font-grotesk font-bold text-sm"
                          style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
                        >
                          {service.price}
                        </div>
                      </div>
                      <p className="font-nunito text-gray-700 leading-relaxed text-base max-w-2xl">
                        {service.desc}
                      </p>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="rounded-[2rem] p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center"
              style={{ backgroundColor: "rgba(255,107,53,0.08)" }}
            >
              <div>
                <p className="font-grotesk font-bold text-2xl mb-3" style={{ color: "#1A1A1A" }}>
                  Pricing
                </p>
                <p className="font-nunito text-gray-700 leading-relaxed">
                  All pricing is a starting point. Final quotes may shift based on breed, size, coat condition, behavior, matting, and the finish you want. If you are unsure what to book, Heather can guide you.
                </p>
              </div>
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-grotesk font-bold text-base"
                style={{ backgroundColor: "#1A1A1A", color: "#FFF9F0" }}
              >
                Ask on Facebook
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 text-center" style={{ backgroundColor: "#1A1A1A" }}>
        <FadeIn>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl mb-5 text-white">
            Ready to request an appointment?
          </h2>
          <p className="font-nunito text-lg text-white/75 mb-8 max-w-2xl mx-auto">
            If you know the service you want, head straight to the booking form. If not, Heather can help you choose the right appointment based on coat type and maintenance goals.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-grotesk font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
          >
            Request an Appointment
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
