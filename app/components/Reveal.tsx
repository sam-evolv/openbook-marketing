'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

// Small IntersectionObserver wrapper used everywhere for scroll-in animations.
// Adds `.in` once the element enters the viewport (threshold 0.15); `delay`
// is applied as a CSS transition-delay so staggered groups cascade.
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={'reveal' + (shown ? ' in' : '')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
