import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";

const testimonials = [
  { name: "محمد علي", quote: "الخدمة ممتازة جدًا ونتائج ملموسة من أول شهر." },
  { name: "سارة أحمد", quote: "تصميمهم احترافي وفريق الدعم متعاون لأقصى درجة." },
  { name: "يوسف إبراهيم", quote: "ساعدوني أطور موقع شركتي وبقى أسرع 3 مرات!" },
];

// شخصية تكنولوجية مرحة + Animated Jump
const TechMascot = ({ index }) => (
  <motion.div
    key={index}
    initial={{ x: 0, y: 0 }}
    animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
    transition={{ repeat: 1, duration: 0.8 }}
    className="absolute -top-6 -right-6 w-14 h-14"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#444"
      viewBox="0 0 24 24"
      width="56"
      height="56"
      className="drop-shadow-xl"
    >
      <path d="M12 2a1 1 0 0 1 1 1v1.05A7.002 7.002 0 0 1 18.95 11H20a1 1 0 1 1 0 2h-1.05A7.002 7.002 0 0 1 13 18.95V20a1 1 0 1 1-2 0v-1.05A7.002 7.002 0 0 1 5.05 13H4a1 1 0 1 1 0-2h1.05A7.002 7.002 0 0 1 11 5.05V4a1 1 0 0 1 1-1zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
    </svg>
  </motion.div>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#f0f0f3] shadow-inner shadow-gray-300 relative">
      <div className="max-w-5xl mx-auto px-6 text-center relative">

        {/* Title with Cloud Outline */}
        <div className="relative flex items-center justify-center mb-20">
          <motion.svg
            width="300"
            height="140"
            viewBox="0 0 300 140"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.path
              d="
              M70 110 
              H230 
              C265 110 280 90 280 70 
              C280 45 260 35 245 40 
              C240 15 210 5 185 20 
              C170 -5 120 -5 105 20 
              C85 10 55 20 55 45 
              C55 70 35 80 35 95 
              C35 110 50 110 70 110
              "
              fill="none"
              stroke="#2e2e2e"
              strokeWidth="5"
              strokeLinecap="round"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.svg>

          <h2 className="absolute text-3xl font-bold text-gray-900">
            آراء عملاءنا
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          loop
          autoplay={{ delay: 2500 }}
          spaceBetween={40}
          slidesPerView={1}
          speed={800}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                className="relative p-10 rounded-2xl shadow-2xl mx-auto max-w-2xl
                bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700
                hover:shadow-gray-700/40 transition-all"
              >
                <TechMascot index={activeIndex} />
                <p className="text-gray-300 italic text-xl mb-4 leading-relaxed">
                  “{t.quote}”
                </p>
                <h4 className="font-semibold text-gray-200 text-lg">
                  {t.name}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 
            w-12 h-12 bg-gray-900 text-white rounded-full 
            flex items-center justify-center cursor-pointer shadow-lg
            hover:bg-gray-700 hover:scale-110 transition">
          ‹
        </div>

        <div className="next-btn absolute right-2 top-1/2 -translate-y-1/2 
            w-12 h-12 bg-gray-900 text-white rounded-full 
            flex items-center justify-center cursor-pointer shadow-lg
            hover:bg-gray-700 hover:scale-110 transition">
          ›
        </div>
      </div>
    </section>
  );
}
