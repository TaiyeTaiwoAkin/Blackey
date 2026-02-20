"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "Flights",
  "Hotels",
  "Cars",
  "Packages",
  "Activities",
  "Cruises",
  "Rentals",
];

const currencies = ["USD", "NGN", "KES", "ZAR", "GHS", "EGP"];
const languages = ["English", "French", "Swahili", "Arabic", "Portuguese"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-earth/90 backdrop-blur-md shadow-lg"
          : "bg-deep-earth"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-warm-gold tracking-wide">
              Blackey
            </span>
          </a>

          {/* Desktop service tabs */}
          <div className="hidden lg:flex items-center gap-1">
            {services.map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="px-3 py-2 text-sm text-sand/80 hover:text-warm-gold transition-colors rounded-md hover:bg-white/5"
              >
                {s}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Currency selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setCurrencyOpen(!currencyOpen);
                  setLangOpen(false);
                }}
                className="text-sm text-sand/80 hover:text-warm-gold transition-colors px-2 py-1 rounded"
              >
                {selectedCurrency} ▾
              </button>
              {currencyOpen && (
                <div className="absolute top-full right-0 mt-1 bg-deep-earth border border-warm-gold/20 rounded-lg shadow-xl py-1 min-w-[100px]">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setSelectedCurrency(c);
                        setCurrencyOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-sand/80 hover:text-warm-gold hover:bg-white/5"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangOpen(!langOpen);
                  setCurrencyOpen(false);
                }}
                className="text-sm text-sand/80 hover:text-warm-gold transition-colors px-2 py-1 rounded"
              >
                {selectedLanguage} ▾
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 bg-deep-earth border border-warm-gold/20 rounded-lg shadow-xl py-1 min-w-[120px]">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setSelectedLanguage(l);
                        setLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-sand/80 hover:text-warm-gold hover:bg-white/5"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="text-sm text-sand/80 hover:text-warm-gold transition-colors px-3 py-2">
              Sign In
            </button>
            <button className="text-sm bg-warm-gold text-deep-earth font-semibold px-4 py-2 rounded-lg hover:bg-warm-gold/90 transition-colors">
              Register
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-sand p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-deep-earth border-t border-warm-gold/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {services.map((s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase()}`}
                  className="block px-3 py-2 text-sand/80 hover:text-warm-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {s}
                </a>
              ))}
              <hr className="border-warm-gold/10 my-3" />
              <div className="flex gap-4 px-3">
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="bg-white/5 text-sand/80 text-sm rounded px-2 py-1 border border-warm-gold/20"
                >
                  {currencies.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-white/5 text-sand/80 text-sm rounded px-2 py-1 border border-warm-gold/20"
                >
                  {languages.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 px-3 pt-2">
                <button className="text-sm text-sand/80 hover:text-warm-gold">
                  Sign In
                </button>
                <button className="text-sm bg-warm-gold text-deep-earth font-semibold px-4 py-2 rounded-lg">
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
