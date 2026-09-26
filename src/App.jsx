import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Projects from "./pages/projects";
import ContactPage from "./pages/contact";
import FooterPage from "./pages/footer";
import LayoutPage from "./pages/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import ScrollToTop from "./components/scrolltotop";
import Certifications from "./pages/certifications";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="">
        <Header />
        <main className="overflow-hidden">
          
          {/* mode="wait" ensures the current page slides out BEFORE the new one slides in */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname} 
              
              /* 1. Start slightly lower (y: 40) and invisible */
              initial={{ opacity: 0, y: 40 }} 
              
              /* 2. Glide up to natural position (y: 0) and fade in */
              animate={{ opacity: 1, y: 0 }} 
              
              /* 3. Glide further up (y: -40) and fade out on exit */
              exit={{ opacity: 0, y: -40 }} 
              
              /* Custom easing curve for a premium, smooth deceleration effect */
              transition={{ 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              id="motion"
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LayoutPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

        </main>
        <FooterPage />
      </div>
    </>
  );
}

export default App;

/* import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Projects from "./pages/projects";
import ContactPage from "./pages/contact";
import FooterPage from "./pages/footer";
import LayoutPage from "./pages/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import ScrollToTop from "./components/scrolltotop";
import Certifications from "./pages/certifications";


function App() {

  const location = useLocation();

  

  return (
    <>
    <ScrollToTop/>
      <div className="">
        <Header />
        <main className=" overflow-hidden">
          
            <motion.div
              key={location.key} // Use location.key to trigger animations on route change
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1,scrollBehavior:"smooth" }} // Animate to this state
               // Exit state
              transition={{ duration: 0.8 }}
            id="motion">
              
              <Routes>
                <Route path="/" element={<LayoutPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </motion.div>
          
        </main>
        <FooterPage />
      </div>
    </>
  );
}

export default App;
 */