import { useInView } from "@/hooks/useInView";

export default function SocialProofSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "hsl(var(--wine-light))" }}
    >
      {/* Subtle top line */}
      <div className="divider-golden mx-auto max-w-xs mb-16" />

      <div className={`text-center px-8 ${inView ? "animate-fade-up" : "opacity-0"}`}>
        <p
          className="font-display text-cream italic mb-4"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)" }}
        >
          "Launching soon. Be the first to experience Minnae Orvèe."
        </p>
        <span className="font-body text-xs tracking-luxury text-golden uppercase block mt-6">
          Limited Early Access
        </span>
      </div>

      {/* Decorative numbers row */}
      <div
        className={`mt-16 max-w-4xl mx-auto px-8 grid grid-cols-3 gap-8 text-center ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}
      >
        {[
          { value: "100%", label: "Clean Formulation" },
          { value: "12+", label: "Rare Botanical Oils" },
          { value: "0", label: "Harmful Additives" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <span
              className="font-display text-golden"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {stat.value}
            </span>
            <span className="font-body text-xs tracking-editorial text-[hsl(var(--typography-accent))] uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className="divider-golden mx-auto max-w-xs mt-16" />
    </section>
  );
}
