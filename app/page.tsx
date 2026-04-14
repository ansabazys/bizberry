import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-[#f0eeeb] text-zinc-900">
        <HeroSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </> 
  );
}
