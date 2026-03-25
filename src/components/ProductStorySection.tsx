import ingredientsTexture from "@/assets/ingredients-texture.jpg";
import { useInView } from "@/hooks/useInView";

export default function ProductStorySection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--wine-light))" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch">
        {/* Image column */}
        <div
          className={`relative h-80 md:h-auto overflow-hidden ${inView ? "animate-fade-in" : "opacity-0"}`}
        >
          <img
            src={ingredientsTexture}
            alt="Rare botanical ingredients"
            width={1920}
            height={900}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 50%, hsl(var(--wine-light)) 100%)",
            }}
          />
        </div>

        {/* Text column */}
        <div
          className={`flex flex-col justify-center px-8 md:px-16 py-20 gap-8 ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}
        >
          <span className="font-body text-xs tracking-luxury text-golden uppercase">
            The Story
          </span>

          <h2
            className="font-display text-cream leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            From ancient oils
            <br />
            <span className="italic text-golden">to modern ritual.</span>
          </h2>

          <div className="h-px w-12 bg-golden/40" />

          <p className="font-body text-beige text-sm leading-[1.9] font-light max-w-md">
            Each Minnae Orvèe formula begins with a single question: what does the hair
            truly need? We source cold-pressed argan from Moroccan cooperatives, marula
            from sub-Saharan reserves, and rosehip from hand-harvested Chilean fields —
            then marry them with biotechnology that amplifies every molecule.
          </p>

          <p className="font-body text-beige text-sm leading-[1.9] font-light max-w-md">
            The result is a collection of treatments that feel indulgent yet act with
            scientific precision. No fillers. No compromise. Only what the hair demands —
            delivered with the quiet confidence of true luxury.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="h-px w-8 bg-golden/50" />
            <span className="font-display text-golden italic text-lg">
              Rare. Refined. Real.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
