import Navbar from "@/components/section/Navbar";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Features from "@/components/section/Features";
import Faq from "@/components/section/Faq";
import PaymentPlan from "@/components/section/PaymentPlan";
import SiteVisitCTA from "@/components/section/SiteVisitCTA";
import Footer from "@/components/section/Footer";
import NewsletterSection from "@/components/section/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B]">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Faq />
      <PaymentPlan />
      <SiteVisitCTA />
      <NewsletterSection />
      <Footer />
    </main>
  );
}