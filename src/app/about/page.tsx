"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { business } from "@/lib/site";

const principles = [
  {
    label: "Personal Attention",
    body:
      "Appointments are intentionally one-on-one, so each dog gets Heather's full focus without the pace and pressure of a higher-volume salon.",
  },
  {
    label: "Comfort-Led Grooming",
    body:
      "Nervous dogs, first-timers, and sensitive personalities are handled with a slower rhythm that prioritizes trust as much as the final groom.",
  },
  {
    label: "Professional Craft",
    body:
      "The work is grounded in training, technical care, and the belief that a polished groom should never come at the expense of comfort.",
  },
];

const studioFacts = [
  { value: business.established, label: "established" },
  { value: business.city, label: "based in" },
  { value: "1:1", label: "appointment style" },
];

const galleryPreview = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-04.jpg",
  "/images/gallery/gallery-06.jpg",
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

export default function AboutPage() {
  return (
    <>
      <section
        className="pt-28 pb-16 px-4 sm:px-6"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-nunito font-bold text-sm uppercase tracking-[0.24em] mb-5 text-white/60">
              Heather&apos;s Story
            </p>
            <h1 className="font-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.96] mb-5 text-white">
              A more personal kind of grooming, built by Heather in {business.city}.
            </h1>
            <p className="font-nunito text-xl text-white/76 leading-relaxed max-w-2xl">
              {business.name} was created around a simple idea: dogs do better when they are handled with patience, clarity, and real one-on-one attention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            {studioFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[1.5rem] bg-white/8 p-5 text-center"
              >
                <p className="font-grotesk font-bold text-3xl text-white">{fact.value}</p>
                <p className="font-nunito text-sm mt-2 text-white/65">{fact.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-18 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
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

          <FadeIn delay={0.15}>
            <p
              className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-4"
              style={{ color: "#FF6B35" }}
            >
              The Studio
            </p>
            <h2
              className="font-grotesk font-bold text-4xl sm:text-5xl leading-tight mb-6"
              style={{ color: "#1A1A1A" }}
            >
              A studio built around patient, one-on-one care.
            </h2>
            <div className="space-y-4 font-nunito text-gray-700 leading-relaxed text-lg max-w-2xl">
              <p>
                Happy Houndz was created to give dogs a calmer, more personal grooming experience than many traditional salons provide.
              </p>
              <p>
                That means one-on-one appointments, slower pacing, and a setup that works especially well for dogs who shut down, tremble, or struggle in louder environments.
              </p>
              <p>
                As a certified groomer, Heather takes the work seriously. The final look matters, but so does the way a dog feels throughout the appointment. At Happy Houndz, those two things are treated as inseparable.
              </p>
              <p>
                Since opening in {business.established}, the studio has grown by word of mouth, returning clients, and a reputation for making grooming feel more human, more thoughtful, and more personal.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-18 px-4 sm:px-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-10 items-start">
          <FadeIn>
            <div>
              <p
                className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-4"
                style={{ color: "#FF6B35" }}
              >
                What Matters Here
              </p>
              <h2
                className="font-grotesk font-bold text-4xl sm:text-5xl leading-tight mb-5"
                style={{ color: "#1A1A1A" }}
              >
                The studio runs on a few non-negotiables.
              </h2>
              <p className="font-nunito text-lg text-gray-700 leading-relaxed max-w-md">
                These are the values that shape the pace, atmosphere, and quality of every appointment.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {principles.map((principle, index) => (
              <FadeIn key={principle.label} delay={index * 0.08}>
                <div className="rounded-[1.75rem] border bg-white p-7" style={{ borderColor: "rgba(26,26,26,0.08)" }}>
                  <p
                    className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-3"
                    style={{ color: "#FF6B35" }}
                  >
                    0{index + 1}
                  </p>
                  <h3 className="font-grotesk font-bold text-2xl mb-3" style={{ color: "#1A1A1A" }}>
                    {principle.label}
                  </h3>
                  <p className="font-nunito text-gray-700 leading-relaxed text-base">
                    {principle.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.48fr_0.52fr] gap-10 items-start">
          <FadeIn>
            <div>
              <p
                className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-4"
                style={{ color: "#FF6B35" }}
              >
                In the Gallery
              </p>
              <h2
                className="font-grotesk font-bold text-4xl sm:text-5xl leading-tight mb-5"
                style={{ color: "#1A1A1A" }}
              >
                A look at the dogs and details that define the studio.
              </h2>
              <p className="font-nunito text-lg text-gray-700 leading-relaxed max-w-md mb-7">
                Visit the gallery to see recent grooming work and a closer look at the space Heather has created in Cohoes.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 font-grotesk font-bold text-lg"
                style={{ color: "#FF6B35" }}
              >
                See the gallery
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {galleryPreview.map((src, index) => (
              <FadeIn key={src} delay={index * 0.08}>
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-square shadow-sm">
                  <Image
                    src={src}
                    alt="Recent grooming photo from Heather's Happy Houndz"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center text-center md:text-left">
          <FadeIn>
            <div>
              <p className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-4">
                Want to book with Heather?
              </p>
              <p className="font-nunito text-lg text-white/75 max-w-2xl">
                New clients can request an appointment through the booking form or reach out through Facebook for the fastest live response.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-grotesk font-bold text-lg"
                style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
              >
                Request an Appointment
              </Link>
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-grotesk font-bold text-lg"
                style={{ backgroundColor: "#5F7154", color: "#FFF9F0" }}
              >
                Visit {business.facebookHandle}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
