"use client";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const services = [
    { label: "Mobile App Development", href: "/#about" },
    { label: "Frontend Development", href: "/#about" },
    { label: "Consulting", href: "/#about" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/lazarusmugo", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lazarus-mugo/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-warm-background text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Link href="/">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-neutral-950">
                Lazarus Mugo
              </h3>
            </Link>
            <p className="text-neutral-700 mb-6">
              Android and iOS app development, improvements, and maintenance.
            </p>
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-main-purple px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-purple-light"
            >
              Discuss your project
            </Link>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-neutral-700 transition-colors hover:text-neutral-950 hover:underline">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-neutral-700">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-neutral-700" />
                <a
                  href="mailto:mugolazarusk@gmail.com"
                  className="text-neutral-700 transition-colors hover:text-neutral-950 hover:underline"
                >
                  mugolazarusk@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-neutral-700" />
                <a
                  href="tel:+254722879455"
                  className="text-neutral-700 transition-colors hover:text-neutral-950 hover:underline"
                >
                  +254 722 879 455
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 transition-colors hover:text-neutral-950 hover:underline"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200 pt-8 text-center text-sm text-neutral-700">
          <p>© 2026 Lazarus Mugo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
