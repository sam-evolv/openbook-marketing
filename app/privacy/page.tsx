export default function PrivacyPolicy() {
  return (
    <div style={{
      background: '#0a0a0a',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: 'inherit'
    }}>
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '80px 24px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '8px'
        }}>Privacy Policy</h1>
        <p style={{ color: '#D4AF37', marginBottom: '48px' }}>
          Last updated: April 2026
        </p>

        {[
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
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#D4AF37',
              marginBottom: '8px'
            }}>{title}</h2>
            <p style={{
              color: 'rgba(255,255,255,0.75)',
              lineHeight: '1.7',
              fontSize: '0.95rem'
            }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
