"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  { src: "/images/gallery/gallery-01.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-02.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-03.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-04.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-05.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-06.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-07.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-08.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-09.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-10.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-11.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
  { src: "/images/gallery/gallery-12.jpg", alt: "Recent grooming photo from Heather's Happy Houndz" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const previous = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + photos.length) % photos.length);
  };

  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % photos.length);
  };

  return (
    <>
      <section
        className="relative overflow-hidden pt-28 pb-16 px-4 sm:px-6"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/studio.jpg"
            alt="Interior photo of the Heather's Happy Houndz studio"
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,26,26,0.82) 0%, rgba(26,26,26,0.58) 45%, rgba(255,210,63,0.22) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-nunito font-bold text-sm uppercase tracking-[0.24em] mb-5 text-white/70">
              Recent Photos
            </p>
            <h1 className="font-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.96] mb-5 text-white">
              A closer look at recent grooms and the studio itself.
            </h1>
            <p className="font-nunito text-xl text-white/82 leading-relaxed max-w-2xl">
              Browse recent Happy Houndz photos and get a feel for the dogs, details, and atmosphere of the studio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="rounded-[1.5rem] bg-white/88 p-5 text-center">
              <p className="font-grotesk font-bold text-3xl text-[#1A1A1A]">{photos.length}</p>
              <p className="font-nunito text-sm mt-2 text-gray-700">recent photos</p>
            </div>
            <div className="rounded-[1.5rem] bg-white/88 p-5 text-center">
              <p className="font-grotesk font-bold text-3xl text-[#1A1A1A]">1:1</p>
              <p className="font-nunito text-sm mt-2 text-gray-700">appointment style</p>
            </div>
            <div className="rounded-[1.5rem] bg-white/88 p-5 text-center">
              <p className="font-grotesk font-bold text-3xl text-[#1A1A1A]">Local</p>
              <p className="font-nunito text-sm mt-2 text-gray-700">studio work</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {photos.map((photo, index) => (
              <motion.button
                key={photo.src}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                onClick={() => setLightbox(index)}
                className="relative overflow-hidden rounded-[1.5rem] aspect-square shadow-sm text-left"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr] gap-10 items-center">
          <div>
            <p
              className="font-nunito font-bold text-xs uppercase tracking-[0.24em] mb-4"
              style={{ color: "#FF6B35" }}
            >
              Inside Happy Houndz
            </p>
            <h2
              className="font-grotesk font-bold text-4xl sm:text-5xl leading-tight mb-5"
              style={{ color: "#1A1A1A" }}
            >
              A calmer, more welcoming space for one-on-one grooming.
            </h2>
            <p className="font-nunito text-lg text-gray-700 leading-relaxed max-w-md">
              Beyond the groom itself, the environment matters. Heather&apos;s studio reflects the same thoughtful, low-stress approach that shapes every appointment.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3]">
            <Image
              src="/images/studio.jpg"
              alt="Interior photo of the Heather's Happy Houndz studio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              className="max-w-4xl w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-square">
                <Image
                  src={photos[lightbox].src}
                  alt={photos[lightbox].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={previous}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: "#FF6B35" }}
                  aria-label="Previous photo"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="px-5 py-2 rounded-full font-grotesk font-bold text-sm"
                  style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: "#FF6B35" }}
                  aria-label="Next photo"
                >
                  →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
