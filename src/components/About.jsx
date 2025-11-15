import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-white">

      {/* ديكور خفيف */}
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* الكارد بس أبيض */}
        <motion.div
          className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* الصور على اليسار - غامقة */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 relative">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="col-span-2 row-span-1 w-full h-64 rounded-2xl 
              bg-gray-900 shadow-xl border border-gray-700 overflow-hidden"
            >
              <img
                src="/imgs/ab2.webp"
                alt="About Main"
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full h-40 rounded-2xl bg-gray-900 shadow-xl 
              border border-gray-700 overflow-hidden"
            >
              <img
                src="/imgs/ab1.jpg"
                alt="About Sub 1"
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full h-40 rounded-2xl bg-gray-900 shadow-xl 
              border border-gray-700 overflow-hidden"
            >
              <img
                src="/imgs/ab3.jpg"
                alt="About Sub 2"
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>

            <div className="absolute top-0 left-0 w-10 h-10 border-4 border-primary rounded-br-lg"></div>
          </div>

          {/* النصوص على اليمين */}
          <div className="flex-1 flex flex-col justify-center text-right">
            <h2 className="text-4xl font-bold mb-6 text-gray-700 leading-tight">
              نحن نبتكر حلولًا رقمية <span className="text-primary">مبتكرة</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed text-justify text-justify-last-right mb-6">
              فريقنا يعمل على تقديم حلول تقنية وإبداعية تجمع بين التصميم، التطوير، والتسويق الرقمي،
              لضمان تجربة مستخدم مميزة ونمو مستدام للأعمال. نبحث دائمًا عن الابتكار وتقديم قيمة
              حقيقية من خلال فهم احتياجات السوق ومواكبة أحدث التقنيات.
            </p>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-auto">
                <h3 className="text-primary font-semibold text-xl mb-2">الاستشارات التقنية</h3>
                <p className="text-gray-500 text-justify text-justify-last-right leading-relaxed">
                  نقدم استشارات دقيقة تعتمد على تحليل البيانات وفهم السوق، بهدف خلق حلول تقنية
                  متطورة وفعالة تساهم في نجاح الأعمال وتطوير حضورها الرقمي.
                </p>
              </div>

              <div className="flex-auto">
                <h3 className="text-primary font-semibold text-xl mb-2">تجربة المستخدم والتصميم</h3>
                <p className="text-gray-500 text-justify text-justify-last-right leading-relaxed">
                  نركز على تقديم تصميمات حديثة وسهلة الاستخدام تضمن تجربة سلسة ومريحة. نخلق واجهات
                  تدمج الجاذبية والبساطة لتحقيق أعلى درجات التفاعل والرضا لدى المستخدم.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS داخل نفس الملف */}
      <style jsx>{`
        .text-justify-last-right {
          text-align-last: right;
        }
      `}</style>
    </section>
  );
}
