import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Story", href: "#story" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="text-cream p-1"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-[hsl(var(--wine))/0.6] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-wine transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: open ? "-20px 0 60px hsl(345 43% 5% / 0.6)" : "none",
        }}
      >
        {/* Close button */}
        <div className="flex justify-end p-8">
          <button
            onClick={() => setOpen(false)}
            className="text-cream hover:text-golden transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Brand */}
        <div className="px-8 mb-12">
          <span className="font-display text-cream text-2xl tracking-editorial italic">
            Minnae Orvèe
          </span>
          <div className="mt-4 divider-golden" />
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1 px-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm tracking-luxury text-beige uppercase py-4 border-b border-[hsl(var(--border))] hover:text-golden transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-8 mt-12">
          <button
            onClick={() => setOpen(false)}
            className="w-full font-body text-xs tracking-luxury text-[hsl(var(--wine))] bg-golden py-3.5 hover:bg-copper transition-colors duration-300 uppercase"
          >
            Join Waitlist
          </button>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="divider-golden" />
          <p className="mt-4 font-body text-[10px] tracking-luxury text-[hsl(var(--typography-accent))] uppercase text-center">
            Luxury Haircare
          </p>
        </div>
      </div>
    </div>
  );
}
