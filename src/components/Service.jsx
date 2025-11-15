import { motion } from "framer-motion";
import { FaLaptopCode, FaBullhorn, FaPalette } from "react-icons/fa";

const services = [
  { 
    title: "تطوير المواقع", 
    desc: "نصمم ونبرمج مواقع سريعة وجذابة تتوافق مع جميع الأجهزة. نركز على تجربة المستخدم وسهولة التصفح مع واجهات حديثة ومتجاوبة لضمان أفضل أداء ممكن لموقعك الإلكتروني. نحن ندمج أحدث التقنيات لضمان أمان وسرعة الموقع.", 
    icon: <FaLaptopCode size={50} />
  },
  { 
    title: "التسويق الرقمي", 
    desc: "نساعدك على الوصول لعملائك المستهدفين بدقة وفاعلية عبر استراتيجيات تسويق مبتكرة. نستخدم أدوات التحليل ووسائل التواصل الاجتماعي والإعلانات المدفوعة لتحقيق نتائج ملموسة وزيادة معدل التحويل، مع متابعة دقيقة لأداء الحملات باستمرار.", 
    icon: <FaBullhorn size={50} />
  },
  { 
    title: "تصميم الهوية", 
    desc: "نخلق هوية بصرية قوية وفريدة تعكس شخصية شركتك. من اللوغو والألوان إلى الخطوط والعناصر البصرية، نحرص على تكوين هوية متكاملة تجعل علامتك التجارية مميزة وسهلة التعرف عليها من العملاء وتعزز الثقة والمصداقية.", 
    icon: <FaPalette size={50} />
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-gray-900 overflow-hidden">

      {/* خلفية تكنولوجية: شبكة نقط متحركة */}
      <div className="absolute inset-0 opacity-10 pointer-events-none animate-grid-move"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* خطوط بيانات تتحرك */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-white">خدماتنا</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-10 bg-gradient-to-b 
              from-gray-800 to-gray-900 border border-gray-700
              shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
            >
              {/* لمعة بدخول الماوس */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              transition duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                }}
              />

              {/* دائرة نبضية صغيرة – إحساس tech */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="text-gray-300 mb-5 group-hover:text-white transition">
                  {s.icon}
                </div>

                <h3 className="text-white font-bold text-2xl mb-3">
                  {s.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          50% { background-position: 20px 20px; }
          100% { background-position: 0 0; }
        }
        .animate-grid-move {
          animation: gridMove 8s infinite linear;
        }
      `}</style>
    </section>
  );
}
