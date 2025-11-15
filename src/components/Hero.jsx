import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* خلفية GIF */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/imgs/CS2.gif"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* overlay خفيف جدًا */}
      <div className="absolute inset-0 -z-0 bg-black/20 backdrop-blur-[1px]"></div>

      {/* محتوى الهيرو */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight 
            text-white drop-shadow-lg">
            نقود تحولك الرقمي بذكاء وإبداع
          </h1>

          <p className="text-lg text-gray-100/90 my-6 leading-relaxed max-w-xl drop-shadow-md">
            نقدم حلولًا احترافية تجمع التقنية والإبداع لنساعدك على بناء حضور
            قوي ومؤثر في عالم رقمي سريع التطور.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-7 py-3 rounded-xl font-medium shadow-md hover:shadow-primary/30 transition">
              ابدأ الآن
            </button>
            <button className="border border-white text-white px-7 py-3 rounded-xl font-medium hover:bg-white hover:text-primary transition">
              تفاصيل أكثر
            </button>
          </div>
        </motion.div>

      </div>

      {/* دوائر ديكور */}
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
      />

    </section>
  );
}
