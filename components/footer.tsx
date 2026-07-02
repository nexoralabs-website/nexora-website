import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" aria-label="Site footer">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column — icon mark only */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              {/*
                maxWidth: "none" defeats Tailwind v4 preflight's
                `img { max-width: 100% }` which otherwise clamps the image
                when its containing block is narrower than 48 px.
              */}
              <Image
                src="/brand/logo-mark.png"
                alt={`${siteConfig.name} icon mark`}
                width={48}
                height={48}
                style={{
                  width: 48,
                  height: 48,
                  objectFit: "contain",
                  display: "block",
                  flexShrink: 0,
                  maxWidth: "none",
                }}
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/60 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="flex items-start gap-2 hover:text-white transition-colors break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                  {siteConfig.links.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Mon – Sat, 9 AM – 7 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
