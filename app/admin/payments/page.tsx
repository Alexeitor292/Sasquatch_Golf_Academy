import { AdminShell } from "@/components/admin-shell";

export default function AdminPaymentsPage() {
  return (
    <AdminShell
      title="Payments + Providers"
      description="This foundation is built so Stripe, Square, or manual billing can all plug into a common payment provider and transaction model."
    >
      <section className="admin-main__section">
        <article className="admin-card">
          <p className="eyebrow">Payment Roadmap</p>
          <h2>Provider capabilities to phase in</h2>
          <ul className="check-list">
            <li>Test and live payment modes</li>
            <li>Webhooks for successful payments, refunds, disputes, and failures</li>
            <li>Membership renewals and recurring billing</li>
            <li>Manual invoice or offline payment support</li>
            <li>Per-order transaction event history</li>
          </ul>
        </article>
      </section>
    </AdminShell>
  );
}

