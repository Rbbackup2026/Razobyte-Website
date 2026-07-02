import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PromoPopup from "@/components/layout/PromoPopup";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import About from "@/components/home/About";
import AboutVideo from "@/components/home/AboutVideo";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";
import Solutions from "@/components/home/Solutions";
import CustomProducts from "@/components/home/CustomProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/home/CTABanner";
import FAQ from "@/components/home/FAQ";
import Blogs from "@/components/home/Blogs";
import Clients from "@/components/home/Clients";
import ContactForm from "@/components/home/ContactForm";
import Testimonials from "@/components/home/Testimonials";
import Portfolio from "@/components/home/Portfolio";

export default function Home() {
  return (
    <>
      <PromoPopup />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <AboutVideo />
        <Services />
        <TechStack />
        <Solutions />
        <CustomProducts />
        <WhyChooseUs />
        <CTABanner />
        <FAQ />
        <Blogs />
        <Clients />
        <ContactForm />
        <Testimonials />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
