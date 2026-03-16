import { AdminShell } from "@/components/admin-shell";

export default function AdminOrdersPage() {
  return (
    <AdminShell
      title="Orders + Fulfillment"
      description="A unified order model makes it possible to combine memberships, physical items, services, taxes, refunds, and fulfillment events in one system."
    >
      <section className="admin-main__section">
        <article className="admin-card">
          <p className="eyebrow">Order Pipeline</p>
          <h2>Core flow this backend is prepared for</h2>
          <ol className="check-list">
            <li>Customer creates order with mixed products or services.</li>
            <li>Payment provider authorizes or captures funds.</li>
            <li>Inventory reserves and decrements where needed.</li>
            <li>Booking or fulfillment events are triggered.</li>
            <li>Refunds and voids are logged as payment transactions.</li>
          </ol>
        </article>
      </section>
    </AdminShell>
  );
}

