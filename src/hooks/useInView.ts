import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  once?: boolean;
  initialInView?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.15, once = true, initialInView = false } = options;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(initialInView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if already in viewport on mount
    const rect = el.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight && rect.bottom >= 0;

    if (alreadyVisible) {
      setInView(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
