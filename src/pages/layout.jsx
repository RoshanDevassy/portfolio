import AboutPage from "./about";
import Home from "./home";
import { ParallaxProvider } from "react-scroll-parallax";
import Projects from "./projects";
import ContactPage from "./contact";

export default function LayoutPage() {
  return (
    <>
      <ParallaxProvider>
        <Home />
        <AboutPage />
        <Projects/>
        <ContactPage/>
      </ParallaxProvider>
    </>
  );
}
