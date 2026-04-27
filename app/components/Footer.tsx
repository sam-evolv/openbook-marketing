export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-mark">O</span>
              <span>OpenBook</span>
            </a>
            <p className="tag">The booking platform built for the AI era.</p>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <a href="#features">Features</a>
            <a href="#ai">AI distribution</a>
            <a href="#pricing">Pricing</a>
            <a href="#consumer">Consumer app</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Customers</a>
            <a href="#">Changelog</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <a href="#">Docs</a>
            <a href="#">MCP server</a>
            <a href="#">Status</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/dpa">DPA</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 OpenHouse AI Limited. Trading as OpenBook. Registered in Ireland.</div>
          <div className="footer-social">
            <a href="#" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.01A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
