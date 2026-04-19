import Nav from '../components/Nav';
import Footer from '../components/Footer';

const sections = [
  {
    title: 'Who we are',
    body: 'OpenBook AI is a service of OpenHouse AI Limited, registered in Ireland (trading as OpenBook AI). We operate the booking platform at openbook.ie and app.openbook.ie.'
  },
  {
    title: 'What data we collect',
    body: 'We collect your name, email address, and phone number when you create an account or make a booking. We also collect booking history and communication preferences.'
  },
  {
    title: 'How we use your data',
    body: 'We use your data to process bookings, send confirmation emails and reminders, and provide customer support. We do not sell your data to third parties.'
  },
  {
    title: 'WhatsApp messaging',
    body: 'If you contact a business via WhatsApp through our platform, your messages are processed to facilitate booking requests. Message history is stored securely and used only for booking purposes.'
  },
  {
    title: 'Data retention',
    body: 'We retain your data for as long as your account is active. You may request deletion of your data at any time by contacting us.'
  },
  {
    title: 'Your rights',
    body: 'Under GDPR you have the right to access, correct, or delete your personal data. Contact us at sam@openhouseai.ie to exercise these rights.'
  },
  {
    title: 'Cookies',
    body: 'We use essential cookies only to keep you logged in. We do not use advertising or tracking cookies.'
  },
  {
    title: 'Contact',
    body: 'OpenHouse AI Limited · sam@openhouseai.ie · openbook.ie'
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <p className="mono" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Legal</p>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(36px, 5vw, 56px)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '12px'
          }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-3)', fontSize: '14px', marginBottom: '64px', fontFamily: 'var(--mono)', letterSpacing: '0.08em' }}>
            Last updated: April 2026
          </p>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {sections.map(({ title, body }) => (
              <div key={title} style={{
                padding: '32px 0',
                borderBottom: '1px solid var(--line)',
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '32px'
              }}>
                <h2 style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  paddingTop: '4px'
                }}>
                  {title}
                </h2>
                <p style={{
                  color: 'var(--text-2)',
                  lineHeight: '1.7',
                  fontSize: '15px'
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
