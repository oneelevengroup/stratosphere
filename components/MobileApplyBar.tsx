import Link from "next/link";

// Sticky Apply bar shown only on small screens.
export default function MobileApplyBar() {
  return (
    <div className="mobile-apply">
      <Link href="/apply">Apply for the next cohort</Link>
    </div>
  );
}
