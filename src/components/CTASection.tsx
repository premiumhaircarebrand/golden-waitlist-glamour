import { useInView } from "@/hooks/useInView";

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
        <div className={`flex items-center gap-4 ${inView ? "animate-fade-up" : "opacity-0"}`}>
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

        {/* CTA Button — scroll to hero form */}
        <div className={`${inView ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-block bg-golden text-wine font-body font-medium text-xs tracking-luxury px-12 py-4 hover:bg-copper transition-colors duration-300 uppercase"
          >
            Join the Waitlist
          </a>
        </div>

        {/* Fine print */}
        <p className={`font-body text-xs text-[hsl(var(--typography-accent))] ${inView ? "animate-fade-up delay-500" : "opacity-0"}`}>
          Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
