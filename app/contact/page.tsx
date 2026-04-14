import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f0eeeb] pt-[9.5rem] pb-16 sm:pt-44">
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
