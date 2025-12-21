import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConnectSection from "@/components/ConnectSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ConnectSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
