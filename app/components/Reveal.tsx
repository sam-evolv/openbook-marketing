'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  stagger?: boolean;
  delay?: number;
};

export default function Reveal({ children, stagger = false, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add('in'), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={stagger ? 'reveal-stagger' : 'reveal'}>
      {children}
    </div>
  );
}
