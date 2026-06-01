'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="container nav-inner">
        <a href="/" className="logo" aria-label="OpenBook">
          <img className="logo-img" src="/openbook-logo-transparent.png" alt="OpenBook" />
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#ai">AI bookings</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-cta">
          <a href="https://app.openbook.ie/onboard" className="btn-text">
            Sign in
          </a>
          <a href="https://app.openbook.ie/onboard" className="btn btn-primary">
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
