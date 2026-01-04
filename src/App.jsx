import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Founders from './pages/Founders';
import Contact from './pages/Contact';
import Work from './pages/Work';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Smooth scroll only for hash links, instant for routes
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global Floating Contact Buttons
const FloatingContact = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <a
        href="tel:+919623761343"
        className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-blue-600/40 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919665961721"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-green-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black text-white font-body">
        <Navbar />
        <main className="flex-grow relative z-10 bg-black shadow-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>
        <div className="sticky bottom-0 z-0">
          <Footer />
        </div>
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
