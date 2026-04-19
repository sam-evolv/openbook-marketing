export default function Page() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center' }}>
      <div style={{ fontSize: 14, letterSpacing: '0.16em', color: '#D4AF37', fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>
        Coming soon
      </div>
      <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>
        OpenBook<span style={{ color: '#D4AF37' }}>.</span>
      </h1>
      <p style={{ marginTop: 20, fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 480 }}>
        Your booking page, live in 15 minutes.
      </p>
      <a href="https://app.openbook.ie/onboard" style={{ marginTop: 32, padding: '14px 28px', background: 'linear-gradient(145deg, #F6D77C, #D4AF37 50%, #8B6428)', color: '#000', fontWeight: 600, borderRadius: 999, textDecoration: 'none', boxShadow: '0 10px 24px rgba(212,175,55,0.3)' }}>
        Get started →
      </a>
    </main>
  );
}
