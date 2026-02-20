"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    title: "Serengeti Safari",
    subtitle: "Tanzania",
    description:
      "Witness the Great Migration — millions of wildebeest thundering across golden plains under an endless sky. This is nature at its most epic.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80",
    price: "From $1,299",
  },
  {
    title: "Zanzibar Beach",
    subtitle: "Tanzania",
    description:
      "Turquoise waters, white sand, and spice-scented breezes. Dive into coral reefs by day and feast under the stars by night.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=900&q=80",
    price: "From $799",
  },
  {
    title: "Cape Town City Break",
    subtitle: "South Africa",
    description:
      "Table Mountain at sunrise, world-class wine by noon, and the vibrant pulse of Long Street after dark. A city that has it all.",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=900&q=80",
    price: "From $649",
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const inView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative rounded-3xl overflow-hidden h-[450px] sm:h-[500px] cursor-pointer"
    >
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-earth via-deep-earth/30 to-transparent group-hover:from-deep-earth/95 transition-all duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <span className="text-warm-gold text-sm font-semibold tracking-wider uppercase">
          {experience.subtitle}
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
          {experience.title}
        </h3>
        <p className="text-sand/70 text-sm leading-relaxed max-w-md mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {experience.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-warm-gold font-bold text-lg">
            {experience.price}
          </span>
          <button className="bg-warm-gold text-deep-earth font-semibold px-5 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-warm-gold/90">
            Explore
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedExperiences() {
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
          Featured Experiences
        </h2>
        <p className="text-primary/60 text-lg max-w-2xl mx-auto">
          Stories waiting to be lived — editorial picks from our team of African
          travel experts.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.title} experience={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
