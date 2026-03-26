import { useState } from "react";
import heroTexture from "@/assets/hero-texture.jpg";
import productBottle from "@/assets/product-bottle.png";
import { useInView } from "@/hooks/useInView";
import MobileNav from "@/components/MobileNav";

interface EmailFormProps {
  buttonLabel: string;
  placeholder?: string;
  onSuccess: () => void;
}

function EmailForm({ buttonLabel, placeholder = "Enter your email", onSuccess }: EmailFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    onSuccess();
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 animate-fade-up">
        <div className="h-px w-8 bg-golden" />
        <p className="font-body text-sm tracking-editorial text-golden">You're on the list.</p>
        <div className="h-px w-8 bg-golden" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="w-full bg-transparent border border-[hsl(var(--border))] px-5 py-3.5 text-sm font-body text-cream placeholder:text-[hsl(var(--typography-accent))] focus:outline-none focus:border-golden transition-colors duration-300"
      />
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent border border-[hsl(var(--border))] px-5 py-3.5 text-sm font-body text-cream placeholder:text-[hsl(var(--typography-accent))] focus:outline-none focus:border-golden transition-colors duration-300"
        />
        <button
          type="submit"
          className="bg-golden text-[hsl(var(--wine))] font-body font-medium text-xs tracking-luxury px-7 py-3.5 hover:bg-copper transition-colors duration-300 whitespace-nowrap"
        >
          {buttonLabel}
        </button>
      </div>
      {error && <p className="text-xs text-red-400 font-body">{error}</p>}
    </form>
  );
}

export default function HeroSection() {
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.01 });

  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor: "hsl(var(--wine))" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroTexture}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-25"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, hsl(345 43% 8% / 0.92) 0%, hsl(345 43% 12% / 0.70) 50%, hsl(345 43% 14% / 0.85) 100%)",
          }}
        />
        {/* Subtle glow from top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% -10%, hsl(25 47% 60% / 0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-10">
        <div>
          <span className="font-display text-cream text-xl tracking-editorial italic">
            Minnae Orvèe
          </span>
        </div>
        <div className="flex items-center gap-8">
          <span className="font-body text-xs tracking-luxury text-[hsl(var(--typography-accent))] uppercase hidden md:block">
            About
          </span>
          <span className="font-body text-xs tracking-luxury text-[hsl(var(--typography-accent))] uppercase hidden md:block">
            Story
          </span>
          <button className="font-body text-xs tracking-luxury text-golden border border-golden px-5 py-2 hover:bg-golden hover:text-[hsl(var(--wine))] transition-colors duration-300 uppercase">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero content */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 flex-1 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-8">
            {/* Pre-headline */}
            <div className={`flex items-center gap-4 ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div className="h-px w-12 bg-golden opacity-70" />
              <span className="font-body text-xs tracking-luxury text-golden uppercase">
                Est. 2025
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`font-display text-cream leading-[0.92] ${inView ? "animate-fade-up delay-200" : "opacity-0"}`}
              style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)" }}
            >
              Luxury Haircare,
              <br />
              <span className="italic text-golden">Redefined.</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`font-body text-beige text-base md:text-lg leading-relaxed max-w-md font-light ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}
            >
              High-performance formulas crafted with rare oils and modern science.
              Designed for those who demand excellence.
            </p>

            {/* Form */}
            <div className={`${inView ? "animate-fade-up delay-500" : "opacity-0"}`}>
              <EmailForm
                buttonLabel="Join the Waitlist"
                onSuccess={() => setWaitlistSuccess(true)}
              />
              {!waitlistSuccess && (
                <p className="mt-3 text-xs font-body text-[hsl(var(--typography-accent))]">
                  Limited early access — no spam, ever.
                </p>
              )}
            </div>
          </div>

          {/* Product image */}
          <div
            className={`flex justify-center items-center ${inView ? "animate-fade-in delay-400" : "opacity-0"}`}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, hsl(25 47% 60% / 0.20) 0%, transparent 70%)",
                  transform: "scale(1.3)",
                }}
              />
              <img
                src={productBottle}
                alt="Minnae Orvèe luxury hair oil"
                width={1024}
                height={1280}
                className="relative z-10 w-72 md:w-80 lg:w-96 object-cover shadow-card animate-float"
                style={{ borderRadius: "0" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 flex flex-col items-center pb-10 gap-2">
        <div className="h-px w-16 divider-golden" />
        <span className="font-body text-xs tracking-luxury text-[hsl(var(--typography-accent))] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-golden/40 to-transparent" />
      </div>
    </section>
  );
}
