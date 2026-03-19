import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import Background_review from "../../assets/Images/Background_review.jpg";

const ease = [0.25, 0.1, 0.25, 1];

const restaurantHours = [
  { day: "Monday",    hours: "1:00 PM – 11:00 PM" },
  { day: "Tuesday",   hours: "1:00 PM – 11:00 PM" },
  { day: "Wednesday", hours: "1:00 PM – 11:00 PM" },
  { day: "Thursday",  hours: "1:00 PM – 11:00 PM" },
  { day: "Friday",    hours: "1:00 PM – 11:00 PM" },
  { day: "Saturday",  hours: "1:00 PM – 11:00 PM" },
  { day: "Sunday",    hours: "1:00 PM – 11:00 PM" },
];

const galleryImages = [
  "https://t3.ftcdn.net/jpg/03/24/73/92/240_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
  "https://t3.ftcdn.net/jpg/03/11/19/38/240_F_311193887_0aXFwwXXHu4PsBAVNW1USeypg1clOH8E.jpg",
  "https://t4.ftcdn.net/jpg/01/81/27/53/240_F_181275381_mYNQJq5K97UFJe8YGK2EXaIbQrE5UVY7.jpg",
  "https://t3.ftcdn.net/jpg/01/43/01/98/240_F_143019866_v1gd77eVVwX6DjjqcNvYYlh8aaTgI6T4.jpg",
  "https://t3.ftcdn.net/jpg/01/07/25/34/240_F_107253441_YEmyUDqwc9v7wzBW9APxVtr5h1pLVliu.jpg",
  "https://t4.ftcdn.net/jpg/01/43/01/98/240_F_143019866_v1gd77eVVwX6DjjqcNvYYlh8aaTgI6T4.jpg",
];

const today = new Date().toLocaleDateString("en-GB", { weekday: "long" });

export default function RestaurantHours() {
  return (
    <div className="bg-primary min-h-screen">

      {/* ── Page header ── */}
      <div className="bg-secondary py-20 md:py-28 text-center relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Background_review})` }}
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
            Opening Hours
          </h1>
          <div className="w-12 h-px bg-tertiary mx-auto mt-6" />
        </motion.div>
      </div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Hours table */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 flex items-center justify-center bg-tertiary/15">
                <FaClock className="text-tertiary text-sm" />
              </div>
              <h2 className="font-fjalla text-secondary text-2xl tracking-wide">
                Weekly Schedule
              </h2>
            </div>

            <div className="border border-secondary/10">
              {restaurantHours.map((item, i) => {
                const isToday = item.day === today;
                return (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease }}
                    className={`flex justify-between items-center px-6 py-4 border-b border-secondary/8 last:border-b-0 transition-colors duration-300 ${
                      isToday ? "bg-tertiary/10" : "hover:bg-secondary/4"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-source text-base ${
                          isToday
                            ? "font-semibold text-secondary"
                            : "font-normal text-secondary/70"
                        }`}
                      >
                        {item.day}
                      </span>
                      {isToday && (
                        <span className="font-source text-[9px] tracking-widest uppercase text-primary bg-tertiary px-2 py-0.5">
                          Today
                        </span>
                      )}
                    </div>
                    <span
                      className={`font-source text-sm ${
                        isToday ? "text-tertiary font-medium" : "text-secondary/50"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Booking note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 border border-tertiary/25 bg-tertiary/5"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-tertiary/20 mt-0.5">
                  <FaPhoneAlt className="text-tertiary text-xs" />
                </div>
                <p className="font-source text-secondary/65 text-sm leading-relaxed">
                  <span className="font-semibold text-secondary block mb-1">
                    Bookings Recommended
                  </span>
                  Especially on Friday and Saturday evenings. Call us on{" "}
                  <span className="text-tertiary font-medium">0141 611 2694</span>{" "}
                  or visit us at South Tay Square, Dundee.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease }}
          >
            <h2 className="font-fjalla text-secondary text-2xl tracking-wide mb-8">
              Our Kitchen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {galleryImages.map((image, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden aspect-square"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease }}
                >
                  <img
                    src={image}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
