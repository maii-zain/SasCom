import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative py-24">
      {/* Container with gradient border + shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-xl -z-10"></div>
      <div className="max-w-5xl mx-auto px-6 border-4 border-gray-900 rounded-3xl p-10 shadow-inner relative bg-white/10 backdrop-blur-md">

        {/* Title inside hollow cloud */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-14"
        >
          <motion.div
            className="absolute -inset-4 border-4 border-gray-900 rounded-3xl opacity-50"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <h2 className="relative text-3xl md:text-4xl font-bold text-white">
            تواصل معنا
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 text-right relative z-10"
        >
          <div className="relative">
            <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
            <motion.input
              type="text"
              placeholder="الاسم"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(255,255,255,0.15)" }}
              className="pl-12 border border-gray-300 rounded-xl w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
            <motion.input
              type="email"
              placeholder="البريد الإلكتروني"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(255,255,255,0.15)" }}
              className="pl-12 border border-gray-300 rounded-xl w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div className="relative md:col-span-2">
            <FaComment className="absolute top-4 left-4 text-gray-400" />
            <motion.textarea
              placeholder="رسالتك"
              rows="5"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(255,255,255,0.15)" }}
              className="pl-12 pt-4 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(255,255,255,0.3)" }}
  whileTap={{ scale: 0.97 }}
  className="bg-gradient-to-r from-primary to-gray-500 text-white font-semibold px-6 py-3 rounded-xl md:col-span-2 transition-all duration-300 shadow-md hover:shadow-gray-400/50"
>
  إرسال
</motion.button>

        </motion.form>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-0 left-0 w-24 h-24 bg-gray-900/20 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 bg-gray-900/20 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

      </div>
    </section>
  );
}
