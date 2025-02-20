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
