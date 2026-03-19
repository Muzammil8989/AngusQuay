import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const ease = [0.25, 0.1, 0.25, 1];

const socialLinks = [
  { icon: FaFacebook,  href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter,   href: "#", label: "Twitter" },
];

const columns = [
  {
    isLogo: true,
    heading: "Angus Quay",
    sub: "The Tasty House",
    lines: ["Fine Dining Since 2012", "South Tay Square, Dundee"],
  },
  {
    heading: "Contact",
    lines: ["0141 611 2694", "clearbusinessbyadrian@gmail.com"],
  },
  {
    heading: "Address",
    lines: ["South Tay Square", "Dundee, Angus", "DD1 1PB"],
  },
  {
    heading: "Hours",
    lines: ["Monday – Sunday", "1:00 PM – 11:00 PM", "Bookings Recommended"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-6 py-16">

        {/* Top accent line */}
        <div className="w-full h-px bg-tertiary/30 mb-14" />

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
            >
              {col.isLogo ? (
                <>
                  <h2 className="font-fjalla text-primary text-2xl tracking-wide mb-2">
                    {col.heading}
                  </h2>
                  <p className="font-source text-tertiary text-xs tracking-widest uppercase mb-5">
                    {col.sub}
                  </p>
                  {col.lines.map((line, j) => (
                    <p key={j} className="font-source text-primary/40 text-sm mb-1.5">
                      {line}
                    </p>
                  ))}
                </>
              ) : (
                <>
                  <h3 className="font-source text-tertiary tracking-[0.38em] text-xs uppercase mb-5">
                    {col.heading}
                  </h3>
                  {col.lines.map((line, j) => (
                    <p key={j} className="font-source text-primary/50 text-sm mb-2">
                      {line}
                    </p>
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-14 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <p className="font-source text-primary/30 text-xs tracking-wide text-center md:text-left">
            &copy; {new Date().getFullYear()} Angus Quay. All rights reserved.
            &nbsp;·&nbsp; Trading since November 2012.
          </p>

          <div className="flex gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                aria-label={link.label}
                className="w-9 h-9 flex items-center justify-center border border-primary/12 text-primary/40 hover:border-tertiary/50 hover:text-tertiary transition-all duration-300"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <link.icon size={13} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
