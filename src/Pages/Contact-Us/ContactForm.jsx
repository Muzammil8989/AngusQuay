import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { notification } from "antd";

const ease = [0.25, 0.1, 0.25, 1];

const inputClass =
  "w-full px-4 py-3 bg-transparent border border-secondary/20 font-source text-secondary text-sm placeholder-secondary/35 focus:outline-none focus:border-tertiary transition-colors duration-300";

const contactDetails = [
  { icon: FaMapMarkerAlt, text: "South Tay Square, Dundee, Angus, DD1 1PB" },
  { icon: FaPhoneAlt,     text: "0141 611 2694" },
  { icon: FaEnvelope,     text: "clearbusinessbyadrian@gmail.com" },
  { icon: FaClock,        text: "Mon – Sun · 1:00 PM – 11:00 PM" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    notification.success({
      message: "Message Sent",
      description: "Thank you! We'll be in touch soon.",
      placement: "topRight",
    });
    reset();
  };

  return (
    <section className="bg-primary py-24 md:py-28 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease }}
        >
          <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-4">
            Get in Touch
          </span>
          <h2 className="font-fjalla text-secondary text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Visit Us at Angus Quay
          </h2>
          <div className="w-12 h-px bg-tertiary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── Contact form ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.h3
              variants={itemVariants}
              className="font-fjalla text-secondary text-2xl mb-8 tracking-wide"
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <motion.div variants={itemVariants}>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="font-source text-tertiary text-xs mt-1.5">
                    {errors.name.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  placeholder="Phone Number"
                  className={inputClass}
                />
                {errors.phone && (
                  <p className="font-source text-tertiary text-xs mt-1.5">
                    {errors.phone.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email Address"
                  type="email"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="font-source text-tertiary text-xs mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea
                  {...register("message")}
                  placeholder="How can we help you?"
                  className={`${inputClass} h-32 resize-none`}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/85 text-primary font-source tracking-[0.25em] uppercase text-xs py-4 transition-colors duration-300"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* ── Contact info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease }}
            className="flex flex-col justify-center"
          >
            <div className="bg-secondary p-10 relative h-full">
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-tertiary" />

              <p className="font-source text-tertiary tracking-[0.4em] text-xs uppercase mb-4">
                Find Us
              </p>
              <h3 className="font-fjalla text-primary text-2xl mb-2 tracking-wide">
                Special Requests?
              </h3>
              <p className="font-source text-primary/60 text-sm leading-relaxed mb-10">
                Dietary concerns? Questions about an upcoming event? Drop us a
                line and we'll get back to you soon.
              </p>

              <div className="space-y-6">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-tertiary/20 mt-0.5">
                      <item.icon className="text-tertiary text-sm" />
                    </div>
                    <p className="font-source text-primary/70 text-sm leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
