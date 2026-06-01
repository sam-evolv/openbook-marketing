'use client';

export default function ScarcityBar({ remaining }: { remaining: number }) {
  return (
    <div className="scarcity-bar" role="status" aria-live="polite">
      <div className="scarcity-inner">
        <span className="scarcity-pulse" />
        <span>R&amp;D launch · </span>
        <span className="scarcity-count">
          <span className="scarcity-num">{remaining}</span>/30 free bespoke websites left
        </span>
        <span>·</span>
        <a href="#pricing" className="scarcity-link">
          See offer
        </a>
      </div>
    </div>
  );
}
