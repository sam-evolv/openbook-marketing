"use client";

import { useEffect, useState } from "react";
import { ONBOARD_URL, SIGNIN_URL } from "./links";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.inner} aria-label="Primary">
        <a href="#top" className={styles.wordmark}>
          OpenBook
        </a>

        <div className={styles.right}>
          <a href="#pricing" className={styles.link}>
            Pricing
          </a>
          <a href={SIGNIN_URL} className={styles.link}>
            Sign in
          </a>
          <a href={ONBOARD_URL} className={styles.pill}>
            Start free
          </a>
        </div>
      </nav>
    </header>
  );
}
