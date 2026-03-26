import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductStorySection from "@/components/ProductStorySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";

const Index = () => {
  return (
    <main className="bg-wine overflow-x-hidden">
      <StickyHeader />
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <ProductStorySection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
