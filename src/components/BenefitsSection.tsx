import { useInView } from "@/hooks/useInView";

const benefits = [
  {
    number: "01",
    title: "Nourishes Deeply",
    description:
      "Penetrating oils drawn from Moroccan argan, Abyssinian, and rare Kalahari melon seed work beneath the surface to restore vitality at the cellular level.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-golden">
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 2v4M14 22v4M2 14h4M22 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M5.8 5.8l2.8 2.8M19.4 19.4l2.8 2.8M5.8 22.2l2.8-2.8M19.4 8.6l2.8-2.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Repairs & Strengthens",
    description:
      "Our bio-adaptive protein complex targets damage at the cortex, rebuilding structural integrity strand by strand — visibly stronger from the first application.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-golden">
        <path d="M14 4c0 0-8 4-8 10a8 8 0 0016 0C22 8 14 4 14 4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M14 10v8M11 13l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Salon-Grade at Home",
    description:
      "Developed alongside master colorists and trichologists, each formula delivers professional-grade results — without the appointment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-golden">
        <rect x="4" y="10" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 10V8a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M11 17h6M14 14v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-28 px-8 md:px-16"
      style={{ backgroundColor: "hsl(var(--wine))" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-20 flex flex-col items-start gap-4 ${inView ? "animate-fade-up" : "opacity-0"}`}
        >
          <span className="font-body text-xs tracking-luxury text-golden uppercase">
            Why Minnae Orvèe
          </span>
          <h2
            className="font-display text-cream leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Formulated to perform.<br />
            <span className="italic text-golden">Crafted to feel.</span>
          </h2>
          <div className="h-px w-16 bg-golden/50 mt-2" />
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.number}
              className={`flex flex-col gap-5 ${inView ? `animate-fade-up delay-${(i + 2) * 100}` : "opacity-0"}`}
            >
              {/* Number + icon row */}
              <div className="flex items-center justify-between">
                <span
                  className="font-display text-[hsl(var(--typography-accent))] opacity-60"
                  style={{ fontSize: "3.5rem", lineHeight: 1 }}
                >
                  {benefit.number}
                </span>
                <div
                  className="p-3 border border-[hsl(var(--border))]"
                  style={{ borderRadius: 0 }}
                >
                  {benefit.icon}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[hsl(var(--border))]" />

              {/* Text */}
              <h3
                className="font-display text-cream"
                style={{ fontSize: "1.5rem" }}
              >
                {benefit.title}
              </h3>
              <p className="font-body text-beige text-sm leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
