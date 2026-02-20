"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const destinations = [
  {
    city: "Nairobi",
    country: "Kenya",
    price: 320,
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=600&q=80",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    price: 450,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80",
  },
  {
    city: "Lagos",
    country: "Nigeria",
    price: 280,
    image: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=600&q=80",
  },
  {
    city: "Marrakech",
    country: "Morocco",
    price: 390,
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80",
  },
  {
    city: "Cairo",
    country: "Egypt",
    price: 350,
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80",
  },
  {
    city: "Zanzibar",
    country: "Tanzania",
    price: 410,
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&q=80",
  },
  {
    city: "Accra",
    country: "Ghana",
    price: 295,
    image: "https://images.unsplash.com/photo-1642255538428-8a0e5e1956c5?w=600&q=80",
  },
  {
    city: "Kigali",
    country: "Rwanda",
    price: 375,
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&q=80",
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    price: 340,
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=600&q=80",
  },
  {
    city: "Dakar",
    country: "Senegal",
    price: 365,
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",
  },
];

export default function PopularDestinations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-deep-earth mb-3">
          Popular Destinations
        </h2>
        <p className="text-primary/60 text-lg max-w-xl">
          Discover the vibrant heartbeat of Africa — from bustling markets to
          serene coastlines, your next adventure awaits.
        </p>
      </motion.div>

      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {destinations.map((dest, i) => (
          <motion.div
            key={dest.city}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex-shrink-0 w-[260px] snap-start group cursor-pointer"
          >
            <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={dest.image}
                alt={`${dest.city}, ${dest.country}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-earth/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-xl font-bold text-white">
                  {dest.city}
                </h3>
                <p className="text-sand/70 text-sm">{dest.country}</p>
                <p className="text-warm-gold font-semibold mt-1">
                  From ${dest.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
