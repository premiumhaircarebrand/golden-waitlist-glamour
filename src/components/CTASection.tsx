import { useState } from "react";
import { useInView } from "@/hooks/useInView";

interface EmailFormProps {
  buttonLabel: string;
  onSuccess?: () => void;
}

function CTAEmailForm({ buttonLabel, onSuccess }: EmailFormProps) {
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
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 animate-fade-up">
        <div className="h-px w-16 bg-golden" />
        <p className="font-display text-golden text-xl italic">
          You're on the list.
        </p>
        <p className="font-body text-beige text-sm font-light">
          We'll be in touch before the world knows.
        </p>
        <div className="h-px w-16 bg-golden" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="w-full bg-transparent border border-golden/30 px-5 py-3.5 text-sm font-body text-cream placeholder:text-[hsl(var(--typography-accent))] focus:outline-none focus:border-golden transition-colors duration-300 text-center"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full bg-transparent border border-golden/30 px-5 py-3.5 text-sm font-body text-cream placeholder:text-[hsl(var(--typography-accent))] focus:outline-none focus:border-golden transition-colors duration-300 text-center"
      />
      <button
        type="submit"
        className="w-full bg-golden text-[hsl(var(--wine))] font-body font-medium text-xs tracking-luxury py-4 hover:bg-copper transition-colors duration-300 uppercase"
      >
        {buttonLabel}
      </button>
      {error && <p className="text-xs text-red-400 font-body text-center">{error}</p>}
    </form>
  );
}

export default function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative py-36 px-8 overflow-hidden"
      style={{ backgroundColor: "hsl(var(--wine))" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(25 47% 60% / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center gap-10">
        {/* Pre-text */}
        <div
          className={`flex items-center gap-4 ${inView ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="h-px w-10 bg-golden/50" />
          <span className="font-body text-xs tracking-luxury text-golden uppercase">
            Early Access
          </span>
          <div className="h-px w-10 bg-golden/50" />
        </div>

        {/* Headline */}
        <h2
          className={`font-display text-cream leading-tight ${inView ? "animate-fade-up delay-200" : "opacity-0"}`}
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Be First.
          <br />
          <span className="italic text-golden">Stay Ahead.</span>
        </h2>

        {/* Subtext */}
        <p
          className={`font-body text-beige text-sm leading-relaxed max-w-sm font-light ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}
        >
          Join our founding circle and receive exclusive first access, introductory
          pricing, and a glimpse behind the formulation.
        </p>

        {/* Form */}
        <div className={`w-full ${inView ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <CTAEmailForm buttonLabel="Get Early Access" />
        </div>

        {/* Fine print */}
        <p
          className={`font-body text-xs text-[hsl(var(--typography-accent))] ${inView ? "animate-fade-up delay-500" : "opacity-0"}`}
        >
          Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
