import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DiveClouds from "@/components/DiveClouds";
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
      <Nav />
      {/* pinned dive stage: the hero scrubs the zoom-into-clouds in place,
          then crossfades to the content behind it */}
      <div className="dive-stage">
        <div className="dive-pin">
          <Hero />
          <DiveClouds />
        </div>
      </div>
      {/* everything after the dive sits behind the pin and is revealed by the
          crossfade (see .after-dive in globals.css) */}
      <div className="after-dive">
        <Creds />
        <Premise />
        <Inside />
        <Ascent />
        <Phil />
        <FinalCTA />
        <Footer />
      </div>
      <MobileApplyBar />
      <RevealObserver />
    </>
  );
}
