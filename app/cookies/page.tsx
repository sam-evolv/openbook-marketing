import { LegalLayout } from '../_components/LegalLayout';

export const metadata = {
  title: 'Cookies Policy — OpenBook',
  description: 'Cookies Policy for OpenBook by OpenHouse AI Limited.',
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookies Policy" effective="27 April 2026" version="1.0">
      <p>This page explains what cookies and similar technologies OpenBook uses, why we use them, and how you can manage them.</p>

      <p>We&apos;ve designed OpenBook to be cookie-light. We don&apos;t use advertising cookies, analytics cookies that profile you, or any third-party tracking. The cookies we do use are the ones that are necessary for the platform to actually work.</p>

      <hr />

      <h2>1. What are cookies?</h2>

      <p>Cookies are small text files that websites store on your device. Some are essential for the site to function (e.g. keeping you signed in). Others are used for tracking or advertising. Under EU rules (the ePrivacy Directive and GDPR), websites must obtain your consent before setting non-essential cookies.</p>

      <p>Similar technologies — like local storage and session storage — work in similar ways. We treat them the same way as cookies for the purposes of this policy.</p>

      <h2>2. What we use, and why</h2>

      <h3>On the marketing site (<a href="http://openbook.ie">openbook.ie</a>)</h3>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>What it does</th>
            <th>Consent needed?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Vercel infrastructure cookies</strong></td>
            <td>Session continuity, fraud prevention</td>
            <td>No (strictly necessary)</td>
          </tr>
          <tr>
            <td><strong>Vercel Analytics</strong> (if enabled)</td>
            <td>Anonymous page-view counts. <strong>Does not use cookies</strong> and does not identify individual visitors.</td>
            <td>No (no cookies set, no tracking)</td>
          </tr>
          <tr>
            <td><strong>Vercel Speed Insights</strong> (if enabled)</td>
            <td>Anonymous performance data. <strong>Does not use cookies.</strong></td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <p>We do <strong>not</strong> use:</p>

      <ul>
        <li>Google Analytics</li>
        <li>Google Tag Manager</li>
        <li>Meta (Facebook) Pixel</li>
        <li>Hotjar, FullStory, or any session recording tool</li>
        <li>LinkedIn Insight Tag</li>
        <li>Any third-party advertising or remarketing pixels</li>
      </ul>

      <h3>On the app (<a href="http://app.openbook.ie">app.openbook.ie</a> and <a href="http://dash.openbook.ie">dash.openbook.ie</a>)</h3>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>What it does</th>
            <th>Consent needed?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Supabase Auth cookies</strong> (<code>sb-*-auth-token</code>)</td>
            <td>Keeps you signed in across pages</td>
            <td>No (strictly necessary)</td>
          </tr>
          <tr>
            <td><strong>Supabase session storage</strong></td>
            <td>Stores your auth state in the browser</td>
            <td>No (strictly necessary)</td>
          </tr>
          <tr>
            <td><strong>Next.js framework cookies</strong></td>
            <td>Routing, prefetching, basic site function</td>
            <td>No (strictly necessary)</td>
          </tr>
          <tr>
            <td><strong>Stripe cookies</strong> (only on checkout pages)</td>
            <td>Fraud prevention, secure payment processing</td>
            <td>No (strictly necessary for payment)</td>
          </tr>
        </tbody>
      </table>

      <p>All of these cookies are <strong>strictly necessary</strong> for the platform to do what it&apos;s there to do — sign you in, keep you signed in, take payments. Under EU law, consent is not required for strictly necessary cookies. We don&apos;t show a cookie banner because we have nothing to ask consent for.</p>

      <h2>3. Why no banner?</h2>

      <p>Cookie banners exist because most websites use cookies for tracking and advertising, and EU law requires consent for those. We&apos;ve deliberately built OpenBook to avoid those cookies. Showing you a banner that says &ldquo;we use strictly necessary cookies&rdquo; with one button to click would be banner theatre — it adds friction without giving you any meaningful choice.</p>

      <p>If we ever add tracking, analytics that use cookies, or any third-party advertising tag, <strong>we will add a banner before doing so</strong>, and we&apos;ll respect your choice.</p>

      <h2>4. How to manage cookies</h2>

      <p>You can disable cookies in your browser settings, but if you do, parts of the OpenBook app will stop working — most importantly, you won&apos;t be able to sign in. The marketing site (<a href="http://openbook.ie">openbook.ie</a>) will continue to work fine without cookies.</p>

      <p>Most browsers let you:</p>

      <ul>
        <li>Block all third-party cookies</li>
        <li>Block all cookies from specific domains</li>
        <li>Delete cookies on a schedule</li>
        <li>Clear all cookies</li>
      </ul>

      <p>For instructions, search your browser&apos;s help docs for &ldquo;manage cookies&rdquo;.</p>

      <h2>5. Mobile and PWA</h2>

      <p>When you save OpenBook to your phone&apos;s home screen as a PWA (progressive web app), the same cookies and storage apply. iOS and Android both isolate PWA storage from the regular Safari/Chrome storage, so it&apos;s separate from your normal browsing.</p>

      <h2>6. Changes</h2>

      <p>If we add, remove or change the cookies we use, we&apos;ll update this page and the effective date. Material additions (especially anything that would require a banner) will be communicated to existing users.</p>

      <h2>7. Contact</h2>

      <p>Cookie questions: <a href="mailto:sam@evolvai.ie">sam@evolvai.ie</a></p>

      <hr />

      <div className="legal-footer-note">
        <p><em>OpenHouse AI Limited, trading as OpenBook. Registered in Ireland.</em></p>
        <p><em>This document is version 1.0, effective 27 April 2026.</em></p>
      </div>
    </LegalLayout>
  );
}
