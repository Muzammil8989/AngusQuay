import React from "react";
import { motion } from "framer-motion";
import Background_review from "../../assets/Images/Background_review.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from "react-icons/fa";

const userImages = [
  "https://images.unsplash.com/photo-1668531282396-96bea4cacab5?q=80&w=400&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1678703870782-918c21aac2b2?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1700856417754-cb66c909f4d7?q=80&w=400&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1650630729397-810915b32ac9?q=80&w=400&auto=format&fit=crop",
];

const reviews = [
  { id: 1, name: "John Doe", text: "The food was amazing! I loved the ambiance and the service was top-notch.", rating: 5, image: userImages[0] },
  { id: 2, name: "Jane Smith", text: "A wonderful experience! Highly recommend the pasta dishes.", rating: 4, image: userImages[1] },
  { id: 3, name: "Bob Johnson", text: "Great food and a cosy atmosphere. Will definitely be returning soon.", rating: 3.5, image: userImages[2] },
  { id: 4, name: "Alice Cooper", text: "Absolutely loved the desserts! Will be back for sure.", rating: 5, image: userImages[3] },
  { id: 5, name: "Charlie Brown", text: "Nice place, friendly staff, and decent food.", rating: 4, image: userImages[4] },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) stars.push(<FaStar key={i} className="text-tertiary" />);
    else if (i === Math.ceil(rating) && !Number.isInteger(rating))
      stars.push(<FaStarHalfAlt key={i} className="text-tertiary" />);
    else stars.push(<FaRegStar key={i} className="text-tertiary/30" />);
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

export default function Review() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-secondary">
      {/* Subtle bg texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-8"
        style={{ backgroundImage: `url(${Background_review})`, opacity: 0.07 }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-4">
            What Our Guests Say
          </span>
          <h2 className="font-fjalla text-primary text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Reviews
          </h2>
          <div className="w-12 h-px bg-tertiary mx-auto mt-6" />
        </motion.div>

        {/* Swiper carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pb-14"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="pb-2">
                <motion.div
                  className="bg-white/5 border border-white/10 p-8 h-full flex flex-col gap-5 hover:bg-white/8 hover:border-tertiary/30 transition-all duration-500"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Decorative quote */}
                  <FaQuoteLeft className="text-tertiary/50 text-xl" />

                  {/* Review text */}
                  <p className="font-source text-primary/75 leading-relaxed flex-1 text-sm md:text-base italic">
                    "{review.text}"
                  </p>

                  {/* Stars */}
                  {renderStars(review.rating)}

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-tertiary/50"
                    />
                    <div>
                      <p className="font-fjalla text-primary text-base tracking-wide">
                        {review.name}
                      </p>
                      <p className="font-source text-primary/35 text-xs tracking-widest uppercase">
                        Verified Guest
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
