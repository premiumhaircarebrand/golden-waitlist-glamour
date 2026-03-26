import { useState, useEffect } from "react";
import MobileNav from "@/components/MobileNav";

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{
        backgroundColor: "hsl(345 43% 12% / 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="flex items-center justify-between px-8 md:px-16 py-4">
        <span className="font-display text-cream text-xl tracking-editorial italic">
          Minnae Orvèe
        </span>
        <div className="flex items-center gap-8">
          <span className="font-body text-xs tracking-luxury text-[hsl(var(--typography-accent))] uppercase hidden md:block hover:text-golden transition-colors cursor-pointer">
            About
          </span>
          <span className="font-body text-xs tracking-luxury text-[hsl(var(--typography-accent))] uppercase hidden md:block hover:text-golden transition-colors cursor-pointer">
            Story
          </span>
          <button className="font-body text-xs tracking-luxury text-golden border border-golden px-5 py-2 hover:bg-golden hover:text-[hsl(var(--wine))] transition-colors duration-300 uppercase hidden md:block">
            Join Waitlist
          </button>
          <MobileNav />
        </div>
      </div>
      <div className="divider-golden" />
    </header>
  );
}
