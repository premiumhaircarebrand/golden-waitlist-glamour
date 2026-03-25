export default function Footer() {
  return (
    <footer
      className="py-12 px-8"
      style={{ backgroundColor: "hsl(345 43% 8%)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <span className="font-display text-golden text-lg tracking-editorial italic">
          Minnae Orvèe
        </span>

        {/* Divider */}
        <div className="divider-golden flex-1 hidden md:block mx-12" />

        {/* Links */}
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-xs tracking-luxury text-[hsl(var(--typography-accent))] hover:text-golden transition-colors duration-300 uppercase"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="font-body text-xs text-[hsl(var(--typography-accent))] opacity-50">
          © 2025 Minnae Orvèe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
