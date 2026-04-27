import { ReactNode } from 'react';
import './legal.css';

type LegalLayoutProps = {
  title: string;
  effective: string;
  version?: string;
  children: ReactNode;
};

export function LegalLayout({ title, effective, version, children }: LegalLayoutProps) {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back">← Back to OpenBook</a>
        <h1 className="legal-title">{title}</h1>
        <div className="legal-meta">
          <span><strong>Effective:</strong> {effective}</span>
          {version ? <span><strong>Version:</strong> {version}</span> : null}
        </div>
        {children}
      </div>
    </main>
  );
}
