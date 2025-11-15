import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl shadow-md transition-all duration-300 
      ${scrolled ? "bg-white/90 border-b border-gray-200/40" : "bg-white/10"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* اللوجو */}
        <img
          src="imgs/image-removebg-preview (21).png"
          alt="logo"
          className="h-12 drop-shadow-md"
        />

        {/* لينكات الكمبيوتر */}
        <ul className="hidden md:flex gap-10 font-semibold tracking-wide">
          <li>
            <a
              href="#about"
              className={`transition ${
                scrolled ? "text-primary hover:text-orange-500" : "text-gray-50 hover:text-orange-300"
              }`}
            >
              من نحن
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`transition ${
                scrolled ? "text-primary hover:text-orange-500" : "text-gray-50 hover:text-orange-300"
              }`}
            >
              الخدمات
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`transition ${
                scrolled ? "text-primary hover:text-orange-500" : "text-gray-50 hover:text-orange-300"
              }`}
            >
              الأعمال
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`transition ${
                scrolled ? "text-primary hover:text-orange-500" : "text-gray-50 hover:text-orange-300"
              }`}
            >
              تواصل
            </a>
          </li>
        </ul>

        {/* زرار الموبايل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-between"
        >
          <span
            className={`block h-1 rounded transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-gray-50"
            } ${isOpen ? "rotate-45 translate-y-3" : ""}`}
          />
          <span
            className={`block h-1 rounded transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-gray-50"
            } ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-1 rounded transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-gray-50"
            } ${isOpen ? "-rotate-45 -translate-y-3" : ""}`}
          />
        </button>
      </div>

      {/* منيو الموبايل */}
      <div
        className={`md:hidden backdrop-blur-xl bg-white/30 shadow-lg transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6 font-semibold text-lg">
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className={`${scrolled ? "text-primary" : "text-gray-50"} transition`}
            >
              من نحن
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className={`${scrolled ? "text-primary" : "text-gray-50"} transition`}
            >
              الخدمات
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className={`${scrolled ? "text-primary" : "text-gray-50"} transition`}
            >
              الأعمال
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`${scrolled ? "text-primary" : "text-gray-50"} transition`}
            >
              تواصل
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
