// Placeholder logomark (hand-drawn infinity from the reference).
// TODO(asset): replace the <path> with Phil's real STRATOSPHERE logomark SVG.
export default function Logomark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 50" aria-hidden="true">
      <path d="M22,25 C22,9 40,9 50,25 C60,41 78,41 78,25 C78,9 60,9 50,25 C40,41 22,41 22,25 Z" />
    </svg>
  );
}
