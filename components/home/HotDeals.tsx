"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const deals = [
  {
    destination: "Zanzibar Beach Escape",
    location: "Tanzania",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&q=80",
    originalPrice: 899,
    discountedPrice: 599,
    discount: 33,
    badge: "Flash Sale",
    hasCountdown: true,
    endsIn: 4 * 3600 + 32 * 60,
  },
  {
    destination: "Marrakech Riad Retreat",
    location: "Morocco",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80",
    originalPrice: 750,
    discountedPrice: 489,
    discount: 35,
    badge: "Limited Time",
    hasCountdown: true,
    endsIn: 7 * 3600 + 15 * 60,
  },
  {
    destination: "Lagos City Adventure",
    location: "Nigeria",
    image: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=600&q=80",
    originalPrice: 520,
    discountedPrice: 349,
    discount: 33,
    badge: "Hot Deal",
    hasCountdown: false,
    endsIn: 0,
  },
  {
    destination: "Safari Getaway",
    location: "Kenya",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
    originalPrice: 1200,
    discountedPrice: 849,
    discount: 29,
    badge: "Best Seller",
    hasCountdown: false,
    endsIn: 0,
  },
  {
    destination: "Cape Winelands Tour",
    location: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80",
    originalPrice: 680,
    discountedPrice: 459,
    discount: 32,
    badge: "Trending",
    hasCountdown: false,
    endsIn: 0,
  },
  {
    destination: "Accra Cultural Pass",
    location: "Ghana",
    image: "https://images.unsplash.com/photo-1642255538428-8a0e5e1956c5?w=600&q=80",
    originalPrice: 450,
    discountedPrice: 299,
    discount: 34,
    badge: "New",
    hasCountdown: false,
    endsIn: 0,
  },
];

function CountdownTimer({ initialSeconds }: { initialSeconds: number }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <div className="flex gap-1 text-xs font-mono">
      <span className="bg-rust text-white px-1.5 py-0.5 rounded">
        {String(hrs).padStart(2, "0")}h
      </span>
      <span className="bg-rust text-white px-1.5 py-0.5 rounded">
        {String(mins).padStart(2, "0")}m
      </span>
      <span className="bg-rust text-white px-1.5 py-0.5 rounded">
        {String(secs).padStart(2, "0")}s
      </span>
    </div>
  );
}

export default function HotDeals() {
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
          Hot Deals Across Africa
        </h2>
        <p className="text-primary/60 text-lg max-w-xl">
          Handpicked savings on the continent&apos;s most sought-after
          destinations. Act fast — these deals move as quickly as the African sun.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, i) => (
          <motion.div
            key={deal.destination}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={deal.image}
                alt={deal.destination}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-warm-gold text-deep-earth text-xs font-bold px-3 py-1 rounded-full">
                {deal.badge}
              </span>
              <span className="absolute top-3 right-3 bg-rust text-white text-xs font-bold px-2 py-1 rounded-full">
                -{deal.discount}%
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-bold text-deep-earth mb-1">
                {deal.destination}
              </h3>
              <p className="text-primary/50 text-sm mb-3">{deal.location}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-primary/40 line-through text-sm">
                    ${deal.originalPrice}
                  </span>
                  <span className="text-warm-gold font-bold text-xl">
                    ${deal.discountedPrice}
                  </span>
                </div>
                {deal.hasCountdown && (
                  <CountdownTimer initialSeconds={deal.endsIn} />
                )}
              </div>
              <button className="mt-4 w-full bg-deep-earth text-sand font-semibold py-2.5 rounded-xl hover:bg-deep-earth/90 transition-colors">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
