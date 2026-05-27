import '../../_components/legal.css';

export const metadata = {
  title: 'OpenBook in Claude — MCP integration',
  description:
    'How OpenBook connects to Claude and ChatGPT through the Model Context Protocol (MCP): the tools it exposes, how payment works, what is bookable, and how booking data is handled.',
};

export default function McpDocsPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back">← Back to OpenBook</a>
        <h1 className="legal-title">OpenBook in Claude</h1>

        <p><em>OpenBook is a booking platform for Irish service businesses, connected to ChatGPT and Claude through the Model Context Protocol (MCP). Ask the assistant for what you want — a personal trainer in Cork, a barber tomorrow morning, something bookable tonight — and OpenBook returns real, bookable slots from real businesses. A one-tap link confirms the booking.</em></p>

        <h2>Three things people use it for</h2>

        <p>People reach for OpenBook through their assistant in three main ways.</p>

        <p><strong>&ldquo;Find me a personal trainer in Cork&rdquo;</strong> — OpenBook returns matching businesses with available slots, ranked by recency, reviews, and proximity. The assistant picks the strongest match and surfaces its services and bookable times.</p>

        <p><strong>&ldquo;Book me into Dublin Iron Gym for a free assessment on the 19th of June at 7am&rdquo;</strong> — When you&apos;ve chosen, the assistant calls OpenBook&apos;s <code>hold_and_checkout</code> tool, which holds the slot for 10 minutes and returns a one-tap link. You confirm in your browser. Email confirmation follows.</p>

        <p><strong>&ldquo;What&apos;s bookable in Cork tonight?&rdquo;</strong> — OpenBook surfaces promoted inventory: last-minute openings and curated discounts. Useful when you&apos;ve got a window but no plan.</p>

        <h2>What&apos;s connected</h2>

        <p>OpenBook exposes eight MCP tools. Read tools return public business data; write tools act on a booking.</p>

        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Title</th>
              <th>Description</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>search_businesses</code></td>
              <td>Search local Irish service businesses</td>
              <td>Find businesses by service type and location.</td>
              <td>Read</td>
            </tr>
            <tr>
              <td><code>get_business_info</code></td>
              <td>Get business profile and details</td>
              <td>Full profile including services, prices, hours, accessibility.</td>
              <td>Read</td>
            </tr>
            <tr>
              <td><code>get_availability</code></td>
              <td>Check available booking slots</td>
              <td>Returns open slots for a specific service over a date range.</td>
              <td>Read</td>
            </tr>
            <tr>
              <td><code>hold_and_checkout</code></td>
              <td>Hold a slot and get checkout link</td>
              <td>Holds the chosen slot for 10 minutes and returns a one-tap checkout URL.</td>
              <td>Write</td>
            </tr>
            <tr>
              <td><code>check_booking_status</code></td>
              <td>Check held booking status</td>
              <td>Confirms whether a held booking has been completed or expired.</td>
              <td>Read</td>
            </tr>
            <tr>
              <td><code>join_waitlist</code></td>
              <td>Join waitlist for an unavailable slot</td>
              <td>Notifies you when a matching slot opens.</td>
              <td>Write</td>
            </tr>
            <tr>
              <td><code>get_promoted_inventory</code></td>
              <td>List promoted bookable slots</td>
              <td>Last-minute openings and curated discounts.</td>
              <td>Read</td>
            </tr>
            <tr>
              <td><code>record_post_booking_feedback</code></td>
              <td>Record post-booking feedback</td>
              <td>Captures sentiment after a session.</td>
              <td>Write</td>
            </tr>
          </tbody>
        </table>

        <h2>How payment works</h2>

        <p>OpenBook returns a one-tap checkout link. The user opens the link in their browser and pays the business directly through Stripe — OpenBook never holds or processes funds. Businesses without Stripe accept payment in person on the day. The payment mode is shown clearly on the checkout page before the user confirms.</p>

        <h2>What&apos;s bookable today</h2>

        <p>OpenBook is Ireland-only for now. Categories include personal training, gyms, salons and barbers, nail studios, spas and saunas, physios and recovery, and yoga and Pilates studios. New businesses join weekly.</p>

        <h2>Privacy and data handling</h2>

        <p>OpenBook collects only the data needed to fulfil a booking: name, email, optional phone, and the requested service. Data is stored encrypted in OpenBook&apos;s database. Only the relevant business sees the contact details for the bookings made with them. Full details in the <a href="/privacy">privacy policy</a> at openbook.ie/privacy.</p>

        <h2>Support</h2>

        <p>Questions or issues: <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a>.</p>
      </div>
    </main>
  );
}
