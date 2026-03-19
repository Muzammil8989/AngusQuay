import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaCalendarAlt,
  FaUtensils,
  FaUsers,
  FaTruck,
  FaGift,
  FaCreditCard,
  FaGuitar,
  FaTree,
  FaDog,
  FaChild,
  FaBeer,
  FaBirthdayCake,
  FaAppleAlt,
  FaConciergeBell,
} from "react-icons/fa";

const services = [
  { name: "Online Ordering", description: "Order your favourite dishes from the comfort of your own home for delivery or pickup.", icon: FaShoppingCart },
  { name: "Reservations", description: "Book a table in advance to ensure a smooth and hassle-free dining experience.", icon: FaCalendarAlt },
  { name: "Takeout", description: "Enjoy our delicious food from the comfort of your own home.", icon: FaUtensils },
  { name: "Delivery", description: "Get our freshly prepared dishes delivered right to your doorstep.", icon: FaTruck },
  { name: "Catering", description: "Let us handle the food for your next event or private gathering.", icon: FaUtensils },
  { name: "Private Dining", description: "Book our private room for special occasions and memorable events.", icon: FaUsers },
  { name: "Events", description: "Host your next event with us and let us take care of the food and atmosphere.", icon: FaBirthdayCake },
  { name: "Loyalty Program", description: "Join our loyalty programme and earn rewards and exclusive discounts.", icon: FaGift },
  { name: "Gift Cards", description: "Purchase a gift card for friends and family.", icon: FaCreditCard },
  { name: "Party Platters", description: "Order large quantities of our dishes for your next gathering or celebration.", icon: FaConciergeBell },
  { name: "Meal Plans", description: "Sign up for our weekly meal plans and enjoy our food at a discounted rate.", icon: FaUtensils },
  { name: "Dietary Options", description: "We offer gluten-free, vegan, and other options to suit every dietary need.", icon: FaAppleAlt },
];

const specialServices = [
  { name: "Live Music", description: "Enjoy live music and entertainment while you dine with us.", icon: FaGuitar },
  { name: "Outdoor Seating", description: "Relax in our beautiful outdoor seating and patio dining area.", icon: FaTree },
  { name: "Pet-Friendly Dining", description: "Bring your furry friends to our dedicated pet-friendly dining area.", icon: FaDog },
  { name: "Kids' Menu", description: "A special menu and play area designed for our youngest guests.", icon: FaChild },
  { name: "Happy Hour", description: "Enjoy special deals and offers during our daily happy hour.", icon: FaBeer },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Services() {
  return (
    <section className="bg-primary py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-4">
            What We Offer
          </span>
          <h2 className="font-fjalla text-secondary text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Our Services
          </h2>
          <div className="w-12 h-px bg-tertiary mx-auto mt-6" />
        </motion.div>

        {/* Main services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group bg-white border border-secondary/8 p-7 hover:border-tertiary/35 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-400"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-tertiary/10 group-hover:bg-tertiary/20 transition-colors duration-300">
                  <service.icon className="text-tertiary text-base" />
                </div>
                <div>
                  <h3 className="font-fjalla text-secondary text-xl mb-2 tracking-wide">
                    {service.name}
                  </h3>
                  <p className="font-source text-secondary/55 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special services divider */}
        <motion.div
          className="flex items-center gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex-1 h-px bg-secondary/12" />
          <div className="text-center shrink-0">
            <span className="font-source text-tertiary tracking-[0.4em] text-xs uppercase block mb-2">
              Exclusive Experiences
            </span>
            <h3 className="font-fjalla text-secondary text-2xl md:text-3xl tracking-tight">
              Special Services
            </h3>
          </div>
          <div className="flex-1 h-px bg-secondary/12" />
        </motion.div>

        {/* Special services — dark cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialServices.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group bg-secondary p-7 hover:bg-secondary/90 transition-colors duration-400"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-tertiary/20 group-hover:bg-tertiary/30 transition-colors duration-300">
                  <service.icon className="text-tertiary text-base" />
                </div>
                <div>
                  <h3 className="font-fjalla text-primary text-xl mb-2 tracking-wide">
                    {service.name}
                  </h3>
                  <p className="font-source text-primary/55 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
