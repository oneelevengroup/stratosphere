import Image from "next/image";

// Phil Stringer's STRATOSPHERE logomark.
export default function Logomark({ className }: { className?: string }) {
  return (
    <Image
      className={className ?? "logomark"}
      src="/phil-logo.png"
      alt="Phil Stringer STRATOSPHERE logo"
      width={36}
      height={36}
      preload
    />
  );
}
