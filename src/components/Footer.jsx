import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* White separator space */}
      <div className="w-full h-8 bg-white"></div>

      {/* Main Footer */}
      <div className="bg-gradient-to-r from-primary to-gray-800 text-white pt-16 relative overflow-hidden">
        {/* Decorative top shadow */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gray-900 opacity-20 -skew-y-3"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-right relative z-10">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
            <p className="text-gray-300 mb-2">📍 العنوان: شارع التكنولوجيا، القاهرة، مصر</p>
            <p className="text-gray-300 mb-2">📧 البريد الإلكتروني: info@sascom.com</p>
            <p className="text-gray-300">📞 الهاتف: +20 123 456 789</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#services" className="hover:text-primary transition">خدماتنا</a></li>
              <li><a href="#about" className="hover:text-primary transition">من نحن</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition">آراء العملاء</a></li>
              <li><a href="#contact" className="hover:text-primary transition">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4">تابعنا</h4>
            <div className="flex gap-4 justify-end">
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-primary transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-primary transition">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-primary transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-primary transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-sm text-center">
          <p>© {new Date().getFullYear()} ساسكوم - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </motion.footer>
  );
}
