"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { business, differentiators, firstVisitSteps } from "@/lib/site";

const servicePreview = [
  {
    name: "Bathing",
    note: "For fresh coats, de-shedding support, and a polished finish.",
    price: "From $45",
  },
  {
    name: "Full Grooms",
    note: "For shape, coat maintenance, and a more tailored finish.",
    price: "From $50",
  },
  {
    name: "Finishing Details",
    note: "For touch-ups and thoughtful extras that complete the appointment.",
    price: "From $5",
  },
];

const studioNotes = [
  "One dog at a time, with no chaotic salon overlap.",
  "Comfort-first pacing for puppies, anxious dogs, and sensitive coats.",
  "A warmer, more personal feel than a standard grooming storefront.",
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-24 pb-16 sm:pb-20"
        style={{ backgroundColor: "#FF6B35" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/heather-with-dogs.jpg"
            alt="Heather with two dogs from Heather's Happy Houndz"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,26,26,0.62) 0%, rgba(26,26,26,0.28) 45%, rgba(255,107,53,0.15) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <p className="font-nunito font-bold text-sm uppercase tracking-[0.26em] mb-6 text-white/80">
              {business.city}, {business.state} • Boutique Dog Grooming
            </p>
            <h1 className="font-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.96] mb-6 max-w-4xl">
              A calmer grooming studio for dogs who deserve better than a rushed salon.
            </h1>
            <p className="font-nunito text-xl sm:text-2xl text-white/85 leading-relaxed max-w-2xl mb-9">
              {business.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-grotesk font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
              >
                Request an Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-grotesk font-bold text-lg border border-white/35 text-white transition-all duration-200 hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-[2rem] p-6 sm:p-8 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(255,249,240,0.16)" }}
            >
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-[1.5rem] bg-white/95 p-5 text-center">
                  <p className="font-grotesk font-bold text-4xl" style={{ color: "#1A1A1A" }}>
                    1:1
                  </p>
                  <p className="font-nunito text-sm mt-2 text-gray-700">
                    one dog at a time
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-white/95 p-5 text-center">
                  <p className="font-grotesk font-bold text-4xl" style={{ color: "#1A1A1A" }}>
                    2026
                  </p>
                  <p className="font-nunito text-sm mt-2 text-gray-700">
                    locally established
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[#1A1A1A] p-6 text-white">
                <p className="font-grotesk font-bold text-2xl mb-3">
                  The studio promise
                </p>
                <div className="space-y-3 font-nunito text-white/78 leading-relaxed">
                  {studioNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr] gap-10 items-start">
          <FadeIn>
            <div>
              <p
                className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-4"
                style={{ color: "#FF6B35" }}
              >
                A Better Experience
              </p>
              <h2
                className="font-grotesk font-bold text-4xl sm:text-5xl leading-tight mb-5"
                style={{ color: "#1A1A1A" }}
              >
                Less volume. More attention.
              </h2>
              <p className="font-nunito text-lg text-gray-700 leading-relaxed max-w-md">
                Every appointment is handled with a calmer pace, more personal attention, and a studio atmosphere designed to help dogs feel safe from drop-off to pickup.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {differentiators.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="rounded-[1.75rem] bg-white p-7 shadow-sm h-full">
                  <p
                    className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-3"
                    style={{ color: "#FF6B35" }}
                  >
                    0{index + 1}
                  </p>
                  <h3
                    className="font-grotesk font-bold text-2xl mb-3"
                    style={{ color: "#1A1A1A" }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-nunito text-gray-700 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 px-4 sm:px-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-xl">
              <Image
                src="/images/heather-with-dogs.jpg"
                alt="Heather with two dogs from Heather's Happy Houndz"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p
                className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-4"
                style={{ color: "#FF6B35" }}
              >
                Grooming
              </p>
              <h2
                className="font-grotesk font-bold text-4xl sm:text-5xl leading-tight mb-5"
                style={{ color: "#1A1A1A" }}
              >
                Grooming services designed around comfort and coat care.
              </h2>
              <p className="font-nunito text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
                From bathing and de-shedding to full grooms and finishing details, each service is tailored to your dog&apos;s coat, temperament, and maintenance needs.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {servicePreview.map((item, index) => (
                <FadeIn key={item.name} delay={index * 0.08}>
                  <div
                    className="rounded-[1.5rem] border p-6 sm:p-7"
                    style={{ borderColor: "rgba(26,26,26,0.08)" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3
                        className="font-grotesk font-bold text-2xl"
                        style={{ color: "#1A1A1A" }}
                      >
                        {item.name}
                      </h3>
                      <div
                        className="rounded-full px-3 py-1.5 font-grotesk font-bold text-sm"
                        style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
                      >
                        {item.price}
                      </div>
                    </div>
                    <p className="font-nunito text-gray-700 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.25} className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-grotesk font-bold text-lg"
                style={{ color: "#FF6B35" }}
              >
                See all services
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-18 px-4 sm:px-6" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.48fr_0.52fr] gap-10 items-start">
          <FadeIn>
            <div>
              <p className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-4 text-white/60">
                New Clients
              </p>
              <h2 className="font-grotesk font-bold text-4xl sm:text-5xl leading-tight mb-5 text-white">
                A simple path to booking.
              </h2>
              <p className="font-nunito text-lg text-white/75 leading-relaxed max-w-md">
                New clients can reach out with questions, choose a service, and request an appointment without guessing what comes next.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {firstVisitSteps.map((step, index) => (
              <FadeIn key={step} delay={index * 0.08}>
                <div
                  className="rounded-[1.5rem] p-5 sm:p-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-grotesk font-bold"
                      style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
                    >
                      {index + 1}
                    </div>
                    <p className="font-nunito text-white/82 text-base leading-relaxed pt-1">
                      {step}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <div
                className="rounded-[1.5rem] p-6"
                style={{ backgroundColor: "rgba(255,107,53,0.14)" }}
              >
                <p className="font-grotesk font-bold text-2xl mb-3 text-white">
                  Have a question first?
                </p>
                <p className="font-nunito text-white/78 leading-relaxed mb-5">
                  Facebook is a quick way to ask about services, availability, or what type of appointment would be the best fit for your dog.
                </p>
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-grotesk font-bold text-sm"
                  style={{ backgroundColor: "#5F7154", color: "#FFF9F0" }}
                >
                  Visit {business.facebookHandle}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.34}>
              <div
                className="rounded-[1.5rem] border p-6"
                style={{ borderColor: "rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <p className="font-grotesk font-bold text-2xl mb-3 text-white">
                  Want to know what a first visit is like?
                </p>
                <p className="font-nunito text-white/76 leading-relaxed mb-5">
                  Visit the FAQ for answers about nervous dogs, reactive dogs, timing, matting, and how appointments are approached.
                </p>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-grotesk font-bold text-sm"
                  style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
                >
                  Read the FAQ
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 text-center" style={{ backgroundColor: "#FFD23F" }}>
        <FadeIn>
          <p
            className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Book Now
          </p>
          <h2
            className="font-grotesk font-bold text-4xl sm:text-5xl mb-5"
            style={{ color: "#1A1A1A" }}
          >
            Request a calmer grooming experience.
          </h2>
          <p className="font-nunito text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            If your dog does best with extra patience, gentler pacing, and a more personal appointment, Happy Houndz was built for exactly that.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-grotesk font-bold text-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: "#FF6B35", color: "white" }}
          >
            Book Now
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
