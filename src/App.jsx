import AboutSection from "./Components/AboutSection/AboutSection";
import AvailableSection from "./Components/AvailableSection/AvailableSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import CTASection from "./Components/CTASection/CTASection";
import FAQSection from "./Components/FAQSection/FAQSection";
import FeatureSection from "./Components/FeatureSection/FeatureSection";
import FooterSection from "./Components/FooterSection/FooterSection";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import TeamSection from "./Components/TeamSection/TeamSection";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AvailableSection />
      <AboutSection />
      <CTASection />
      <FAQSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
