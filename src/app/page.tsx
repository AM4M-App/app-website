import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import ConnectSection from "@/components/ConnectSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <ConnectSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
