import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import HowItWorks from "./components/how-it-works";
import BetaSignUp from "./components/beta-signup";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <BetaSignUp />
      <Footer />
    </div>
  );
}
