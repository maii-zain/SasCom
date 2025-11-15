import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Service';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientCarousel from './components/Partners';

function App() {
  return (
    <div className="App">
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <Navbar />
  <Hero />
  <About />
  {/* <Services /> */}
  <Projects />
  <Testimonials />
  <Contact />
  {/* <ClientCarousel></ClientCarousel> */}
  <Footer />
</motion.div>

 
    </div>
  );
}

export default App;
