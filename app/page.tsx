import Nav from "@/components/Nav";
import EnterGate from "@/components/EnterGate";
import Hero from "@/components/Hero";
import Creds from "@/components/Creds";
import Premise from "@/components/Premise";
import Inside from "@/components/Inside";
import Ascent from "@/components/Ascent";
import Phil from "@/components/Phil";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileApplyBar from "@/components/MobileApplyBar";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <EnterGate />
      <Nav />
      <Hero />
      <Creds />
      <Premise />
      <Inside />
      <Ascent />
      <Phil />
      <FinalCTA />
      <Footer />
      <MobileApplyBar />
      <RevealObserver />
    </>
  );
}
