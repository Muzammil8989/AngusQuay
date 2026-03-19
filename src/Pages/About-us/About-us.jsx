import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import Restaurant from "../../assets/Images/Restaurant.jpg";
import Background_image from "../../assets/Images/Background_image.jpg";

const ease = [0.25, 0.1, 0.25, 1];

const values = [
  {
    icon: FaLeaf,
    title: "Quality Ingredients",
    description:
      "We source only the freshest local produce, working closely with Scottish suppliers to bring seasonal flavours to every dish on our menu.",
  },
  {
    icon: FaHeart,
    title: "Genuine Hospitality",
    description:
      "Every guest is welcomed like family. Our team is dedicated to making your visit personal, warm, and truly unforgettable.",
  },
  {
    icon: FaUsers,
    title: "Community Roots",
    description:
      "We're proud to be part of Dundee. We support local businesses, events, and charities that make our city a great place to live.",
  },
];

const milestones = [
  { year: "2012", event: "Angus Quay opens its doors on South Tay Square, Dundee" },
  { year: "2015", event: "Expanded to include a dedicated private dining room" },
  { year: "2018", event: "Launched our seasonal chef's tasting menu" },
  { year: "2021", event: "Introduced online ordering and local delivery" },
  { year: "2024", event: "Celebrating over 12 years as a Dundee dining favourite" },
];

export default function AboutUs() {
  return (
    <div className="bg-primary">

      {/* ── Page header ── */}
      <div className="bg-secondary py-20 md:py-28 text-center relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Background_image})` }}
        />
        {/* Brand colour overlay */}
        <div className="absolute inset-0 bg-secondary/80" />
        {/* Radial glow */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{ background: "radial-gradient(circle at 50% 50%, #e0996e, transparent 70%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="relative z-10"
        >
          <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-4">
            Angus Quay
          </span>
          <h1 className="font-fjalla text-primary text-5xl md:text-6xl lg:text-7xl tracking-tight">
            About Us
          </h1>
          <div className="w-12 h-px bg-tertiary mx-auto mt-6" />
        </motion.div>
      </div>

      {/* ── Our Story ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image with decorative frame */}
            <motion.div
              initial={{ opacity: 0, x: -44 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={Restaurant}
                  alt="Inside Angus Quay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-tertiary/25 -z-10" />
              <div className="absolute -top-4 -left-4 w-4 h-4 bg-tertiary/40" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 44 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease }}
            >
              <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-5">
                Our Story
              </span>
              <h2 className="font-fjalla text-secondary text-4xl md:text-5xl tracking-tight leading-tight mb-5">
                Where Passion<br />Meets the Plate
              </h2>
              <div className="w-12 h-px bg-tertiary mb-8" />
              <p className="font-source text-secondary/65 text-base leading-relaxed mb-5">
                Welcome to Angus Quay — where food, passion, and community come together. Our story began in November 2012 with a simple idea: to share delicious, honest cuisine with the people of Dundee.
              </p>
              <p className="font-source text-secondary/65 text-base leading-relaxed">
                From humble beginnings on South Tay Square, we've grown into one of Dundee's most loved dining destinations. But our values have never changed — every dish is made with care, and every guest is welcomed with genuine warmth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-secondary py-24 md:py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease }}
          >
            <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-4">
              What We Stand For
            </span>
            <h2 className="font-fjalla text-primary text-4xl md:text-5xl tracking-tight">
              Our Values
            </h2>
            <div className="w-12 h-px bg-tertiary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease }}
                whileHover={{ y: -4 }}
                className="group bg-white/5 border border-white/10 p-8 hover:border-tertiary/30 hover:bg-white/8 transition-all duration-400"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-tertiary/20 mb-6 group-hover:bg-tertiary/30 transition-colors duration-300">
                  <v.icon className="text-tertiary text-lg" />
                </div>
                <h3 className="font-fjalla text-primary text-xl tracking-wide mb-3">
                  {v.title}
                </h3>
                <p className="font-source text-primary/60 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── History / Timeline ── */}
      <section className="py-24 md:py-28 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease }}
          >
            <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-4">
              Our Journey
            </span>
            <h2 className="font-fjalla text-secondary text-4xl md:text-5xl tracking-tight">
              A History of Flavour
            </h2>
            <div className="w-12 h-px bg-tertiary mx-auto mt-6" />
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-2 bottom-2 w-px bg-secondary/15" />

            <div className="space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.65, ease }}
                  className="flex gap-10 pl-14 relative pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[16px] top-2 w-3 h-3 rounded-full bg-tertiary border-2 border-primary" />
                  <div>
                    <span className="font-fjalla text-tertiary text-xl block mb-1.5">
                      {m.year}
                    </span>
                    <p className="font-source text-secondary/65 text-sm leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Visit Us CTA ── */}
      <motion.section
        className="bg-secondary py-20 text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-5">
          Come See Us
        </span>
        <h2 className="font-fjalla text-primary text-4xl md:text-5xl tracking-tight mb-4">
          Visit Us Today
        </h2>
        <div className="w-12 h-px bg-tertiary mx-auto mb-8" />
        <p className="font-source text-primary/55 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          Experience the warmth of Angus Quay for yourself. Open every day from 1:00 PM at South Tay Square, Dundee.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-tertiary/20">
            <FaMapMarkerAlt className="text-tertiary text-xs" />
          </div>
          <span className="font-source text-primary/60 text-sm">
            South Tay Square, Dundee, DD1 1PB
          </span>
        </div>
      </motion.section>
    </div>
  );
}
