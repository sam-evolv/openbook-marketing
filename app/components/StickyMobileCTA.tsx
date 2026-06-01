'use client';

import { useEffect, useState } from 'react';

// Appears after ~720px scroll, mobile only (hidden ≥768px via CSS).
export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 720);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={'sticky-mobile-cta' + (show ? ' show' : '')} role="region" aria-label="Sticky offer">
      <div className="sticky-mobile-cta-info">
        <div className="sticky-mobile-cta-price">
          €79<span style={{ color: 'var(--text-2)', fontWeight: 400, fontSize: 14 }}>/month</span> · all-in
        </div>
        <div className="sticky-mobile-cta-sub">First 30 spots only</div>
      </div>
      <a href="https://app.openbook.ie/onboard" className="btn btn-primary">
        Start now <span>→</span>
      </a>
    </div>
  );
}
