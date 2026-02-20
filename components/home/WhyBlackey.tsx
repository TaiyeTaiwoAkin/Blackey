"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    title: "Africa-First Platform",
    description:
      "Built from the ground up for African travellers. We know the routes, the rhythms, and the hidden gems that global platforms miss.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Local Payments",
    description:
      "Pay your way — M-Pesa, Flutterwave, Paystack, bank transfer, or card. No conversion hassles, no hidden fees.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Secure Bookings",
    description:
      "Every transaction is encrypted and every booking confirmed. Travel with confidence, backed by ironclad security.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "24/7 Local Support",
    description:
      "Our team spans the continent — real people in real time zones, ready to help in your language.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function WhyBlackey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-deep-earth mb-3">
          Why Travellers Choose Blackey
        </h2>
        <p className="text-primary/60 text-lg max-w-2xl mx-auto">
          We are not just another booking site — we are the bridge between you and
          the Africa that awaits.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warm-gold/10 text-warm-gold mb-5">
              {reason.icon}
            </div>
            <h3 className="font-heading text-lg font-bold text-deep-earth mb-3">
              {reason.title}
            </h3>
            <p className="text-primary/60 text-sm leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
