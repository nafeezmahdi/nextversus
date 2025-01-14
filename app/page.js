import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Explore from "@/components/home/Explore";
import Feedback from "@/components/home/Feedback";
import GetStarted from "@/components/home/GetStarted";
import Hero from "@/components/home/Hero";
import Insights from "@/components/home/Insights";
import WhatsNew from "@/components/home/WhatsNew";
import World from "@/components/home/World";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
