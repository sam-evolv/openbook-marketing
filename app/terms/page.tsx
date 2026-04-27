import { LegalLayout } from '../_components/LegalLayout';

export const metadata = {
  title: 'Terms of Service — OpenBook',
  description: 'Terms of Service for OpenBook by OpenHouse AI Limited.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" effective="27 April 2026" version="1.0">
      <p>These Terms govern your use of OpenBook. By creating an account, listing a business, or making a booking, you agree to them. If you don&apos;t agree, please don&apos;t use the service.</p>

      <p>We&apos;ve written these in plain English. Where we&apos;ve had to use a legal term, we&apos;ve tried to explain it. We&apos;re not a law firm and these aren&apos;t intended to mislead anyone — they&apos;re a working agreement between us, the businesses on our platform, and the consumers who book with them.</p>

      <hr />

      <h2>1. Who we are</h2>

      <p>OpenBook is a product of <strong>OpenHouse AI Limited</strong>, an Irish company registered in Ireland.</p>

      <ul>
        <li><strong>Trading name:</strong> OpenBook</li>
        <li><strong>Registered office:</strong> Ballinvarosig, Carrigaline, Co. Cork, Ireland</li>
        <li><strong>Contact:</strong> <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a></li>
        <li><strong>Website:</strong> <a href="http://openbook.ie">openbook.ie</a></li>
      </ul>

      <p>In these Terms, &ldquo;OpenBook&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; all refer to OpenHouse AI Limited.</p>

      <h2>2. What OpenBook does</h2>

      <p>OpenBook is a software platform that lets local service businesses in Ireland accept online bookings. Businesses get a booking page, a dashboard, payment processing (via Stripe), and various tools to run their bookings. Consumers use OpenBook to discover those businesses and book appointments.</p>

      <p><strong>Important:</strong> OpenBook is <strong>not the merchant</strong> for any booking. The business you book with is the merchant. We facilitate the booking and the payment, but the actual service (the haircut, the gym session, the massage) is provided by, and the contract is between you and, the business you booked with.</p>

      <h2>3. Two types of users</h2>

      <p>These Terms apply to two distinct groups:</p>

      <ul>
        <li><strong>Businesses</strong> — owners and operators who list services and accept bookings on OpenBook.</li>
        <li><strong>Consumers</strong> — people who use OpenBook (including via guest checkout) to book services from those businesses.</li>
      </ul>

      <p>Some sections apply to one group, some to both. We&apos;ve labelled them.</p>

      <h2>4. Eligibility</h2>

      <p>You must be <strong>16 or older</strong> to use OpenBook. If you&apos;re under 16, please don&apos;t create an account or make a booking. We don&apos;t actively verify age, but using OpenBook means you&apos;re confirming you&apos;re 16 or older.</p>

      <p>For business accounts, the person creating the account must be authorised to act on behalf of the business they&apos;re listing.</p>

      <h2>5. Your account</h2>

      <p><strong>Both groups.</strong> You&apos;re responsible for keeping your sign-in details secure. We use Google Sign-In, Apple Sign-In, or magic-link email for authentication — there are no passwords for you to manage. If you think someone else has access to your account, email us immediately at <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a>.</p>

      <p>You&apos;re responsible for all activity on your account. If something happens through your account that breaches these Terms, we&apos;ll treat it as if you did it.</p>

      <h2>6. Bookings, cancellations and refunds</h2>

      <p><strong>Consumers.</strong> When you book a service, you&apos;re entering a contract with the business — not with OpenBook. The business is responsible for delivering the service. We&apos;re responsible for processing the booking and the payment.</p>

      <p><strong>Default refund policy.</strong> Each business can set their own cancellation policy, which is shown to you before you confirm the booking. If they haven&apos;t set one, OpenBook applies this default:</p>

      <ul>
        <li><strong>More than 24 hours before the booking:</strong> automatic full refund, less Stripe processing fees (around 2%, which Stripe keeps).</li>
        <li><strong>Within 24 hours of the booking:</strong> no automatic refund. The business may issue one at their discretion.</li>
        <li><strong>No-show:</strong> no refund.</li>
      </ul>

      <p>Stripe processing fees are never refundable in any scenario — Stripe keeps them whether the booking proceeds or not. This is Stripe&apos;s policy, not ours.</p>

      <p><strong>Disputes.</strong> If you have a problem with a service you received (or didn&apos;t receive), contact the business first. If you can&apos;t resolve it, email us at <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a> and we&apos;ll try to help mediate. As a last resort you can dispute the charge with your bank — but please try us first; bank disputes (chargebacks) are slow and stressful for everyone.</p>

      <p><strong>Refunds for cancelled or rescheduled bookings by the business.</strong> If a business cancels your booking, you&apos;ll get a full refund (including processing fees) automatically, normally within 5–10 business days.</p>

      <h2>7. Payments</h2>

      <p><strong>Consumers.</strong> Payments are processed by Stripe. Your card details are sent directly to Stripe — OpenBook never sees or stores them. By making a booking, you agree to Stripe&apos;s terms. Money for the booking goes to the business&apos;s Stripe account, not ours.</p>

      <p><strong>Businesses.</strong> To accept card payments you need a connected Stripe account (we&apos;ll guide you through it during onboarding). Stripe&apos;s fees apply. OpenBook does not take a percentage of your bookings — we charge you a subscription fee instead (see the Pricing section on <a href="http://openbook.ie">openbook.ie</a>).</p>

      <h2>8. Subscription tiers</h2>

      <p>OpenBook is offered on three tiers:</p>

      <ul>
        <li><strong>Free</strong> — €0/month, includes a booking page and up to 2 services.</li>
        <li><strong>Growth</strong> — €0/month, plus 2% on card payments processed through Stripe.</li>
        <li><strong>Pro</strong> — €39/month flat, no transaction fees from us, includes WhatsApp bookings, AI insights, flash sales, and AI distribution.</li>
      </ul>

      <p>Tier prices and features can change with 30 days&apos; notice. We&apos;ll always honour the price you signed up at for the duration of any free trial.</p>

      <p><strong>End-customer fees.</strong> OpenBook does not charge any fee to consumers, ever. The price they see at checkout is the price the business set, plus VAT if applicable.</p>

      <h2>9. Acceptable use</h2>

      <p>Don&apos;t use OpenBook to:</p>

      <ul>
        <li>Book services with no intention of attending (repeat no-shows may be locked out)</li>
        <li>List services that are illegal in Ireland or that misrepresent what&apos;s actually being sold</li>
        <li>Send spam, abuse other users, or impersonate someone</li>
        <li>Try to access other users&apos; data, scrape the platform at scale, or interfere with how the service runs</li>
        <li>Use the platform for anything that wouldn&apos;t pass a reasonable smell test</li>
      </ul>

      <p>We can suspend or terminate any account for serious or repeated breaches of this section without notice.</p>

      <h2>10. AI distribution</h2>

      <p>Pro businesses are surfaced through OpenBook&apos;s MCP server (<a href="http://mcp.openbook.ie">mcp.openbook.ie</a>), which makes their services queryable by AI assistants like ChatGPT, Claude, and Gemini. By choosing the Pro tier, you authorise us to share your business name, services, prices, location and live availability with these third-party AI services for the purpose of helping consumers discover and book your services.</p>

      <p>If you don&apos;t want this, downgrade to Growth or Free, where AI distribution is not included.</p>

      <h2>11. Intellectual property</h2>

      <p><strong>Our stuff.</strong> The OpenBook platform, code, brand, design and content are owned by OpenHouse AI Limited. You&apos;re getting a licence to use the service, not ownership of it.</p>

      <p><strong>Your stuff.</strong> Anything you upload — your business name, logo, photos, descriptions, customer data — stays yours. By uploading it to OpenBook, you give us a licence to host, display and process it for the purpose of running the service for you. That licence ends when you delete the content or close your account.</p>

      <p><strong>AI training.</strong> We do not use your data, your customers&apos; data, or your bookings to train AI models. Full stop. The AI we use (OpenAI, etc.) is also configured not to train on your data — see the Privacy Policy for details.</p>

      <h2>12. Termination</h2>

      <p><strong>You can leave any time.</strong> Cancel from your dashboard. No retention team, no phone calls, no winding down. When you cancel:</p>

      <ul>
        <li>Your booking page stays live for 30 days so existing customers aren&apos;t stranded</li>
        <li>After 30 days, your page archives — you can reactivate within 12 months by signing back in</li>
        <li>You can export every booking, customer record and receipt as CSV at any time</li>
        <li>Pending bookings will still be honoured during the 30-day grace period</li>
      </ul>

      <p><strong>We can terminate.</strong> We can give you 30 days&apos; notice for any reason, or terminate immediately if you breach these Terms in a serious way (fraud, illegal use, repeated abuse, non-payment of subscription fees beyond a 14-day grace period). If we terminate you immediately we&apos;ll do everything practical to give your customers a graceful path off the platform.</p>

      <h2>13. Service availability</h2>

      <p>We aim for 99.9% uptime but don&apos;t guarantee it. Like every internet service, OpenBook will sometimes be down for maintenance, third-party outages (Vercel, Supabase, Stripe), or unforeseen issues. We&apos;ll communicate about anything significant via the dashboard and email.</p>

      <p>We don&apos;t provide a Service Level Agreement (SLA) at the Free or Growth tier. Pro tier customers get priority support — meaning we respond faster, not that we guarantee a response time.</p>

      <h2>14. Limitation of liability</h2>

      <p>To the extent allowed by Irish law:</p>

      <ul>
        <li>We&apos;re not liable for any indirect, consequential or special losses (e.g. lost profits, lost bookings during an outage, reputational harm).</li>
        <li>Our total liability to you in any 12-month period is capped at the amount you paid us in subscription fees during that period (or €100 if you&apos;re on a free tier).</li>
        <li>Nothing in these Terms limits liability for things that can&apos;t be limited under Irish law (death, personal injury caused by our negligence, fraud, or breach of statutory consumer rights).</li>
      </ul>

      <p>We&apos;re a small Irish company, not an insurance scheme. If your business depends on bookings happening flawlessly every minute of every day, you should have backups and contingency plans — not just rely on us.</p>

      <h2>15. Governing law</h2>

      <p>These Terms are governed by Irish law. Any dispute will be heard exclusively in the Irish courts.</p>

      <h2>16. Changes</h2>

      <p>We can update these Terms. If we make a material change, we&apos;ll email you at least 30 days before it takes effect, and we&apos;ll always show the most recent version at openbook.ie/terms with a clear effective date. Continuing to use the service after a change means you accept the new version.</p>

      <h2>17. Contact</h2>

      <p>For anything to do with these Terms, account issues, or general support:</p>

      <p><strong>Email:</strong> <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a><br />
      <strong>Post:</strong> OpenHouse AI Limited, Ballinvarosig, Carrigaline, Co. Cork, Ireland</p>

      <p>For data protection matters specifically, see our Privacy Policy.</p>

      <hr />

      <div className="legal-footer-note">
        <p><em>OpenHouse AI Limited, trading as OpenBook. Registered in Ireland.</em></p>
        <p><em>This document is version 1.0, effective 27 April 2026.</em></p>
      </div>
    </LegalLayout>
  );
}
