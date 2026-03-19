import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Background_image from "../../assets/Images/Background_image.jpg";
import Review from "./Review";
import { RestaurantMap } from "./RestaurantMap";
import SocialSection from "./SocialSection";
import GiftSection from "./GiftSection";
import ContactForm from "../Contact-Us/ContactForm";
import Services from "./Services";

const ease = [0.25, 0.1, 0.25, 1];

const heroItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay, ease } },
});

const stats = [
  { value: "Est. 2012", label: "Opened in Dundee" },
  { value: "14+", label: "Years of Excellence" },
  { value: "5★", label: "Guest Rated" },
  { value: "7", label: "Days a Week" },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const MODAL_DISPLAY_TIMEOUT = 15 * 60 * 1000;
  const navigate = useNavigate();

  // ── Scroll-linked parallax values ──────────────────────────────────────
  const { scrollY } = useScroll();

  // Background: moves down relative to section as user scrolls → appears to
  // move up slower than content → classic parallax depth effect
  const bgY = useTransform(scrollY, [0, 950], ["0%", "28%"]);
  // Subtle scale-in on the bg as you scroll past
  const bgScale = useTransform(scrollY, [0, 950], [1, 1.1]);
  // Hero content drifts upward faster than the background
  const contentY = useTransform(scrollY, [0, 700], ["0%", "-16%"]);
  // Content fades out as you leave the hero
  const heroOpacity = useTransform(scrollY, [0, 460], [1, 0]);

  useEffect(() => {
    const modalData = JSON.parse(localStorage.getItem("modalData"));
    const now = new Date().getTime();
    if (!modalData || now - modalData.timestamp > MODAL_DISPLAY_TIMEOUT) {
      const t = setTimeout(() => setIsModalOpen(true), 1400);
      return () => clearTimeout(t);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.setItem(
      "modalData",
      JSON.stringify({ hasModalBeenShown: true, timestamp: new Date().getTime() })
    );
  };

  const handleBookNow = () => navigate("/menu");

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      {/*
        Native Framer Motion parallax:
        · Background image oversized (130% h) so it can drift without leaving
          white gaps. Positioned -15% from top.
        · bgY moves the bg DOWN relative to its parent as scrollY increases →
          bg appears to scroll up slower than the viewport → depth illusion.
        · bgScale adds a very subtle zoom-in for a cinematic feel.
        · contentY + heroOpacity make the text lift + fade as you scroll off.
        Reference: Noma / Nobu / Awwwards multi-layer parallax pattern.
      */}
      <section className="relative w-full h-[calc(100vh-95px)] overflow-hidden">
        {/* Parallax background layer */}
        <motion.div
          className="absolute w-full h-[130%] -top-[15%] will-change-transform"
          style={{ y: bgY, scale: bgScale }}
        >
          <img
            src={Background_image}
            alt="Angus Quay restaurant"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/38 to-black/78" />

        {/* Hero content — drifts + fades with scroll */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
          style={{ y: contentY, opacity: heroOpacity }}
        >
          {/* Label */}
          <motion.span
            variants={heroItem(0)}
            initial="hidden"
            animate="visible"
            className="font-source text-tertiary tracking-[0.45em] text-xs md:text-sm uppercase mb-5 block"
          >
            Fine Dining · Est. 2012
          </motion.span>

          {/* Thin decorative line */}
          <motion.div
            variants={heroItem(0.18)}
            initial="hidden"
            animate="visible"
            className="w-14 h-px bg-tertiary mb-7"
          />

          {/* Main title */}
          <motion.h1
            variants={heroItem(0.32)}
            initial="hidden"
            animate="visible"
            className="font-fjalla text-white text-6xl md:text-8xl lg:text-[7rem] tracking-tight leading-none mb-5"
          >
            ANGUS QUAY
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={heroItem(0.52)}
            initial="hidden"
            animate="visible"
            className="font-source text-white/60 text-sm md:text-base tracking-[0.32em] uppercase mb-12"
          >
            The Tasty House
          </motion.p>

          {/* CTA */}
          <motion.button
            variants={heroItem(0.7)}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleBookNow}
            className="font-source tracking-[0.25em] uppercase text-sm border border-white/70 hover:border-tertiary hover:bg-tertiary text-white px-10 py-3.5 transition-all duration-500"
          >
            Reserve a Table
          </motion.button>

          {/* Scroll indicator */}
          <motion.div
            variants={heroItem(1.1)}
            initial="hidden"
            animate="visible"
            className="absolute bottom-10 flex flex-col items-center gap-2"
          >
            <span className="font-source text-white/28 text-[10px] tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-white/28 to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats band ────────────────────────────────────────────────── */}
      <motion.div
        className="bg-secondary py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease }}
              >
                <p className="font-fjalla text-tertiary text-3xl md:text-4xl tracking-tight">
                  {stat.value}
                </p>
                <p className="font-source text-primary/45 text-xs tracking-[0.3em] uppercase mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Modal ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-primary p-10 md:p-14 max-w-md w-full text-center relative"
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 32 }}
              transition={{ duration: 0.45, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-tertiary/60" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-tertiary/60" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-tertiary/60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-tertiary/60" />

              <p className="font-source text-tertiary tracking-[0.4em] text-xs uppercase mb-5">
                Special Welcome
              </p>
              <h2 className="font-fjalla text-secondary text-3xl md:text-4xl mb-2">
                Reserve Your Table
              </h2>
              <div className="w-10 h-px bg-tertiary mx-auto mb-6" />
              <p className="font-source text-secondary/65 text-sm leading-relaxed mb-8">
                Book today and enjoy a complimentary welcome drink on your first visit with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 bg-secondary hover:bg-secondary/85 text-primary font-source tracking-[0.2em] uppercase text-xs py-4 transition-colors duration-300"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
                <button
                  className="flex-1 border border-secondary/25 hover:border-secondary/60 text-secondary/50 hover:text-secondary/80 font-source tracking-[0.2em] uppercase text-xs py-4 transition-all duration-300"
                  onClick={closeModal}
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Review />
      <Services />
      <GiftSection />
      <SocialSection />
      <ContactForm />
      <RestaurantMap />
    </div>
  );
}
