import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, MapPin, Clock, Linkedin, Twitter, Instagram } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" aria-label="Site footer">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="inline-flex items-center"
            >
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
              <span className="ml-3 text-xl font-bold font-display tracking-tight text-white">Nexora Labs</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-white/60 leading-relaxed">
              We solve business problems using technology, automation, marketing, and artificial intelligence.
            </p>
            
            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Company</h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Resources</h3>
            <ul className="space-y-3.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-5">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href={`mailto:${siteConfig.links.email}`} className="flex items-start gap-3 hover:text-white transition-colors group">
                  <Mail className="h-4 w-4 shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                  <span className="break-all">{siteConfig.links.email}</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <MessageCircle className="h-4 w-4 shrink-0 group-hover:text-accent transition-colors" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-white/40" />
                <span>{siteConfig.address.city}, {siteConfig.address.country}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-white/40" />
                <span>Mon – Sat<br/>9 AM – 7 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
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
