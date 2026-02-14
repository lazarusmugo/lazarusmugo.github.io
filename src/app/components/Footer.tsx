"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const services = [
    { label: "Mobile App Development", href: "/services/mobile" },
    { label: "Frontend Development", href: "/services/web" },
    { label: "Consulting", href: "/services/consulting" },
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
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Link href="/">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-main-purple to-purple-light bg-clip-text text-transparent mb-4">
                Lazarus Mugo
              </h3>
            </Link>
            <p className="text-slate-400 mb-6">
              Building exceptional mobile and web experiences that scale.
            </p>
            <a href="mailto:mugolazarusk@gmail.com">
              <motion.button
                className="px-6 py-3 bg-main-purple text-black rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </a>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <p className="text-slate-400 hover:text-main-purple transition-colors">
                    {service.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-slate-400" />
                <a
                  href="mailto:mugolazarusk@gmail.com"
                  className="text-slate-400 hover:text-main-purple transition-colors"
                >
                  mugolazarusk@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-slate-400" />
                <a
                  href="tel:+254722879455"
                  className="text-slate-400 hover:text-main-purple transition-colors"
                >
                  +254 722 879 455
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-main-purple transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar - centered */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© 2026 Lazarus Mugo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
