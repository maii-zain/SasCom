import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const logos = [
  "/imgs/logo1.png",
  "/imgs/logo2.png",
  "/imgs/logo3.png",
  "/imgs/logo4.png",
  "/imgs/logo5.png",
  "/imgs/logo6.png",
];

export default function ClientCarousel() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-12 relative z-10">
          شركاؤنا
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2000 }}
          spaceBetween={40}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center"
              >
                <img src={logo} alt={`Partner ${i}`} className="max-h-20 object-contain"/>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional Background shapes */}
        <div className="absolute inset-0 -z-10 opacity-20 bg-white/5 rounded-3xl"></div>
      </div>
    </section>
  );
}
