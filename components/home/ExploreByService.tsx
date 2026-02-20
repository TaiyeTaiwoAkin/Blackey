"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    name: "Flights",
    description:
      "Connect across Africa and beyond with direct routes to 54 nations and counting.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    name: "Hotels",
    description:
      "From luxury lodges to boutique riads — find stays that feel like home, anywhere on the continent.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Car Rentals",
    description:
      "Hit the open road with 4x4s built for African terrain — or cruise the city in style.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.5L21 11M3 11v6a1 1 0 001 1h1m16-7v6a1 1 0 01-1 1h-1M3 11h18" />
      </svg>
    ),
  },
  {
    name: "Packages",
    description:
      "All-inclusive bundles that pair flights, stays, and adventures — curated by local experts.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: "Activities",
    description:
      "Safari game drives, spice tours, dune surfing — experiences that redefine adventure.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Cruises",
    description:
      "Sail the Indian Ocean, trace the Nile, or island-hop along the West African coast.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h1l1-5h14l1 5h1M5 17l-2 4h18l-2-4M8 12V6a2 2 0 012-2h4a2 2 0 012 2v6" />
      </svg>
    ),
  },
  {
    name: "Vacation Rentals",
    description:
      "Private villas, beachfront apartments, and mountain retreats — your African home away from home.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function ExploreByService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-earth" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-sand mb-3">
            Explore by Service
          </h2>
          <p className="text-sand/60 text-lg max-w-xl mx-auto">
            Whatever your journey calls for, we have it — built for Africa, by
            Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white/5 border border-warm-gold/10 rounded-2xl p-6 cursor-pointer overflow-hidden transition-all hover:border-warm-gold/30"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-warm-gold scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-warm-gold group-hover:text-deep-earth transition-colors mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-sand group-hover:text-deep-earth transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="text-sand/60 group-hover:text-deep-earth/70 transition-colors text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
