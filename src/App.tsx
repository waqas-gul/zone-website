// App.tsx
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import ZoneComposition from "./components/ZoneComposition";
import Slider from "./components/Slider";
import AIDrivenAppSection from "./components/AIDrivenAppSection";
import RestlessMindSection from "./components/RestlessMindSection";
import PricingSection from "./components/PricingSection";
import TechnicalSpecificationsSection from "./components/TechnicalSpecificationsSection";
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <Layout>
      <Hero />
      <TechnologySection />
      <ZoneComposition />
      <Slider />
      <AIDrivenAppSection />
      <RestlessMindSection />
      <PricingSection />
      <TechnicalSpecificationsSection />
      <FAQSection />
    </Layout>
  );
}

export default App;
