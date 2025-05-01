import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import InfoCardSection from "@/components/landing/InfoCardSection";

export default function Home() {
  return (
    <div className="text-white">
      <Header />
      <Hero />
      <InfoCardSection />
      <Footer />
    </div>
  );
}
