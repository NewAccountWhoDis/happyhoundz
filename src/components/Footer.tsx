import Link from "next/link";
import { business } from "@/lib/site";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A1A", color: "#FFF9F0" }} className="pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐾</span>
              <span className="font-grotesk font-bold text-lg">
                <span style={{ color: "#FF6B35" }}>Happy</span>{" "}
                <span className="text-white">Houndz</span>
              </span>
            </div>
            <p className="text-white/60 text-sm font-nunito leading-relaxed">
              {business.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-grotesk font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#FFD23F" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/book", label: "Book Appointment" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white text-sm font-nunito transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-grotesk font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#FFD23F" }}>
              Find Us
            </h3>
            <p className="text-white/60 text-sm font-nunito mb-1">📍 {business.addressLine1}</p>
            <p className="text-white/60 text-sm font-nunito mb-1">{business.addressLine2}</p>
            <p className="text-white/60 text-sm font-nunito mb-1">📞 {business.phone}</p>
            <p className="text-white/60 text-sm font-nunito mb-4">🗓️ {business.appointmentNote}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full flex items-center justify-center text-sm font-grotesk font-bold transition-all hover:scale-105"
                style={{ backgroundColor: "#FF6B35" }}
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-white/40 text-xs font-nunito mt-8">
          © {new Date().getFullYear()} {business.legalName} · {business.city}, {business.state} · All rights reserved.{" "}
          <a
            href="https://meetmister.black"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            Designed By JxB
          </a>
        </p>
      </div>
    </footer>
  );
}
