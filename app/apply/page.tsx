import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apply — STRATOSPHERE",
  description: "Apply for the next STRATOSPHERE cohort.",
};

// Placeholder application route. The Apply buttons across the site point here.
// TODO(asset): wire this to the real application form, Calendly, or Typeform.
export default function Apply() {
  return (
    <>
      <Nav />
      <main className="apply-page">
        <div className="wrap">
          <div className="kicker" style={{ justifyContent: "center" }}>
            Next cohort enrolling now
          </div>
          <h1>
            Hold Your <span className="lime">Seat.</span>
          </h1>
          <p>
            The application opens here. Spots are limited and the cohort moves
            together, so enrollment closes when it fills.
          </p>
          <p style={{ color: "var(--muted-dim)", fontSize: "13.5px" }}>
            Application form coming soon. In the meantime, the team will share
            the investment and next steps on the call.
          </p>
          <Link href="/" className="back">
            &#8592; Back to STRATOSPHERE
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
