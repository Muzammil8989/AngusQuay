import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const ease = [0.25, 0.1, 0.25, 1];

export default function SocialSection() {
  return (
    <section className="relative bg-primary py-20 overflow-hidden">
      {/* Large decorative watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-fjalla text-[160px] md:text-[240px] lg:text-[300px] text-secondary/[0.04] whitespace-nowrap tracking-tighter leading-none">
          FOLLOW
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease }}
        >
          <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-4">
            Stay Connected
          </span>
          <h2 className="font-fjalla text-secondary text-3xl md:text-4xl lg:text-5xl tracking-tight">
            Follow Our Journey
          </h2>
          <div className="w-12 h-px bg-tertiary mx-auto mt-5" />
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              aria-label={link.label}
              className="w-12 h-12 flex items-center justify-center border border-secondary/20 text-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, ease }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.93 }}
            >
              <link.icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Handle hint */}
        <motion.p
          className="font-source text-secondary/35 text-xs tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          @angusquay
        </motion.p>
      </div>
    </section>
  );
}
