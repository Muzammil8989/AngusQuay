import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiAlignLeft } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/Logo.jpeg";

const ease = [0.25, 0.1, 0.25, 1];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // ── GPU-accelerated parallax on logo/title via Framer Motion
  // This replaces the previous `window.scrollY * 0.3` inline style approach,
  // which caused layout reflow on every scroll event. useTransform ties
  // directly to a MotionValue and runs off the main thread where supported.
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 260], [0, 28]);
  const titleY = useTransform(scrollY, [0, 260], [0, 18]);

  // Subscribe to scrollY changes to update shadow state
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setScrolled(v > 50));
    return unsubscribe;
  }, [scrollY]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Restaurant Hours", path: "/hours" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`bg-primary px-6 py-5 flex justify-between items-center transition-shadow duration-500 ${
        scrolled ? "shadow-md shadow-secondary/10" : ""
      }`}
    >
      {/* ── Desktop: Logo + Name ───────────────────────── */}
      <div className="hidden lg:flex items-center gap-4 overflow-hidden">
        <motion.img
          src={Logo}
          alt="Angus Quay logo"
          className="w-11 h-11 rounded-full object-cover"
          style={{ y: logoY }}
        />
        <motion.div
          className="font-fjalla text-2xl text-secondary tracking-[0.12em]"
          style={{ y: titleY }}
        >
          Angus Quay
        </motion.div>
      </div>

      {/* ── Desktop: Nav Links ─────────────────────────── */}
      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`font-source text-xl transition-colors duration-300 relative group leading-relaxed ${
              location.pathname === link.path
                ? "font-bold text-secondary"
                : "font-light text-gray-700 hover:text-tertiary"
            }`}
          >
            {link.name}
            {/* Animated underline */}
            <span
              className={`absolute -bottom-0.5 left-0 h-px bg-tertiary transition-all duration-300 ${
                location.pathname === link.path
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* ── Desktop: Phone ────────────────────────────── */}
      <p className="hidden lg:block font-fjalla text-base text-secondary/75 tracking-wide">
        0141 611 2694
      </p>

      {/* ── Mobile header ─────────────────────────────── */}
      <div className="flex lg:hidden justify-between w-full items-center">
        <button
          className="p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <FiAlignLeft size={24} className="text-secondary" />
        </button>

        {/* Center: logo + name */}
        <motion.div
          className="flex items-center gap-2 mx-auto"
          style={{ y: titleY }}
        >
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-fjalla text-2xl text-secondary font-semibold leading-snug tracking-[0.15em]">
            Angus Quay
          </span>
        </motion.div>
      </div>

      {/* ── Mobile Menu Overlay ───────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease }}
            className="fixed top-0 left-0 w-full h-full bg-primary z-50 flex flex-col"
          >
            {/* Header bar */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-secondary/10">
              <div className="flex items-center gap-3">
                <img src={Logo} alt="logo" className="w-9 h-9 rounded-full object-cover" />
                <span className="font-fjalla text-xl text-secondary tracking-wide">
                  Angus Quay
                </span>
              </div>
              <button
                className="p-1 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <RiCloseLargeFill size={22} className="text-secondary" />
              </button>
            </div>

            {/* Nav links */}
            <motion.nav
              className="flex flex-col px-8 pt-8 flex-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: -22 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.42, ease },
                    },
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={toggleMenu}
                    className={`block py-4 font-source text-xl border-b border-gray-300 transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "font-bold text-secondary"
                        : "font-light text-gray-700 hover:text-tertiary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Phone at bottom of drawer */}
            <div className="px-8 pb-12">
              <p className="font-source text-secondary/35 text-xs tracking-widest uppercase mb-2">
                Call us
              </p>
              <p className="font-fjalla text-secondary text-2xl">0141 611 2694</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
