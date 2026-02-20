"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  "Flights",
  "Hotels",
  "Cars",
  "Packages",
  "Activities",
  "Cruises",
  "Rentals",
] as const;

type Tab = (typeof tabs)[number];

function FlightsForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div>
        <label className="block text-xs text-sand/60 mb-1">From</label>
        <input
          type="text"
          placeholder="Lagos (LOS)"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand placeholder:text-sand/40 text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">To</label>
        <input
          type="text"
          placeholder="Nairobi (NBO)"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand placeholder:text-sand/40 text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Departure</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Passengers</label>
        <select className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold">
          <option>1 Adult</option>
          <option>2 Adults</option>
          <option>3 Adults</option>
          <option>Family (2+2)</option>
        </select>
      </div>
    </div>
  );
}

function HotelsForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div>
        <label className="block text-xs text-sand/60 mb-1">Destination</label>
        <input
          type="text"
          placeholder="Cape Town, South Africa"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand placeholder:text-sand/40 text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Check-in</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Check-out</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Guests</label>
        <select className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold">
          <option>1 Room, 1 Guest</option>
          <option>1 Room, 2 Guests</option>
          <option>2 Rooms, 4 Guests</option>
        </select>
      </div>
    </div>
  );
}

function CarsForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div>
        <label className="block text-xs text-sand/60 mb-1">Pick-up Location</label>
        <input
          type="text"
          placeholder="Accra Airport"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand placeholder:text-sand/40 text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Pick-up Date</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Drop-off Date</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Car Type</label>
        <select className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold">
          <option>Economy</option>
          <option>SUV</option>
          <option>Luxury</option>
          <option>4x4 Safari</option>
        </select>
      </div>
    </div>
  );
}

function PackagesForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div>
        <label className="block text-xs text-sand/60 mb-1">Destination</label>
        <input
          type="text"
          placeholder="Serengeti, Tanzania"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand placeholder:text-sand/40 text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Travel Dates</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Travellers</label>
        <select className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold">
          <option>Solo Explorer</option>
          <option>Couple</option>
          <option>Family</option>
          <option>Group (5+)</option>
        </select>
      </div>
    </div>
  );
}

function ActivitiesForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div>
        <label className="block text-xs text-sand/60 mb-1">City or Region</label>
        <input
          type="text"
          placeholder="Zanzibar, Tanzania"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand placeholder:text-sand/40 text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Date</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Activity Type</label>
        <select className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold">
          <option>Safari & Wildlife</option>
          <option>Water Sports</option>
          <option>Cultural Tours</option>
          <option>Adventure</option>
        </select>
      </div>
    </div>
  );
}

function CruisesForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div>
        <label className="block text-xs text-sand/60 mb-1">Departure Port</label>
        <input
          type="text"
          placeholder="Durban, South Africa"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand placeholder:text-sand/40 text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Departure Month</label>
        <select className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold">
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>June</option>
          <option>December</option>
        </select>
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Duration</label>
        <select className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold">
          <option>3–5 Nights</option>
          <option>7 Nights</option>
          <option>10+ Nights</option>
        </select>
      </div>
    </div>
  );
}

function RentalsForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div>
        <label className="block text-xs text-sand/60 mb-1">Destination</label>
        <input
          type="text"
          placeholder="Marrakech, Morocco"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand placeholder:text-sand/40 text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Check-in</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold"
        />
      </div>
      <div>
        <label className="block text-xs text-sand/60 mb-1">Property Type</label>
        <select className="w-full bg-white/10 border border-warm-gold/20 rounded-lg px-3 py-2.5 text-sand text-sm focus:outline-none focus:border-warm-gold">
          <option>Apartment</option>
          <option>Villa</option>
          <option>Riad</option>
          <option>Beach House</option>
        </select>
      </div>
    </div>
  );
}

const formMap: Record<Tab, () => JSX.Element> = {
  Flights: FlightsForm,
  Hotels: HotelsForm,
  Cars: CarsForm,
  Packages: PackagesForm,
  Activities: ActivitiesForm,
  Cruises: CruisesForm,
  Rentals: RentalsForm,
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>("Flights");
  const [loading, setLoading] = useState(false);

  const ActiveForm = formMap[activeTab];

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-deep-earth/70 via-deep-earth/50 to-deep-earth/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Explore Africa
            <br />
            <span className="text-warm-gold">Like Never Before</span>
          </h1>
          <p className="text-sand/70 text-lg sm:text-xl max-w-2xl mx-auto">
            From the golden savannas to vibrant cities — book flights, stays, and
            unforgettable adventures across the continent.
          </p>
        </motion.div>

        {/* Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-deep-earth/60 backdrop-blur-xl border border-warm-gold/15 rounded-2xl p-4 sm:p-6 shadow-2xl"
        >
          {/* Tabs */}
          <div className="flex flex-wrap gap-1 mb-5 border-b border-warm-gold/10 pb-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-2 text-sm rounded-lg transition-all ${
                  activeTab === tab
                    ? "bg-warm-gold text-deep-earth font-semibold"
                    : "text-sand/60 hover:text-sand hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <ActiveForm />

          {/* Search button */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-warm-gold hover:bg-warm-gold/90 text-deep-earth font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-70 flex items-center gap-2 min-w-[140px] justify-center"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Searching...
                </>
              ) : (
                "Search"
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
