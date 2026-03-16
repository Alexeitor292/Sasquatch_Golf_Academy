import { AdminShell } from "@/components/admin-shell";

export default function AdminCustomersPage() {
  return (
    <AdminShell
      title="Customer Accounts"
      description="Customer profiles should become the source of truth for memberships, purchases, lesson history, event registration, and future loyalty programs."
    >
      <section className="admin-main__section admin-grid--two">
        <article className="admin-card">
          <p className="eyebrow">Account Data</p>
          <h2>What belongs on the customer record</h2>
          <ul className="check-list">
            <li>Identity and contact details</li>
            <li>Membership status and billing history</li>
            <li>Lessons, club services, and bookings</li>
            <li>Order history and refunds</li>
            <li>Tags, notes, and support context</li>
          </ul>
        </article>

        <article className="admin-card">
          <p className="eyebrow">Permissions</p>
          <h2>Internal roles to support</h2>
          <ul className="check-list">
            <li>Owners and admins</li>
            <li>Content editors and marketers</li>
            <li>Inventory or fulfillment operators</li>
            <li>Customer support staff</li>
          </ul>
        </article>
      </section>
    </AdminShell>
  );
}

