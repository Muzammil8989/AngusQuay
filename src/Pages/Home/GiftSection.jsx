import { motion, useScroll, useTransform } from "framer-motion";
import { FaGift, FaPaperPlane, FaCreditCard } from "react-icons/fa";
import { useRef } from "react";
import Restaurant from "../../assets/Images/Restaurant.jpg";

const features = [
  {
    icon: FaGift,
    title: "Perfect Gift",
    description: "Give the gift of an exceptional dining experience they'll never forget.",
  },
  {
    icon: FaPaperPlane,
    title: "Instant Delivery",
    description: "Digital vouchers delivered straight to your inbox — ready to share.",
  },
  {
    icon: FaCreditCard,
    title: "Flexible Values",
    description: "Choose any amount from £20 to £500, suitable for any occasion.",
  },
];

const ease = [0.25, 0.1, 0.25, 1];

export default function GiftSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={containerRef} className="bg-secondary py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Image column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95, ease }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <motion.img
                style={{ y: imageY }}
                src={Restaurant}
                alt="Restaurant interior"
                className="object-cover w-full h-[110%]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 to-transparent" />
            </div>

            {/* Decorative offset frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-tertiary/25 -z-10" />

            {/* Small accent dot */}
            <div className="absolute -top-4 -left-4 w-4 h-4 bg-tertiary/40" />
          </motion.div>

          {/* ── Content column ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95, ease }}
            className="text-primary space-y-8"
          >
            {/* Heading */}
            <div>
              <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-5">
                Give an Experience
              </span>
              <h2 className="font-fjalla text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none">
                GIFT
                <br />
                VOUCHERS
              </h2>
              <div className="w-12 h-px bg-tertiary mt-6" />
            </div>

            {/* Description */}
            <p className="font-source text-primary/65 leading-relaxed text-sm md:text-base">
              Send a gift voucher to friends and family or save it for your own future visit.
              Perfect for creating unforgettable memories at Angus Quay.
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.2 + i * 0.12, ease }}
                  className="flex items-start gap-5 p-5 border border-primary/8 hover:border-tertiary/30 hover:bg-primary/5 transition-all duration-400"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-tertiary/20 hover:bg-tertiary/30 transition-colors duration-300">
                    <item.icon className="text-tertiary text-sm" />
                  </div>
                  <div>
                    <h3 className="font-fjalla text-primary text-lg tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <p className="font-source text-primary/55 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-source tracking-[0.25em] uppercase text-xs border border-primary/40 hover:border-tertiary hover:bg-tertiary text-primary px-10 py-4 transition-all duration-500"
            >
              Purchase Gift Voucher
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
