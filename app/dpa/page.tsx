import { LegalLayout } from '../_components/LegalLayout';

export const metadata = {
  title: 'Data Processing Agreement — OpenBook',
  description: 'Data Processing Agreement for OpenBook by OpenHouse AI Limited.',
};

export default function DpaPage() {
  return (
    <LegalLayout title="Data Processing Agreement" effective="27 April 2026" version="1.0">
      <p>This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of the Terms of Service between <strong>OpenHouse AI Limited</strong> (&ldquo;Processor&rdquo;, &ldquo;OpenBook&rdquo;) and the business using OpenBook (&ldquo;Controller&rdquo;, &ldquo;you&rdquo;).</p>

      <p>When you, as a business, store and process information about <em>your customers</em> on OpenBook, <strong>you</strong> are the data controller for that customer data and <strong>OpenBook is your processor</strong>. This DPA explains how OpenBook handles that role.</p>

      <p>If you don&apos;t process personal data about identifiable people (e.g. you only do anonymous bookings), this DPA may not apply to you. For most businesses on OpenBook, it does.</p>

      <p>This DPA is GDPR-compliant for the EU and is intended to satisfy Article 28 of the GDPR.</p>

      <hr />

      <h2>1. Definitions</h2>

      <p>The following terms have their meanings as defined in the GDPR (EU 2016/679):<br />
      <strong>personal data</strong>, <strong>processing</strong>, <strong>controller</strong>, <strong>processor</strong>, <strong>data subject</strong>, <strong>sub-processor</strong>, <strong>personal data breach</strong>.</p>

      <p>In addition:</p>

      <ul>
        <li><strong>&ldquo;Customer Data&rdquo;</strong> means personal data about your customers (consumers) that you upload, generate, or process through OpenBook.</li>
        <li><strong>&ldquo;Services&rdquo;</strong> means the OpenBook platform.</li>
      </ul>

      <h2>2. Roles</h2>

      <ul>
        <li>You are the <strong>Controller</strong> of Customer Data.</li>
        <li>OpenBook is the <strong>Processor</strong>.</li>
        <li>For OpenBook&apos;s <em>own</em> data (your account, billing, usage logs), OpenBook is the Controller — see the Privacy Policy for that.</li>
      </ul>

      <h2>3. Scope and instructions</h2>

      <p>OpenBook will only process Customer Data:</p>

      <ul>
        <li>To provide the Services as described in the Terms of Service</li>
        <li>On your documented instructions, including via your normal use of the dashboard</li>
        <li>As required by EU or Irish law (in which case we&apos;ll notify you unless prohibited from doing so)</li>
      </ul>

      <p>If you give us an instruction that we believe breaches GDPR or other data protection law, we&apos;ll tell you and we may decline to act on it.</p>

      <h2>4. Categories of data and data subjects</h2>

      <table>
        <thead>
          <tr>
            <th>Categories of data subjects</th>
            <th>Categories of personal data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your customers (consumers)</td>
            <td>Name, email, phone, booking history, package balances, communication history, payment metadata (not card details), staff preferences</td>
          </tr>
          <tr>
            <td>Your staff</td>
            <td>Name, email, role, photo, schedule</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Sub-processors</h2>

      <p>OpenBook uses the sub-processors listed in our Privacy Policy (Section 5) to deliver the Services. By accepting this DPA, you authorise OpenBook to use these sub-processors. Each is bound by terms providing equivalent data protection.</p>

      <p>We&apos;ll notify you (by email and via the dashboard) at least 30 days before adding or replacing a sub-processor that processes Customer Data. If you object to a new sub-processor on reasonable data protection grounds, you may terminate the affected Service without penalty.</p>

      <h2>6. Confidentiality</h2>

      <p>OpenBook personnel with access to Customer Data are bound by confidentiality obligations. As of the effective date, only Sam Donworth has production access. Access is granted on a need-to-know basis and removed when no longer required.</p>

      <h2>7. Security</h2>

      <p>OpenBook will implement appropriate technical and organisational security measures to protect Customer Data, including:</p>

      <ul>
        <li>Encryption in transit (TLS 1.3)</li>
        <li>Encryption at rest (Supabase default AES-256)</li>
        <li>Row-level security on every database table</li>
        <li>Authentication-gated access (Google, Apple, or magic-link sign-in; no passwords stored)</li>
        <li>Card data is never received or stored by OpenBook (handled by Stripe directly)</li>
        <li>Logical separation of business data via row-level security tied to owner_id</li>
        <li>Routine backups (30 days rolling)</li>
        <li>Vulnerability monitoring on our infrastructure providers (Vercel, Supabase, Stripe)</li>
        <li>Restricted production access (currently one person)</li>
      </ul>

      <p>We&apos;ll review and update these measures as the platform grows.</p>

      <h2>8. Data subject requests</h2>

      <p>If a customer of yours contacts OpenBook directly to exercise their GDPR rights (access, deletion, etc.), we&apos;ll forward the request to you and assist as reasonably required. Most data subject requests should go through you, the controller.</p>

      <p>You can fulfil most requests directly from your dashboard:</p>

      <ul>
        <li><strong>Access</strong> — your dashboard shows all data we hold for each customer</li>
        <li><strong>Portability</strong> — you can export any customer&apos;s data as CSV</li>
        <li><strong>Erasure</strong> — you can delete a customer record, which removes them from your account (booking records may be retained for tax purposes per Section 11)</li>
        <li><strong>Rectification</strong> — you can edit customer records directly</li>
      </ul>

      <p>If you need OpenBook&apos;s help to fulfil a request you can&apos;t handle from the dashboard, email <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a>.</p>

      <h2>9. Personal data breaches</h2>

      <p>If OpenBook becomes aware of a personal data breach affecting Customer Data, we&apos;ll:</p>

      <ol>
        <li>Notify you without undue delay, and in any event within <strong>72 hours</strong> of becoming aware</li>
        <li>Provide you with the information you need to comply with your own breach notification obligations under GDPR Articles 33 and 34</li>
        <li>Cooperate with you to investigate, mitigate and remediate</li>
      </ol>

      <p>You&apos;re responsible for notifying the supervisory authority (the Irish DPC) and affected data subjects when required — though we&apos;ll help.</p>

      <h2>10. Data Protection Impact Assessments (DPIAs)</h2>

      <p>If you need to carry out a DPIA in relation to your use of OpenBook, OpenBook will provide reasonable assistance. For most local service businesses processing standard booking data, a DPIA is not required.</p>

      <h2>11. Retention and deletion</h2>

      <p>OpenBook will retain Customer Data for as long as you maintain your account and instruct us to keep it. On termination of your account:</p>

      <ul>
        <li>Customer Data is retained for 30 days as part of the grace period for your customers</li>
        <li>After the grace period, it&apos;s archived for 12 months in case of reactivation</li>
        <li>After 12 months, it&apos;s permanently deleted from our active systems within 30 days</li>
        <li>Backups containing Customer Data are deleted within a further 30 days</li>
      </ul>

      <p>If a tax/accounting record retention requirement applies (e.g. transaction records the Revenue Commissioners may need), the relevant records may be retained longer in accordance with Irish tax law.</p>

      <p>You can request earlier deletion of specific Customer Data at any time by deleting it from your dashboard or by emailing <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a>.</p>

      <h2>12. International transfers</h2>

      <p>Customer Data is primarily stored in the EU (Ireland). Where sub-processors based outside the EU/EEA receive Customer Data (Stripe, Resend, OpenAI, Meta), transfers are protected by Standard Contractual Clauses (SCCs) approved by the European Commission. The current set of SCCs (2021/914) is incorporated into our agreements with these sub-processors.</p>

      <h2>13. Audits</h2>

      <p>You can request reasonable information about OpenBook&apos;s data processing practices once per year, by writing to <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a>. As a small operator, we don&apos;t currently support on-site audits, but we&apos;ll provide written responses to reasonable questions and share any third-party security reports we have.</p>

      <h2>14. Liability</h2>

      <p>Liability under this DPA is governed by the limitation of liability clause in the main Terms of Service.</p>

      <h2>15. Term and termination</h2>

      <p>This DPA is effective as long as OpenBook processes Customer Data on your behalf. It terminates automatically when your OpenBook account is closed and the retention period in Section 11 has expired.</p>

      <h2>16. Conflicts</h2>

      <p>If there&apos;s a conflict between this DPA and the Terms of Service or Privacy Policy in respect of Customer Data, this DPA prevails.</p>

      <h2>17. Governing law</h2>

      <p>This DPA is governed by Irish law and subject to the exclusive jurisdiction of the Irish courts.</p>

      <h2>18. Contact</h2>

      <p>For DPA-related queries:</p>

      <p><strong>Email:</strong> <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a><br />
      <strong>Post:</strong> OpenHouse AI Limited, Ballinvarosig, Carrigaline, Co. Cork, Ireland</p>

      <hr />

      <div className="legal-footer-note">
        <p><em>OpenHouse AI Limited, trading as OpenBook. Registered in Ireland.</em></p>
        <p><em>This document is version 1.0, effective 27 April 2026.</em></p>
      </div>
    </LegalLayout>
  );
}
