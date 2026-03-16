import { AdminShell } from "@/components/admin-shell";

const inventoryScenarios = [
  "Track club accessories and apparel by location.",
  "Reserve limited stock during checkout before capture.",
  "Monitor reorder thresholds for high-volume merchandise.",
  "Support digital or service-based products with no stock decrement.",
];

export default function AdminInventoryPage() {
  return (
    <AdminShell
      title="Inventory Operations"
      description="Location-aware stock tracking for merchandise, plus service-aware flows for lessons, fittings, memberships, and event bookings."
    >
      <section className="admin-main__section">
        <article className="admin-card">
          <p className="eyebrow">Inventory Model</p>
          <h2>What the schema already anticipates</h2>
          <ul className="check-list">
            {inventoryScenarios.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </AdminShell>
  );
}

