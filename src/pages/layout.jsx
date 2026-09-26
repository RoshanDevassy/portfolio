import AboutPage from "./about";
import Home from "./home";
import { ParallaxProvider } from "react-scroll-parallax";
import Projects from "./projects";
import ContactPage from "./contact";
import Certifications from "./certifications";

export default function LayoutPage() {
  return (
    <>
      <ParallaxProvider>
        <Home />
        <AboutPage />
        <Projects/>
        <Certifications/>
        <ContactPage/>
      </ParallaxProvider>
    </>
  );
}
